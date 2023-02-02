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
        I’m Software Developer from Ukraine that is interested in web
        development
      </div>
      <div className={styles.emailBtnWrapper}>
        <a
          href="mailto:demetrgonchar@gmail.com"
          className={`email ${styles.emailBtn}`}
        >
          {/* <img src="" alt="" /> */}
          Say “<span style={{ color: "white" }}>Hi</span>"
        </a>
      </div>
    </div>
  );
};

export default Header;
