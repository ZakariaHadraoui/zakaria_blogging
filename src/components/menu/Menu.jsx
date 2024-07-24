import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";


const Menu = () => {
  return (
    <div className={styles.container}>
      {/* <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1> */}
      {/* <MenuPosts  withImage={ false}/> */}


	  <h3 className={styles.subtitle}>Discover by topics</h3>
	  <h1 className={styles.title}>Categories</h1>
	    <MenuCategories/>
    </div>
  );
};

export default Menu;