import { MdSearch, MdHome, MdPeople } from "react-icons/md";
import { BsBriefcaseFill, BsFillChatDotsFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import { SiGravatar } from "react-icons/si";
import { CgMenuGridR } from "react-icons/cg";
import { HiUserCircle } from "react-icons/hi";

import HeaderLink from "@/client/HeaderLink";
import LinkedInLogo from "@/client/LinkedInLogo";
import ThemeToggle from "@/client/ThemeToggle";

const Header = (props) => {
  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-li-gray-800 pt-1.5 px-1">
      <div className="flex flex-row items-center place-content-between max-w-screen-lg mx-auto">
        {/* left */}
        <div className="flex items-center flex-row flex-shrink-0 gap-2">
          <LinkedInLogo />
          <div className="flex items-center space-x-1 md:bg-li-blue-100 dark:md:bg-gray-700 py-2.5 px-4 rounded">
            <MdSearch className="hidden md:inline-flex text-2xl" />
            <input placeholder="Search" className="hidden md:inline-flex bg-transparent focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow" />
          </div>
        </div>

        {/* right */}
        <div className="flex items-center flex-row gap-2">
          <HeaderLink icon={MdHome} text="Home" feed active />
          <HeaderLink icon={MdPeople} text="My Network" feed  />
          <HeaderLink icon={BsBriefcaseFill} text="Jobs" feed hidden />
          <HeaderLink icon={BsFillChatDotsFill} text="Messaging" feed />
          <HeaderLink icon={IoNotifications} text="Notifications" feed />
          <HeaderLink icon={HiUserCircle} text="Me" feed avatar hidden />
          <HeaderLink icon={CgMenuGridR} text="Work" feed hidden />

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
};

export default Header;
