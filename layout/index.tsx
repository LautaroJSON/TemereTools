import React from "react";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import { ChildrenContainer } from "./styles";

interface ILayout {
  children: JSX.Element;
}

const Layout = ({ children }: ILayout) => {
  return (
    <main className={styles.main}>
      <div style={{ display: "flex" }}>
        <Navbar />
        <ChildrenContainer>{children}</ChildrenContainer>
      </div>
    </main>
  );
};

export default Layout;
