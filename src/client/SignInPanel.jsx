import { InputGroup } from "@blueprintjs/core";

const SignInPanel = (props) => {
  return (
    <form className="max-w-md text-lg relative">
      <div className="mt-input-group bg-white">
        <input type="text" className="px-3 py-3 border border-gray-400 w-full" placeholder="email" />
        <label className="transition-all duration-300 pointer-events-none absolute text-gray-400 left-3 top-1/2 -translate-y-1/2">Email or phone number</label>
      </div>
    </form>
  )
};

export default SignInPanel;
