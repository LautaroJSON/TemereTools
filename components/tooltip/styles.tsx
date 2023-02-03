import styled, { keyframes } from "styled-components";

export const TooltipStyled = styled.div`
  position: relative;
  /* padding: 2rem; */
  width: fit-content;

  &:hover {
    cursor: pointer;
    .tooltip-text {
      display: block;
      animation-name: onTooltip;
      animation-duration: 0.8s;
    }
  }
`;

export const TooltipText = styled.div`
  position: absolute;
  left: 120px;
  bottom: 10px;
  padding: 10px;

  background-color: black;
  border-radius: 12px;
  display: none;

  white-space: nowrap;

  /* width: fit-content; */

  ::after {
    content: "";
    position: absolute;
    right: 100%;
    border-right: 20px solid black;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }

  @keyframes onTooltip {
    from {
      filter: blur(10%);
    }
    to {
      filter: none;
    }
  }
`;
