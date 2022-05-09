import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";
import { HiOutlineX } from "react-icons/hi";

import Dimmer from "@/client/Dimmer";
import FocusTrap from "@/client/FocusTrap";

const TYPE = {
  dropIn: {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500
      },
      exit: {
        y: "100vh",
        opacity: 0
      }
    }
  }
};

// in-house version of a Modal, with background dimmer
const LIModal = props => {
  const { type = TYPE.dropIn, title, children, onClose, closeOnEsc = true } = props;
  return (
    <Dimmer onClick={onClose}>
      <FocusTrap onExit={closeOnEsc ? onClose : () => {}}>
        <AnimatePresence>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={type}
            className="li-panel"
            tabIndex={-1}
          >
            {title &&
              <div className="p-4 border-b flex flex-row justify-between items-center gap-4">
                <h2 className="text-xl">{title}</h2>
                {_.isFunction(onClose) &&
                  <a className="p-2 hover:bg-gray-200 rounded-full" onClick={onClose} tabIndex={0}>
                    <HiOutlineX/>
                  </a>
                }
              </div>
            }
            <div>
              {children}
            </div>
          </motion.div>
        </AnimatePresence>
      </FocusTrap>
    </Dimmer>
  );
};

export default LIModal;
