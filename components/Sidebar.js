import {
  faBell,
  faBookmark,
  faDotCircle,
  faEllipsisH,
  faEnvelope,
  faHashtag,
  faHouseUser,
  faList,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Logo from "../assets/logo.jpg";
import SidebarLink from "./SidebarLink";

function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center h-14 w-14 hoverAnimation p-0 xl:ml-24">
        <Image src={Logo} width={30} height={30} />
      </div>
      <div className="space-y-2 5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink text="Home" icon={faHouseUser} active />
        <SidebarLink text="Explore" icon={faHashtag} />
        <SidebarLink text="Notifications" icon={faBell} />
        <SidebarLink text="Messages" icon={faEnvelope} />
        <SidebarLink text="Bookmarks" icon={faBookmark} />
        <SidebarLink text="Lists" icon={faList} />
        <SidebarLink text="Profile" icon={faUserAstronaut} />
        <SidebarLink text="More" icon={faDotCircle} />
      </div>
      <button className="hidden xl:inline ml-auto bg-[#1d9bf0] hover:bg-[#1a8cd8] text-white font-bold shadow-lg rounded-full w-56 h-[52px] text-lg">
        Tweet
      </button>
      <div className="bg-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto mt-auto">
        <img src={Logo} className="h-10 w-10 rounded-full xl:mr-2.5" />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">Juaid Rakin</h4>
          <p className="text-[#6e767d]">@juaid</p>
        </div>
        <FontAwesomeIcon
          icon={faEllipsisH}
          className="h-5 hidden xl:inline ml-10"
        />
      </div>
    </div>
  );
}

export default Sidebar;
