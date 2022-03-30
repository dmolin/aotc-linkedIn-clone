import Image from "next/image";
import { MdSearch, MdHome, MdPeople } from "react-icons/md";
import { BsBriefcaseFill, BsFillChatDotsFill } from "react-icons/bs";
import { IoChatboxEllipses, IoNotifications } from "react-icons/io5";
import { GrHomeRounded, GrGroup, GrBusinessService, GrChat, GrNotification } from "react-icons/gr";
import { SiGravatar } from "react-icons/si";
import { CgMenuGridR } from "react-icons/cg";
import { motion } from "framer-motion";

import HeaderLink from "@/client/HeaderLink";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Header = (props) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme, theme } = useTheme();

  // this is for making theming works preventing hydration warnings with SSR
  useEffect(() => setMounted(true), []);

  const _renderThemeToggle = () => {
    if (!mounted) return null;

    console.log("theme", resolvedTheme);
    return (
      <div
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className={`bg-gray-600 flex flex-row items-center px-0.5 rounded-full h-6 w-14 cursor-pointer flex-shrink-0 relative ${resolvedTheme === "dark" ? "justify-end" : "justify-start"}`}
      >
        <span className="absolute left-1">🌜</span>
        <span className="absolute right-1">🌝</span>
        { /* animated toggle */}
        <motion.div
          className={`w-5 h-5 bg-white rounded-full z-40`}
          layout
          transition={{
            type: "spring",
            stiffness: 700,
            damping: 30
          }}
        />
      </div>
    );
  }

  const _renderLogo = () => {
    let src = "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg";
    let size={ w: 45, h: 45 };
    if (resolvedTheme === "dark") {
      src = "https://www.iconsdb.com/icons/preview/white/linkedin-3-xl.png";
      size = { w: 40, h: 40 };
    }
    return (
      <Image src={src} width={size.w} height={size.h} />
    );
  }

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-[#1D2226] py-1.5 px-1">
      <div className="flex flex-row items-center place-content-between max-w-screen-lg mx-auto">
        {/* left */}
        <div className="flex items-center flex-row flex-shrink-0 gap-2">
          {_renderLogo()}
          <div className="flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded">
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
          <HeaderLink icon={SiGravatar} text="Me" feed avatar hidden />
          <HeaderLink icon={CgMenuGridR} text="Work" feed hidden />

          {_renderThemeToggle()}
        </div>
      </div>
    </header>
  )
};

export default Header;
