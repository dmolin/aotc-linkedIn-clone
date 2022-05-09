import { motion } from "framer-motion";
import _ from "lodash";
import { HiOutlineX } from "react-icons/hi";
import { Classes, Dialog, DialogProps } from "@blueprintjs/core";


import Dimmer from "@/client/Dimmer";
import FocusTrap from "@/client/FocusTrap";

const LIModalBlueprint = props => {
  const { title, onClose, children } = props;

  return (
    <Dialog isOpen onClose={onClose} title={title}>
      <div className={Classes.DIALOG_BODY}>
        {children}
      </div>
    </Dialog>
  );
}

export default LIModalBlueprint;
