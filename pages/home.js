import Image from "next/image"
import {
  MdExplore,
  MdExplore as ExploreIcon,
  MdGroup as GroupIcon,
  MdOndemandVideo as OnDemandVideoIcon,
  MdBusinessCenter as BusinessCenterIcon
} from "react-icons/md"

import HeaderLink from "/components/HeaderLink";

const Home = props => (
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
      </div>
    </header>

    <div>
      Stopped at 41:17
    </div>
  </div>
);

export default Home;
