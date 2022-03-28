import { useState } from "react";
import { bool, string } from "prop-types";
import _ from "lodash";

import LIInput from "@/client/LIInput";

/**
 * Models an Input field with a Material Design kind-of look and feel (with the animated placeholder thingy).
 * The placeholder animation stuff is only done through CSS
 */
const LIPassword = (props) => {
  const [visible, toggleVisible] = useState(false);

  // =================
  // Event handling
  // =================
  const _toggleVisibility = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleVisible(!visible);
  };

  // ==================
  // Rendering
  // ==================
  return (
    <div className="relative">
      <LIInput
        {..._.omit(props, ["show"])}
        type={visible ? "text" : "password"}
        className="pr-20"
        rightElement={
          <button className="p-2 hover:bg-gray-200 cursor-pointer text-gray-700" onClick={_toggleVisibility}>
            Show
          </button>
        }
      />
    </div>
  );
};

LIPassword.propTypes = {
  // true if we have the "show" button to unmask the password
  show: bool
};

export default LIPassword;