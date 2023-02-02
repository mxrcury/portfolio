import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const scrollTop = ()=>{
    scroll.scrollToTop();
  }
  const scrollToAbout = ()=>{
    scroll.scrollTo(500);
  }
  const scrollToCreations = ()=>{
    scroll.scrollTo(1000);
  }
  return (
    <div className={styles.wrapper}>
      <Link 
      onClick={scrollTop}
      activeClass={styles.active}
      smooth={true} 
      duration={10}
      className={styles.link}>
        {" "}
        {`<home/>`}{" "}
      </Link>
      <Link 
      onClick={scrollToAbout}
      activeClass={styles.active}
      smooth={true} 
      duration={10} 
      className={styles.link}>
        {" "}
        {`<about/>`}{" "}
      </Link>
      <Link onClick={scrollToCreations} className={styles.link}>
        {" "}
        {`<creations/>`}{" "}
      </Link>
      
      <div className={styles.socialMedias}>
        <a href="https://github.com/mxrcury">
          <img src="C:\Users\VivoBook\Desktop\react-apps\PNG" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Navigation;
