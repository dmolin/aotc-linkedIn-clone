import _ from "lodash";

const HeaderLink = ({ icon, text, avatar, feed, className }) => {
  const xClass = avatar ? `w-7 h-7 ${className}` : "h-7 w-7";

  // we support both component-based icons and simple text icon names (that we'll prefix with "icon-")
  const Icon = _.isString(icon) ? () => <i className={`icon icon-${icon} ${xClass}`} /> : icon;

  return (
    <div className={`cursor-pointer flex flex-col justify-center items-center mt-1 ml-1 mr-1 ${feed ? 
      "text-black/60 hover:text-black dark:text-white/75 dark:hover:text-white space-y-1" : 
      "text-gray-500 hover:text-gray-700"}`}>
      <Icon className={xClass}/>
      <h4 className="">{text}</h4>
    </div>
  );
};

export default HeaderLink;
