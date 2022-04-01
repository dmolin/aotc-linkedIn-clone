import Image from "next/image";
import { useTheme } from "next-themes";

const LinkedInLogo = props => {
  const { extended, ...imageProps } = props;
  const { resolvedTheme } = useTheme();

  const types = {
    short: {
      light: {
        src: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg",
        size: { w: 45, h: 45 }
      },
      dark: {
        src: "https://www.iconsdb.com/icons/preview/white/linkedin-3-xl.png",
        size: { w: 40, h: 40 }
      }
    },
    extended: {
      light: {
        src: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg",
        size: { w: 135, h: 35 }
      },
      dark: {
        src: "https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg",
        size: { w: 135, h: 35 }
      }
    }
  }

  const logo = types[extended ? "extended" : "short"][resolvedTheme];
  return (
    <Image src={logo?.src} width={logo?.size?.w} height={logo?.size?.h} {...imageProps} />
  );
};

export default LinkedInLogo;
