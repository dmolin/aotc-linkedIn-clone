import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { getOrCreateElement } from "@/client/utils/domUtils";

const Dimmer = props => {
  const { onClick, children, id = "dimmer", dimmerRef } = props;
  return (
    createPortal(
      <motion.div
        {...(dimmerRef ? { ref: dimmerRef } : {})}
        onClick={onClick}
        className="id-dimmer-content absolute top-0 left-0 h-screen w-full overflow-y-scroll bg-black/70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {props.children}
      </motion.div>,
      getOrCreateElement(`dimmer-${id}`, "dimmer")
    )
  )
};

export default Dimmer;
