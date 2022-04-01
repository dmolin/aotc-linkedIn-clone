import { useSession } from "next-auth/react";

export default function AppLayout (props) {
  const session = useSession();

  // here we would display the LinkedIn animation while the session is loading
  if (session?.status === "loading") {
    return "Loading...";
  }

  return (
    <div className="bg-li-gray-100 h-screen">
      {props.children}
    </div>
  );
}
