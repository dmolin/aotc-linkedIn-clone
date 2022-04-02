import { Menu, MenuItem } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { IoIosGitNetwork } from "react-icons/io";
import { signIn } from "next-auth/react";

const SignInButton = ({ providers }) => {
  return (
    <Popover2
      positioningStrategy="absolute"
      placement="bottom-end"
      portalClassName="signin-menu-popover"
      content={
        <div className="p-4 px-6 pb-6 flex flex-col gap-2 content-center text-gray-800">
          <div className="text-md font-semibold mb-2">How do you want to Sign In?</div>
          {Object.values(_.omit(providers, ["credentials"])).map(p => (
            <button
              className="text-lg flex flex-row gap-2 items-center border py-2 px-4 rounded-md border-blue-300 bg-blue-50 hover:bg-blue-500 text-gray-600 hover:text-white font-semibold"
              key={p.id}
              onClick={() => signIn(p.id, { callbackUrl: "/app" })}
            >
              <IoIosGitNetwork />
              Sign In with {p.id}
            </button>
          ))}
        </div>
      }
    >
      <div>
        <span className="sr-only">Open sign in menu</span>
        <button
          className="text-lg text-blue-600 font-semibold rounded-full border border-blue-600 px-6 py-2 transition-all hover:text-blue-700 hover:border-blue-700 hover:bg-blue-50">
          Sign In
        </button>
      </div>
    </Popover2>
  )
};

export default SignInButton;
