import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./Navigation.module.css";
import 'boxicons'

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
        className={styles.link}
      >
        {" "}
        {`<home/>`}{" "}
      </Link>
      <Link
        onClick={scrollToAbout}
        activeClass={styles.active}
        smooth={true}
        duration={10}
        className={styles.link}
      >
        {" "}
        {`<about/>`}{" "}
      </Link>
      <Link onClick={scrollToCreations} className={styles.link}>
        {" "}
        {`<creations/>`}{" "}
      </Link>

      <div className={styles.socialMedias}>
        <a href="https://github.com/mxrcury" style={{marginRight:'5px'}}>
          <box-icon className={styles.icon} type="logo" name="github" color='#E3CAA5'></box-icon>
        </a>
        <a href="https://www.instagram.com/mercurynotdead/">
          <box-icon type='logo' name='instagram' color='#E3CAA5'></box-icon>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
