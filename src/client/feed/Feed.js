import CreatePost from "@/client/feed/CreatePost";
import { signOut } from "next-auth/react";

const Feed = (props) => {
  return (
    <div className="flex gap-2 flex-1 items-start">
      <div className="flex-1">
        <CreatePost />

        <button className="bp4-button mt-8" onClick={() => signOut()}>Sign out (Work In Progress)</button>
      </div>
    </div>
  );
};

export default Feed;
