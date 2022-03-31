import { useSession } from "next-auth/react";
import Image from "next/image";
import { initials } from "@/shared/utils/string_utils";

const Avatar = props => {
  const session = useSession();
  console.log("SESSION", session);

  if (session.status !== "authenticated") return null;

  const className = `w-[72px] h-[72px] border-white rounded-full bg-gray-200 ${props.className || ""}`;
  return (
    <div>
      {session?.data?.user?.image ?
        <img src={session.data.user.image} className={className} /> :
        <div className={className}>
          {initials(session.data.user.name)}
        </div>
      }
    </div>
  );
};

export default Avatar;
