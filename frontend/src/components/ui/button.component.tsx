import React from "react";

type ButtonProps = {
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({label, children, onClick, className}) => {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}

export default Button;
