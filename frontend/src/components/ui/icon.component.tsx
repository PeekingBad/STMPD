"use client";

import { ArrowDown, ArrowRight } from "public/icon";
import React from "react";

export type IconVariant = "arrow-down" | "arrow-right";

type Props = {
  icon: IconVariant;
  className?: string;
  decorative?: boolean;
  onClick?: () => void;
  buttonClassName?: string;
  viewBox?: string;
};
const Icon: React.FC<Props> = ({
  icon,
  className,
  decorative,
  onClick,
  buttonClassName,
  viewBox,
}) => {
  let IconElement = null;
  let label = "";
  switch (icon) {
    case "arrow-down":
      IconElement = ArrowDown;
      break;
    case "arrow-right":
      IconElement = ArrowRight;
      break;

    default:
      // eslint-disable-next-line no-console
      console.warn(`Icon ${icon} not found`);
      break;
  }
  if (!IconElement) {
    return null;
  }
  if (onClick) {
    return (
      <button className={buttonClassName} type="button" onClick={onClick}>
        <IconElement
          aria-hidden="true"
          focusable="false"
          className={className}
          viewBox={viewBox}
        />
      </button>
    );
  }
  return (
    <IconElement
      aria-hidden={decorative ? "true" : "false"}
      className={className}
      viewBox={viewBox}
    />
  );
};
export default Icon;
