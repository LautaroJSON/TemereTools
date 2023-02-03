import React, { useState } from "react";
import Image from "next/image";
import { IconContainer, NavbarContainer, NavItem } from "./styles";
import { Tooltip } from "../tooltip";

interface ISectionNavbar {
  tooltip: string;
  url: string;
  alt: string;
}
const SECTIONS_NAVBAR: Array<ISectionNavbar> = [
  {
    tooltip: "Sorteo",
    url: "/icons/sorteo.png",
    alt: "img-sorteo",
  },
  {
    tooltip: "Porcentaje",
    url: "/icons/percentage.png",
    alt: "img-sorteo",
  },
  {
    tooltip: "Todo-list",
    url: "/icons/todolist.png",
    alt: "img-sorteo",
  },
  {
    tooltip: "Compertir la cuenta",
    url: "/icons/compartir.png",
    alt: "img-sorteo",
  },
  {
    tooltip: "Temporizador",
    url: "/icons/tiempo.png",
    alt: "img-sorteo",
  },
];

const Navbar = () => {
  const [itemSelected, setItemSelected] = useState<string>();

  return (
    <NavbarContainer>
      {SECTIONS_NAVBAR.map((sec) => {
        return (
          <Tooltip text={sec.tooltip} key={sec.tooltip}>
            <NavItem
              onClick={() => {
                setItemSelected(sec.tooltip);
              }}
              selected={sec.tooltip === itemSelected}
            >
              <IconContainer>
                <Image src={sec.url} alt={sec.alt} fill />
              </IconContainer>
            </NavItem>
          </Tooltip>
        );
      })}
    </NavbarContainer>
  );
};

export default Navbar;
