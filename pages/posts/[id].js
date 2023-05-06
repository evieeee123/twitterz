import Head from 'next/head'
import CommentModal from '../../components/CommentModal'
import Sidebar from '../../components/Sidebar'
import Widgets from '../../components/Widgets'



export default function Post({ newsResults, randomUsersResults }) {
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
