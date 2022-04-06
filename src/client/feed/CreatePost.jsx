import { motion } from "framer-motion";
import { HiPhotograph } from "react-icons/hi";

import Avatar from "@/client/Avatar";

const PostLink = props => {
  const { content, icon = HiPhotograph, className = "" } = props;
  const Icon = icon;
  return (
    <motion.button
      className="flex gap-2 items-center flex-1 hover:bg-gray-100 py-3 px-2 rounded-md"
      style={{ whiteSpace: "nowrap" }}
    >
      <Icon className={`text-3xl ${className}`} />
      <span className="li-label">{content}</span>
    </motion.button>
  );
};

const CreatePost = props => {
  return (
    <div className="flex-1 li-panel p-4 flex-col gap-2">
      <div className="flex flex-row gap-4 place-items-center">
        <Avatar size="small" className="li-clickable" />

        <motion.button
          onClick={() => {}}
          className="text-left li-clickable flex-1 border border-gray-300 bg-white text-gray-600 dark:text-white/75 dark:bg-transparent dark:border-white/40 hover:bg-gray-100 dark:hover:bg-gray-6 00 py-4 px-8 font-bold rounded-full my-2"
        >
          Start a post
        </motion.button>
      </div>
      <div className="flex flex-wrap gap-3">
        <PostLink content="Photo" icon={HiPhotograph} className="text-blue-300" />
        <PostLink content="Video" icon={HiPhotograph} className="text-green-300" />
        <PostLink content="Event" icon={HiPhotograph} className="text-yellow-300" />
        <PostLink content="Write article" icon={HiPhotograph} className="text-red-300" />
      </div>
    </div>

  );
};

export default CreatePost;
