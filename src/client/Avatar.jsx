import { useSession } from "next-auth/react";
import Image from "next/image";
import { initials } from "@/shared/utils/stringUtils";

const Avatar = props => {
  const { size = "medium" } = props;
  const session = useSession();
  if (session.status !== "authenticated") return null;

  const _getSize = () => {
    switch (size) {
      case "small":
        return "w-[48px] h-[48px]";
      case "medium":
        return "w-[72px] h-[72px]";
    }
  };

  const className = `${_getSize()} border-white rounded-full bg-gray-200 ${props.className || ""}`;
  const _onImageError = (ev) => {
    const target = ev.target;
    if (!target) return;
    target.onError=null;
    target.src="/images/avatar.png";
  };

  return (
    <div>
      {session?.data?.user?.image ?
        <img
          src={session.data.user.image}
          className={className}
          onError={_onImageError}
        /> :
        <div className={className}>
          {initials(session.data.user.name)}
        </div>
      }
    </div>
  );
};

export default Avatar;
