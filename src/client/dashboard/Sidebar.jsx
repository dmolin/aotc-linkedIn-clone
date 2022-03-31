import { useSession } from "next-auth/react";
import Image from "next/image";
import Avatar from "@/client/Avatar";

const Sidebar = props => {
  const { data }  = useSession();

  console.log("SESSION", data);

  return (
    <div className="flex-row gap-2 min-w-max 2lg:w-[250px]">
      {/* top */}
      <div className="bg-white dark:bg-li-gray-800 rounded-lg overflow-hidden relative flex flex-col border border-gray-300 dark:border-none">
        {/* profile */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full h-14">
            {/* TODO:CODE fetch background image from user data once we have it persisted in the DB */}
            <Image
              src="https://media-exp1.licdn.com/dms/image/C5616AQGJwCKPP5Zq3A/profile-displaybackgroundimage-shrink_200_800/0/1578514995853?e=1654128000&v=beta&t=_7u6kxQrRlztynoGSTTYUNKOgA6rFCI2T2pX4VIAR3o"
              priority
              layout="fill"
            />
          </div>
          <Avatar />
        </div>
        {/* stats */}
        <div>

        </div>
      </div>
      {/* bottom */}
    </div>
  );
};

export default Sidebar;
