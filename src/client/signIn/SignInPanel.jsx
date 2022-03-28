import { InputGroup } from "@blueprintjs/core";
import LIInput from "@/client/LIInput";
import LIPassword from "@/client/LIPassword";

const SignInPanel = (props) => {
  return (
    <form className="max-w-md text-lg relative flex flex-col gap-4">
      <LIInput placeholder="Email or phone number" />
      <LIPassword placeholder="Password" />
    </form>
  )
};

export default SignInPanel;
