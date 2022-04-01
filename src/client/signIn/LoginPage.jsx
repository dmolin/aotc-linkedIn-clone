import Head from "next/head";
import Image from "next/image"
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import {
  MdExplore as ExploreIcon,
  MdGroup as GroupIcon,
  MdOndemandVideo as OnDemandVideoIcon,
  MdBusinessCenter as BusinessCenterIcon
} from "react-icons/md"

import HeaderLink from "@/client/HeaderLink";
import SignInButton from "./SignInButton";
import JoinNowButton from "./JoinNowButton";
import SignInPanel from "./SignInPanel";
import LinkedInLogo from "@/client/LinkedInLogo";
import BlankLayout from "@/client/layouts/BlankLayout";

const LoginPage = ({ providers }) => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "loading") {
    return (
      <div className="p-20">Loading...</div>
    );
  }

  if (status === "authenticated") {
    router.push("/app");
    return (
      <div>Redirecting...</div>
    );
  }

  return (
    <div className="space-y-10">
      <header className="flex justify-between items-center py-4 max-w-screen-lg mx-auto px-4">
        <div className="relative w-[135px] h-10">
          <LinkedInLogo extended objectFit="contain" />
        </div>

        <div className="flex items-center sm:divide-x divide-gray-300 items-end">
          <div className="hidden sm:flex gap-10 pr-8 items-center">
            <HeaderLink icon={ExploreIcon} text="Discover"/>
            <HeaderLink icon={GroupIcon} text="People"/>
            <HeaderLink icon={OnDemandVideoIcon} text="Learning"/>
            <HeaderLink icon={BusinessCenterIcon} text="Jobs"/>
          </div>

          <div className="pl-4 space-x-4 flex items-center flex-row sm:flex-col sm:space-x-0 md:flex-row md:space-x-4">
            <JoinNowButton />
            <SignInButton providers={providers}/>
          </div>
        </div>
      </header>

      <main className="flex flex-col md:flex-row items-center md:items-start max-w-screen-lg mx-auto gap-4">
        <div className="space-y-6 xl:space-y-10 gap-4 flex-1 pl-4">
          <h1
            className="text-center text-3xl sm:text-4xl md:text-6xl md:text-left text-amber-800/80 !leading-snug ">Welcome
            to your professional community</h1>
          <div className="flex flex-col items-center md:flex-none md:items-stretch md:pr-3 lg:pr-10">
            <SignInPanel />
          </div>
        </div>

        <div className="md:flex-1 w-[80%] h-[30rem] md:w-[650px] md:h-[650px]">
          <div className="relative w-full h-full">
            <Image src="https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAADCLr3coQt8AQiyj4giyWxfjsg.svg" layout="fill" priority/>
          </div>
        </div>
      </main>
    </div>
  );
};

LoginPage.layout = BlankLayout;

export default LoginPage;
