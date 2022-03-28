import { bool, element, string } from "prop-types";

/**
 * Models an Input field with a Material Design kind-of look and feel (with the animated placeholder thingy).
 * The placeholder animation stuff is only done through CSS
 */
const LIInput = (props) => {
  const {
    placeholder = "Enter your text",
    placeholderOverlap = false,
    leftElement,
    rightElement,
    className = "",
    ...inputProps
  } = props;

  return (
    <div className={`li-input-group ${placeholderOverlap ? "bg-white" : ""}`}>
      <input type="text" className={`px-3 py-3 border border-gray-400 w-full ${className}`} placeholder={placeholder} {...inputProps} />
      <label className={`transition-all duration-300 pointer-events-none absolute text-gray-400 left-3 top-1/2 -translate-y-1/2 ${placeholderOverlap ? "" : "inside"}`}>
        {placeholder}
      </label>
      {rightElement &&
        <div className="absolute right-2 top-1/2 -translate-y-1/2">
          {rightElement}
        </div>
      }
    </div>
  );
};

LIInput.propTypes = {
  placeholder: string,
  // if true, the placeholder text will overlap the top border of the input when focused/filled-in
  placeholderOverlap: bool,
  leftElement: element,
  rightElement: element
};

export default LIInput;
