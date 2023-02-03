import React from "react";
import { TooltipStyled, TooltipText } from "./styles";

interface ITooltip {
  children: JSX.Element;
  text?: string;
}

export const Tooltip = ({ children, text }: ITooltip) => {
  return (
    <TooltipStyled>
      <TooltipText className="tooltip-text">{text}</TooltipText>
      <div>{children}</div>
    </TooltipStyled>
  );
};
