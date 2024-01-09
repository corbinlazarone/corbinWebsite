import styles from "@/app/styles/left.module.css";
import { Avatar, Anchor } from "antd";
import {
  InstagramFilled,
  LinkedinFilled,
  GithubFilled,
} from "@ant-design/icons";
import corbinImage from "@/app/images/corbinImage.jpg";
import Image from "next/image";

const Left: React.FC = () => {
  return (
    <div className={styles.leftMainDiv}>
      <h1>Corbin Lazarone</h1>
      <h2>Software Engineer | CS Student</h2>
      <Image
        style={{ height: 300, width: 250 }}
        src={corbinImage}
        alt="corbin-image"
      />
      <p>
        I build software with a creative touch, solving problems one line of
        code at a time.
      </p>
      <div className={styles.navBarItems}>
        <p>
          <a href="#">About</a>
        </p>
        <p>
          <a href="#">Experience</a>
        </p>
        <p>
          <a href="#">Projects</a>
        </p>
      </div>
      <div className={styles.footer}>
        <ul className={styles.socialMedia}>
          <li>
            <a href="https://www.instagram.com/dsc_lsu/">
              <GithubFilled className={styles.socialMediaItem} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/dsc_lsu/">
              <InstagramFilled className={styles.socialMediaItem} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/dsc-lsu/">
              <LinkedinFilled className={styles.socialMediaItem} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Left;
