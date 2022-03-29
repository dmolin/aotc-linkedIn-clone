import _ from "lodash";

const HeaderLink = ({ icon, text, avatar, feed, active, className, hidden }) => {
  const iconClass = avatar ? `w-7 h-7 ${className}` : "h-7 w-7";

  // we support both component-based icons and simple text icon names (that we'll prefix with "icon-")
  const Icon = _.isString(icon) ? () => <i className={`icon icon-${icon} ${iconClass}`} /> : icon;

  // hidden prop = hidden on small screens
  const hiddenMod = hidden ? "hidden md:inline-flex" : "";
  const activeMod = active ? "!text-black dark:!text-white" : "";
  const feedMod = feed ?
    "text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white" :
    "text-gray-500 hover:text-gray-700";
  const textMod = feed ? "hidden lg:flex justify-center w-full mx-auto" : "";
  return (
    <div className={`cursor-pointer flex flex-col justify-center items-center mt-1 ml-1 mr-1 space-y-1 ${hiddenMod} ${feedMod} ${activeMod}`}>
      <Icon className={iconClass}/>
      <h4 className={textMod}>{text}</h4>
    </div>
  );
};

export default HeaderLink;
