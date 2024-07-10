import icons from "@/components/icon/iconSvg";
import { ReactNode } from "react";
import "./icon.scss";

type params = {
  name: string;
  size?: String | Number;
  width?: String | Number;
  height?: String | Number;
};

const Icon = ({ name, size, width, height }: params): ReactNode => {
  const IconFont = icons[name];

  const style = {
    width: (width || size) + "px",
    height: (height || size) + "px",
  };

  return (
    <div
      className="common-icon"
      style={style}
      dangerouslySetInnerHTML={{ __html: IconFont }}
    ></div>
  );
};

export default Icon;
