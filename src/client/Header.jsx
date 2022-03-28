import Image from "next/image";
import { MdSearch } from "react-icons/md";
const Header = (props) => {
  return (
    <header>
      {/* left */}
      <div className="flex items-center space-x-2 w-full max-w-xs">
        <Image src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg" width={55} height={55} />
        <div className="flex items-center space-x-1 dark:md:bg-gray-700 py-2.5 px-4 rounded w-full">
          <MdSearch />
          <input placeholder="search" className="hidden md:inline-flex bg-transparent text-sm focus:outline-none" />
        </div>
      </div>

      {/* right */}
      2:17:22
    </header>
  )
};

export default Header;
