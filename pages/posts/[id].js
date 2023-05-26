import { ArrowLeftIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import CommentModal from '../../components/CommentModal'
import Sidebar from '../../components/Sidebar'
import Widgets from '../../components/Widgets'
import Post from '../../components/Post'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import { useState } from 'react'
import { db } from '../../firebase'
import { query, collection, orderBy } from 'firebase/firestore'
import Comment from '../../components/comment'



export default function PostPage({ newsResults, randomUsersResults }) {
    const router = useRouter();
    const {id} = router.query;
    const [post, setPost] = useState()
    const [comments, setComments] = useState([])

    // get post data
    useEffect(() => onSnapshot(doc(db, "posts", id), (snapshot) => setPost(snapshot)), [db, id])

    // get comments of the post
    useEffect(() => {onSnapshot(
        query(
            collection(db, "posts", id, "comments"), 
            orderBy("timestamp", "desc")
        ), (snapshot) => setComments(snapshot.docs)
        )}, [db, id])

    return (
        <div>
            <Head>
                <title>Post Page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='flex min-h-screen mx-auto'>

                {/* sidebar */}
                <Sidebar />

                {/* feed */}
                <div className="xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl border-gray-200">
                    <div className="flex items-center space-x-2 py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
                        <div className='hoverEffect' onClick={() => router.push("/")}>
                            <ArrowLeftIcon className='h-5'/>
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Tweet</h2>
                        
                    </div>
                    <Post id = {id} post={post} />

                    {comments.length > 0 && (
                        <div className=''>
                            {comments.map((comment) => (
                                <Comment 
                                    key={comment.id} 
                                    commentId={comment.id} 
                                    originalPostId={id}
                                    comment={comment.data()}
                                />
                            ))}
                        </div>
                    )}

                </div>

                {/* widgets */}
                <Widgets newsResults={newsResults.articles} randomUsersResults={randomUsersResults.results} />

                {/* modal */}
                <CommentModal />

            </main>


        </div>
    )
}

// https://saurav.tech/NewsAPI/top-headlines/category/business/us.json
// newsResults was created inside of the server
export async function getServerSideProps() {
    const newsResults = await fetch(
        "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
    ).then((res) => res.json());

    // Who to follow section

    const randomUsersResults = await fetch(
        "https://randomuser.me/api/?results=30&inc=name,login,picture"
    ).then((res) => res.json())

    return {
        props: {
            newsResults,
            randomUsersResults
        }
    }
};
