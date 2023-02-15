import React, { useState } from "react";
import Image from "next/image";
import { IconContainer, NavbarContainer, NavItem } from "./styles";
import { Tooltip } from "../tooltip";
import { useRouter } from "next/router";

interface ISectionNavbar {
  tooltip: string;
  urlImg: string;

  alt: string;
}
const SECTIONS_NAVBAR: Array<ISectionNavbar> = [
  {
    tooltip: "Sorteo",
    urlImg: "/icons/sorteo.png",
    alt: "img-sorteo",
  },
  {
    tooltip: "Porcentaje",
    urlImg: "/icons/percentage.png",
    alt: "img-sorteo",
  },
  {
    tooltip: "Todo-list",
    urlImg: "/icons/todolist.png",
    alt: "img-sorteo",
  },
  {
    tooltip: "Compertir la cuenta",
    urlImg: "/icons/compartir.png",
    alt: "img-sorteo",
  },
  {
    tooltip: "Temporizador",
    urlImg: "/icons/tiempo.png",
    alt: "img-sorteo",
  },
];

const Navbar = () => {
  const [itemSelected, setItemSelected] = useState<string>();
  const router = useRouter();

  const handleOnClickNav = (section: string) => {
    setItemSelected(section);
    router.push(`/${section.toLowerCase()}`);
  };

  return (
    <NavbarContainer>
      {SECTIONS_NAVBAR.map((sec) => {
        return (
          <Tooltip text={sec.tooltip} key={sec.tooltip}>
            <NavItem
              onClick={() => {
                handleOnClickNav(sec.tooltip);
              }}
              selected={sec.tooltip === itemSelected}
            >
              <IconContainer>
                <Image src={sec.urlImg} alt={sec.alt} fill />
              </IconContainer>
            </NavItem>
          </Tooltip>
        );
      })}
    </NavbarContainer>
  );
};

export default Navbar;
