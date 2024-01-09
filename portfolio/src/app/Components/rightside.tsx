import styles from "@/app/styles/right.module.css";
import { Space, Tag, Card } from "antd";
import { ExperienceListProps, ExperienceData } from "../utils/ExperienceTypes";

const ExperienceList: React.FC<ExperienceListProps> = ({ experience }) => {
  const ExperienceListItems = experience.map((item, index) => (
    <Card
      key={index}
      className={`${styles.ExperienceDivItem} ${styles.transparentCard}`}
      hoverable
    >
      <div className={styles.date}>
        <p>
          {item.startYear} <span> - </span> {item.endYear}
        </p>
      </div>
      <div className={styles.summary}>
        <div className={styles.summaryHeader}>
          <h3>
            {item.position} | {item.company}
          </h3>
        </div>
        <p>{item.summary}</p>
      </div>
      <div>
        <Space>
          {item.skills &&
            item.skills.map((skill, index) => (
              <Tag key={index} color="green">
                {skill}
              </Tag>
            ))}
        </Space>
      </div>
    </Card>
  ));

  return <div className={styles.ExperienceDiv}>{ExperienceListItems}</div>;
};

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
      <ExperienceList experience={ExperienceData}/>
    </div>
  );
};

export default Right;
