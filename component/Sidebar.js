import Image from "next/image";
import SidebarMenuItem from "./SidebarMenuItem";
import {HomeIcon} from "@heroicons/react/solid";
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxInIcon, UserIcon } from "@heroicons/react/outline"

export default function Sidebar() {
  return (
    <div>
        {/* Twitter logo */}
        <div className="">
              <Image width="50" height="50" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png"></Image>
        </div>

        {/* menu */}
        <div className="">

            <SidebarMenuItem text="Home" Icon={HomeIcon} />
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxInIcon} />
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profile" Icon={UserIcon} />
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />

        </div>

        {/* button */}

        <button>
            Tweet
        </button>

        {/* mini profile */}

        <div className="">
            <img src="https://cdn-icons-png.flaticon.com/512/146/146035.png" alt="user-img" />
            <div className="">
                <h4>Tia King</h4>
                <p>code everyday</p>
            </div>
            <DotsHorizontalIcon height="20" />
        </div>

    </div>
  )
}
