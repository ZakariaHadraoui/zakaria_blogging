import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, The Full Stacker here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Welcome to my official blog website .</h1>
          <p className={styles.postDesc}>
            write posts here and discover topics .
          </p>
          <Link href='/' className={styles.button}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;