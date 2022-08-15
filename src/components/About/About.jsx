import React from "react";
import styles from "./About.module.css";

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
            Currently I’m 17 y.o Front End beginner with no working experience
            in company and in the same time i’m just a student
          </div>
          <div className={`${styles.description} ${styles.titleItems}`}>
            Technologies I have been learning and working with:
          </div>
          <div className={styles.items}>
            <div className={styles.item}>
              <div className={styles.icon}></div>
              <div className={styles.titleItem}>HTML, CSS</div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}></div>
              <div className={styles.titleItem}>React.js+ReduxTk</div>
            </div>
            <div className={styles.item}>
              <div className={styles.icon}></div>
              <div className={styles.titleItem}>JavaScript ES6+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
