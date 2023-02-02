import React from "react";
import styles from "./About.module.css";
import { technologies } from "./ui-data";

function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleWrapper}>
        <div className={styles.line}></div>
        {`<about/>`}
      </div>
      <div className={styles.content}>
        <div className={styles.pic}></div>
        <div className={styles.info}>
          <div className={styles.description}>
            My name is Dmytro and I’m 18 y.o student that is interested in Computer Science, likes
            writing complex logic and solving bugs.
          </div>
          <div className={`${styles.description} ${styles.titleItems}`}>
            Technologies I have been learning and working with:
          </div>
          <div className={styles.items}>
            {technologies.map((tech) => (
              <div className={styles.item}>
                <div className={styles.icon}></div>
                <div className={styles.titleItem}>{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
