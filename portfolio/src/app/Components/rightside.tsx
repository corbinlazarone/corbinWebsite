import styles from "@/app/styles/right.module.css";
import { Divider, Space, Tag } from "antd";

const Right: React.FC = () => {
  return (
    <div className={styles.rightMainDiv}>
      <div className={styles.aboutDiv}>
        <p>
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I’ve had the privilege of
          building software for an advertising agency, a start-up, a student-led
          design studio, and a huge corporation.
        </p>
        <p>
          My main focus these days is building products and leading projects for
          our clients at Upstatement. In my free time I've also released an
          online video course that covers everything you need to know to build a
          web app with the Spotify API.
        </p>
        <p>
          When I’m not at the computer, I’m usually rock climbing, hanging out
          with my wife and two cats, or running around Hyrule searching for
          Korok seeds K o r o k s e e d s .
        </p>
      </div>
      <div className={styles.ExperienceDiv}>
        <div className={styles.ExperienceDivItem}>
          <div className={styles.date}>
            <p>
              2018<span> — </span>PRESENT
            </p>
          </div>
          <div className={styles.summary}>
            <div className={styles.summaryHeader}>
                <h3>Lead Engineer | UpStatement</h3>
                <p>Senior Engineer</p>
            </div>
            <p>
              Deliver high-quality, robust production code for a diverse array
              of projects for clients including Harvard Business School,
              Everytown for Gun Safety, Pratt Institute, Koala Health,
              Vanderbilt University, The 19th News, and more. Provide leadership
              within engineering department through close collaboration,
              knowledge shares, and mentorship.
            </p>
            <div>
                <Space >
                    <Tag color="green">PHP</Tag>
                    <Tag color="green">PHP</Tag>
                    <Tag color="green">PHP</Tag>
                    <Tag color="green">PHP</Tag>
                    <Tag color="green">PHP</Tag>
                </Space>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
