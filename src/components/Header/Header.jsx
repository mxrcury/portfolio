import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={`Typist ${styles.title} ${styles.Typist}`}>
        Hello{" "}
        <span className="typing-text" style={{ display: "none" }}>
          {" "}
          World
        </span>
        <span className={styles.typingText}>
          I'm <span className={styles.name}>mercury</span>
        </span>
      </div>
      <div className={styles.description}>
        I’m web dev beginner from Ukraine that is interested in making web apps
      </div>
      <div className={styles.emailBtnWrapper}>
        <a
          href="mailto:demetrgonchar@gmail.com"
          className={`email ${styles.emailBtn}`}
        >
          {/* <img src="" alt="" /> */}
          Say “<span style={{ color: "rgb(25, 25, 243" }}>Slava</span>{" "}
          <span style={{ color: "yellow" }}>Ukraini</span>”
        </a>
      </div>
    </div>
  );
};

export default Header;
