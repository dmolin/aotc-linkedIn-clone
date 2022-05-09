import { AnimatePresence, motion } from "framer-motion";
import { HiPhotograph } from "react-icons/hi";
import { useRecoilState } from "recoil";

import Avatar from "@/client/Avatar";
import { createPostModalState } from "@/client/state/atoms/modalAtoms";
import Dimmer from "@/client/Dimmer";
import LIModal from "@/client/LIModal";

const PostLink = props => {
  const { content, icon = HiPhotograph, className = "" } = props;
  const Icon = icon;
  return (
    <button
      className="flex gap-2 items-center flex-1 hover:bg-gray-100 py-3 px-2 rounded-md"
      style={{ whiteSpace: "nowrap" }}
    >
      <Icon className={`text-3xl ${className}`} />
      <span className="li-label">{content}</span>
    </button>
  );
};

const CreatePost = props => {
  const [modalState, setModalState] = useRecoilState(createPostModalState);

  // console.log("modal state", modalState);

  return (
    <div className="flex-1 li-panel p-4 flex-col gap-2">
      <div className="flex flex-row gap-4 place-items-center">
        <Avatar size="small" className="li-clickable" />

        <button
          onClick={() => setModalState({ ...modalState, open: !modalState.open })}
          className="text-left li-clickable flex-1 border border-gray-300 bg-white text-gray-600 dark:text-white/75 dark:bg-transparent dark:border-white/40 hover:bg-gray-100 dark:hover:bg-gray-6 00 py-4 px-8 font-bold rounded-full my-2"
        >
          Start a post
        </button>
      </div>
      <div className="flex flex-wrap gap-3">
        <PostLink content="Photo" icon={HiPhotograph} className="text-blue-300" />
        <PostLink content="Video" icon={HiPhotograph} className="text-green-300" />
        <PostLink content="Event" icon={HiPhotograph} className="text-yellow-300" />
        <PostLink content="Write article" icon={HiPhotograph} className="text-red-300" />
      </div>
      {modalState.open &&
        <LIModal
          type={modalState.type}
          title="Create a post"
          onClose={() => setModalState({ ...modalState, open: false })}
        >
          <div className="p-4">
            some content
            <div>
              <button>press me</button>
              <button>or me</button>
            </div>
          </div>
        </LIModal>
      }
    </div>

  );
};

export default CreatePost;
