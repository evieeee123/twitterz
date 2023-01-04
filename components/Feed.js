import { SparklesIcon } from "@heroicons/react/solid";
import Input from "./Input";
import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Evieee",
      username: "codingeveryday",
      userImg: "https://cdn-icons-png.flaticon.com/512/146/146035.png",
      img: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "nice view!",
      timestamps: "2 hours ago"
    },
    {
      id: "2",
      name: "Coco",
      username: "Cocolikecode",
      userImg: "https://cdn-icons-png.flaticon.com/512/146/146035.png",
      img: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      text: "Wowww",
      timestamps: "3 hours ago"
    }
  ]
  return (
      <div className="xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl border-gray-200">
        <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
            <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
                <SparklesIcon className="h-5" />
            </div>
        </div>
        <Input />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
  )
}
