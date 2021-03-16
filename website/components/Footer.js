import { Component } from "react";
import styles from "./Footer.module.css";

class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <p className={styles.credits}>
          <span>Made with </span>
          <span className={styles.love}>♥</span>
          <span> by </span>
          <a
            className={styles.link}
            href="https://zenorocha.com"
            target="blank"
          >
            Zeno Rocha
          </a>
          <span> &amp; </span>
          <a
            className={styles.link}
            href="https://twitter.com/nettofarah"
            target="blank"
          >
            Netto Farah
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
