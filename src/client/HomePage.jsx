import Image from "next/image"
import {
  MdExplore as ExploreIcon,
  MdGroup as GroupIcon,
  MdOndemandVideo as OnDemandVideoIcon,
  MdBusinessCenter as BusinessCenterIcon
} from "react-icons/md"

import HeaderLink from "@/client/HeaderLink";
import SignInButton from "@/client/SignInButton";
import CardLink from "@/client/CardLink";

const HomePage = props => (
  <div>
    <header className="flex justify-around items-center py-4">
      <div className="relative w-36 h-10">
        <Image
          src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="flex items-center sm:divide-x divide-gray-300">
        <div className="hidden sm:flex space-x-8 pr-4 items-center">
          <HeaderLink icon={ExploreIcon} text="Discover" />
          <HeaderLink icon={GroupIcon} text="People" />
          <HeaderLink icon={OnDemandVideoIcon} text="Learning" />
          <HeaderLink icon={BusinessCenterIcon} text="Jobs" />
        </div>

        <div className="pl-4">
          <SignInButton />
        </div>
      </div>
    </header>

    <main className="flex flex-col md:flex-row items-center max-w-screen-lg mx-auto">
      <div className="space-y-6 xl:space-y-10 gap-4 flex-1">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl md:text-left text-amber-800/80 _max-w-xl !leading-snug pl-4 xl:pl-0">Welcome to your professional community</h1>
        <div className="">
          <CardLink text="Search for a job" />
          <CardLink text="Find a person you know" />
          <CardLink text="Learn a new skill" />
        </div>
      </div>

      <div className="md:flex-1 relative w-80 h-80 md:w-[650px] md:h-[650px]">
        <Image src="/images/huntin-bg.svg" layout="fill" priority />
      </div>
    </main>

    <div className="hidden">1:11:08</div>
  </div>
);

export default HomePage;
