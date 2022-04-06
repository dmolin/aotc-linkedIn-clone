import _ from "lodash";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Avatar from "@/client/Avatar";
import { HiBookmark } from "react-icons/hi";
import SocialPanel from "@/client/feed/SocialPanel";

const Sidebar = props => {
  const { data }  = useSession();

  console.log("SESSION", data);

  const _renderStat = (name, value, extra) => (
    <li className="flex flex-row place-content-between gap-2 px-4 py-2 li-selectable li-clickable">
      <div>
        <h4 className="leading-4 li-label dark:text-white/50">{name}</h4>
        {extra || null}
      </div>
      <span className="text-blue-600 font-bold">{value}</span>
    </li>
  );

  return (
    <div className="flex flex-col gap-2 min-w-max 2lg:w-[250px] text-sm">
      {/* top */}
      <div className="li-panel">
        {/* profile */}
        <div className="flex flex-col items-center text-center relative pb-6">
          <div className="relative w-full h-16">
            {/* TODO:CODE fetch background image from user data once we have it persisted in the DB */}
            <Image
              src="https://media-exp1.licdn.com/dms/image/C5616AQGJwCKPP5Zq3A/profile-displaybackgroundimage-shrink_200_800/0/1578514995853?e=1654128000&v=beta&t=_7u6kxQrRlztynoGSTTYUNKOgA6rFCI2T2pX4VIAR3o"
              priority
              layout="fill"
            />
          </div>
          <div className="hover:underline hover:cursor-pointer">
            <Avatar className="absolute top-6 border-2 left-1/2 -translate-x-1/2 "/>
            <h4 className="mt-14 font-bold text-lg decoration-purple-700">{data?.user?.name}</h4>
          </div>
          <div className="px-4">
            <p className="text-dimmed">{data?.user?.email}</p>
          </div>
        </div>
        {/* stats */}
        <div className="hidden md:block">
          <div className="li-border py-4">
            <ul className="flex flex-col">
              {_renderStat("Who viewed your profile", 321)}
              {_renderStat("Connections", 1290, <a className="font-bold pt-2">Manage your network</a>)}
            </ul>
          </div>
          <div className="flex li-border li-selectable li-clickable flex-col gap-0 py-4 px-4">
            <span className="text-dimmed text-sm">Access exclusive tools & insights</span>
            <div>
              <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />
              <span className="font-bold">Try premium for free</span>
            </div>
          </div>
          <div className="flex flex-row gap-2 li-selectable li-clickable li-border px-4 py-2 text-gray-800 dark:text-white/75">
            <HiBookmark className="text-xl -mx-1"/>
            <span className="font-bold">My items</span>
          </div>
        </div>
      </div>
      {/* bottom */}
      <SocialPanel className="hidden md:block" />
    </div>
  );
};

export default Sidebar;
