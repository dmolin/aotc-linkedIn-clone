import _ from "lodash";

const HeaderLink = ({ icon, text }) => {
  // we support both component-based icons and simple text icon names (that we'll prefix with "icon-")
  const Icon = _.isString(icon) ? () => <i className={`icon icon-${icon}`} /> : icon;

  return (
    <div>
      <Icon className="text-2xl"/>
    </div>
  );
};

export default HeaderLink;
