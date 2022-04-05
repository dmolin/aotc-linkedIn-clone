import Avatar from "@/client/Avatar";
import { Button } from "@blueprintjs/core";

const CreatePost = props => {
  return (
    <div className="flex-1 li-panel p-4 flex-col gap-4">
      <div className="flex flex-row gap-4 place-items-center">
        <Avatar size="small" className="li-clickable" />

        <button
          className="text-left li-clickable flex-1 border border-gray-300 bg-white text-gray-600 dark:text-white/75 dark:bg-transparent dark:border-white/40 hover:bg-gray-100 dark:hover:bg-gray-600 py-4 px-8 font-bold rounded-full my-2"
        >Start a post</button>
      </div>
    </div>

  );
};

export default CreatePost;
