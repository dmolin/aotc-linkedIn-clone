import { Button } from "@blueprintjs/core";
import LIInput from "@/client/LIInput";
import LIPassword from "@/client/LIPassword";
import { useState } from "react";
import { swallowEvent } from "@/shared/utils/events_utils";
import { signIn } from "next-auth/react";

const SignInPanel = (props) => {
  const [processing, setProcessing] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const _onSignIn = async (e) => {
    setProcessing(true);
    swallowEvent()(e);
    console.log("signing in", form);
    const res = await signIn("credentials", form);
    console.log("result", res);
    setProcessing(false);
  }

  const _onChange = (e) => {
    const target = e.target;
    setForm({
      ...form,
      [target.name]: target.value
    });
  };

  return (
    <form className="max-w-md text-lg relative flex flex-col gap-4">
      <LIInput name="email" value={form.email} placeholder="Email or phone number" onChange={_onChange} />
      <LIPassword name="password" value={form.password} placeholder="Password" onChange={_onChange} />
      <a href="#">Forgot Password?</a>
      <Button
        intent="primary"
        loading={processing}
        className="border !bg-sky-600 !text-white hover:!bg-sky-700 py-4 px-8 w-full text-xl rounded-full my-2"
        onClick={_onSignIn}
      >Sign in</Button>
    </form>
  )
};

export default SignInPanel;
