"use client"
import styles from "@/app/styles/left.module.css";
import { useEffect } from "react";
import {
  InstagramFilled,
  LinkedinFilled,
  GithubFilled,
} from "@ant-design/icons";
import corbinImage from "@/app/images/corbinImage.jpg";
import Image from "next/image";

const Left: React.FC = () => {
  
  useEffect(() => {
    // Smooth scrolling behavior
    const smoothScroll = (target: string) => {
      const element = document.querySelector(target) as HTMLElement;
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
      }
    };

    // Attach smooth scrolling to each link
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = link.getAttribute("href");
        if (target) {
          smoothScroll(target);
        }
      });
    });
  });

  return (
    <div className={styles.leftMainDiv}>
      <h1>Corbin Lazarone</h1>
      <h2>Software Engineer | CS Student</h2>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={corbinImage}
          alt="corbin-image"
          width={250}
          height={300}
        />
        <div className={styles.border}></div>
      </div>
      <p>
        I build software with a creative touch, solving problems one line of
        code at a time.
      </p>
      <div className={styles.navBarItems}>
        <p>
          <a href="#About">About</a>
        </p>
        <p>
          <a href="#Experience">Experience</a>
        </p>
        <p>
          <a href="#Projects">Projects</a>
        </p>
      </div>
      <div className={styles.footer}>
        <ul className={styles.socialMedia}>
          <li>
            <a href="https://github.com/corbinlazarone" target="_blank">
              <GithubFilled className={styles.socialMediaItem} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/corbinlazarone/" target="_blank">
              <InstagramFilled className={styles.socialMediaItem} />
            </a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/corbin-lazarone-58647923b/" target="_blank">
              <LinkedinFilled className={styles.socialMediaItem} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Left;
