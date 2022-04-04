import { Button } from "@blueprintjs/core";
import { HiChevronDown, HiPlusSm } from "react-icons/hi";

const SocialPanel = props => {
  const { className = "" } = props;

  const _renderLink = (name, icon, defOptions) => {
    const options = {
      link: true,
      ...defOptions
    };
    return (
      <div className="flex flex-row justify-between items-center group">
        {options?.link ?
          <a href="#" className="flex-1 li-link font-bold"><h4>{name}</h4></a> :
          <h4>{name}</h4>
        }
        {icon ?
          <Button
            minimal
            icon={icon}
            className={`rounded-full dark:text-white/75 dark:hover:text-white/75 ${options.persistent ? "" : "invisible group-hover:visible"}`}
          /> :
          <Button minimal icon="circle" className="invisible" />
        }
      </div>
    );
  };

  return (
    <div className={`li-panel ${className}`}>
      <div className="flex flex-col gap-3 p-4">
        {_renderLink("Recent", <HiChevronDown />, { link: false })}
        {_renderLink("Groups", <HiChevronDown />)}
        {_renderLink("Events", <HiPlusSm />, { persistent: true })}
        {_renderLink("Followed Hashtags")}
      </div>
    </div>
  );
};

export default SocialPanel;
