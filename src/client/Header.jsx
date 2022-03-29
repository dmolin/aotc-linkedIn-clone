import Image from "next/image";
import { MdSearch, MdHome, MdPeople } from "react-icons/md";
import { BsBriefcaseFill, BsFillChatDotsFill } from "react-icons/bs";
import { IoChatboxEllipses, IoNotifications } from "react-icons/io5";
import { GrHomeRounded, GrGroup, GrBusinessService, GrChat, GrNotification } from "react-icons/gr";
import { SiGravatar } from "react-icons/si";
import { CgMenuGridR } from "react-icons/cg";

import HeaderLink from "@/client/HeaderLink";

const Header = (props) => {
  return (
    <header>
      {/* left */}
      <div className="flex items-center flex-row w-full">
        <Image src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" width={45} height={45} />
        <div className="flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded">
          <MdSearch className="text-2xl" />
          <input placeholder="Search" className="hidden md:inline-flex bg-transparent focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow" />
        </div>
      </div>

      {/* right */}
      <div className="flex items-center space-x-6">
        <HeaderLink icon={MdHome} text="Home" feed active />
        <HeaderLink icon={MdPeople} text="My Network" feed  />
        <HeaderLink icon={BsBriefcaseFill} text="Jobs" feed hidden />
        <HeaderLink icon={BsFillChatDotsFill} text="Messaging" feed />
        <HeaderLink icon={IoNotifications} text="Notifications" feed />
        <HeaderLink icon={SiGravatar} text="Me" feed avatar hidden />
        <HeaderLink icon={CgMenuGridR} text="Work" feed hidden />
      </div>
  2:23:58
    </header>
  )
};

export default Header;
