import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {HomeIcon} from "@heroicons/react/solid";
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxInIcon, UserIcon } from "@heroicons/react/outline"
import { useSession, signIn, signOut } from "next-auth/react";

export default function Sidebar() {
  const {data: session} = useSession();
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
        {/* Twitter logo */}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="twitter logo"></Image>
        </div>

        {/* menu */}
        <div className="mt-4 mb-2.5 xl:items-start">

            <SidebarMenuItem text="Home" Icon={HomeIcon} active />
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} />

            {session && (
              <>
              <SidebarMenuItem text="Notifications" Icon={BellIcon} />
              <SidebarMenuItem text="Messages" Icon={InboxInIcon} />
              <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
              <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
              <SidebarMenuItem text="Profile" Icon={UserIcon} />
              <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
              </>
            )}


        </div>

        {/* button */}

        {session ? (
        <>
          <button className="bg-blue-400 rounded-full text-white w-56 h-12 font-bold shadow-md hover:brightness-95 hidden xl:inline">
              Tweet
          </button>

          {/* mini profile */}

            <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
              <img onClick={signOut} src={session.user.image} alt="user-img" className="h-10 w-10 rounded-full xl:mr-2" />
              <div className="leading-5 hidden xl:inline">
                  <h4 className="font-boid">{session.user.name}</h4>
                  <p className="text-gray-500">@{session.user.username}</p>
              </div>
              <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
          </div>
        </>
        ) : (
          <button onClick={signIn} className="bg-blue-400 rounded-full text-white w-36 h-12 font-bold shadow-md hover:brightness-95 hidden xl:inline">Sign in</button>
        )}


    </div>
  )
}
