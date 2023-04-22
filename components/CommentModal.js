import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atom/modalAtom";
import Modal from "react-modal";
import { XIcon } from "@heroicons/react/outline";
import { useEffect } from "react";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import Moment from "react-moment";

export default function CommentModal() {
    const [open, setOpen] = useRecoilState(modalState);
    const [postId] = useRecoilState(postIdState);
    const [post, setPost] = useState({});

    useEffect(() => {
        onSnapshot(doc(db, "posts", postId), (snapshot) => {(setPost(snapshot))})
    }, [postId, db])

  return (
    <div>
        <h1>Comment Modal</h1>
        {open && (
            <Modal 
            isOpen={open}
            onRequestClose={() => setOpen(false)}
            className="max-w-lg h-[300px] w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-1 border-gray-200 rounded-xl shadow-md">
                <div className="p-1">
                    <div className="border-b border-gray-200 py-2 px-1.5">
                        <div onClick={() => setOpen(false)} className="hoverEffect h-9 w-9 flex items-center justify-center">
                            <XIcon className="h-[22px] text-gray-700" />
                        </div>
                    </div>
                      <div className="p-2 flex items-center space-x-1">
                        <img className='h-11 w-11 rounded-full mr-4' src={post?.data()?.userImg} alt='user-image' />
                        <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>{post?.data()?.name}</h4>
                        <span className='text-sm sm:text-[15px]'>@{post?.data()?.username} - </span>
                        <span className='text-sm sm:text-[15px] hover:underline'>
                            {/* {post.timestamp} */}
                            <Moment fromNow>{post?.data().timestamp?.toDate()}</Moment>
                        </span>
                      </div>
                </div>
            </Modal>
        )}
    </div>
  )
}
