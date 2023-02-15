import styled, { css } from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  height: 370px;

  gap: 12px;
  background-color: var(--bg-grey-color);
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 26px;
`;

export const NavItem = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  background-color: #b3b3b3;
  border-radius: 50%;
  padding: 0.8rem;
  transition: background-color 0.3s ease-in-out;
  transition: border-radius 0.3s ease-in-out;
  transition: all 0.3s;

  cursor: pointer;

  ${(props) =>
    props.selected
      ? css`
          background-color: white;
          border-radius: 20%;
          box-sizing: border-box;

          :hover {
            border-radius: 20%;
          }
        `
      : css`
          :hover {
            // padding: 1rem;
            border-radius: 35%;
            background-color: white;
            /* padding: 1.2rem; */
          }
        `}
`;

export const IconContainer = styled.div`
  padding: 1rem;
  aspect-ratio: 1;
  position: relative;
`;
