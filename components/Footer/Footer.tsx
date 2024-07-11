import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.logo__container}>
          <div className={`mb-4 text-center ${styles.logo}`}>
                      {/* <Link href="/">Radiant Chemicals</Link> */}
          </div>
        </div>
      </div>
      <div className={`mb-0 ${styles.footer__bottom}`}>
        <p className="text-center text-white m-0 pb-0">
          Made with <span className="text-danger">❤</span> by Radiant
          Chemicals
        </p>
      </div>
    </footer>
  );
};

export default Footer;
