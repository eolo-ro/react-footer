import styles from "./Footer.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub } from "react-icons/bs";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerPadding}>
        <div className={styles.footerTop}>
          <h2 className={styles.footerLogo}>Site</h2>
          <div className={styles.footerLinks}>
            <div className={styles.footerLinksDiv}>
              <h4>Get in touch</h4>
              <p>contact@site.com</p>
            </div>
            <div className={styles.footerLinksDiv}>
              <h4>Connect</h4>
              <div className={styles.socialmedia}>
                <a href="">
                  <BsLinkedin className={styles.icon} />
                  LinkedIn
                </a>

                <a href="">
                  <BsGithub className={styles.icon} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.footerBelow}>
          <div className={styles.footerCopyright}>
            <p>@{new Date().getFullYear()} Site - All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
