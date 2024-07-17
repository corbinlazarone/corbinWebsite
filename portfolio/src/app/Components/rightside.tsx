import styles from "@/app/styles/right.module.css";
import { Space, Tag, Card } from "antd";
import { ExperienceListProps, ExperienceData } from "../utils/ExperienceTypes";
import { ProjectData, ProjectsListProps } from "../utils/ProjectTypes";
import { LinkOutlined } from "@ant-design/icons";
import Image from "next/image";

const ExperienceList: React.FC<ExperienceListProps> = ({ experience }) => {
  const ExperienceListItems = experience.map((item, index) => (
    <a href={item.link} key={index} target="_blank">
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
              <LinkOutlined
                style={{ marginLeft: 10 }}
                className={styles.linkOutlined}
              />
            </h3>
          </div>
          <p>{item.summary}</p>
        </div>
        <div>
          <Space size={[0, 4]} wrap className={styles.tagSpace}>
            {item.skills &&
              item.skills.map((skill, index) => (
                <Tag key={index} color="green">
                  {skill}
                </Tag>
              ))}
          </Space>
        </div>
      </Card>
    </a>
  ));

  return (
    <div id="Experience" className={styles.ExperienceDiv}>
      {ExperienceListItems}
    </div>
  );
};

const ProjectsList: React.FC<ProjectsListProps> = ({ project }) => {
  const ProjectListItems = project.map((item, index) => (
    <a href={item.link} key={index} target="_blank">
      <Card
        className={`${styles.ExperienceDivItem} ${styles.transparentCard}`}
        hoverable
      >
        <div className={styles.summary}>
          <div className={styles.summaryHeader}>
            <h3>
              {item.title} <LinkOutlined className={styles.linkOutlined} />
            </h3>
          </div>
          <p>{item.summary}</p>
          <div className={styles.ProjectDiv}>
            <Image
              className={styles.ProjectImage}
              src={item.image}
              alt={item.alt}
            />
          </div>
          <Space size={[0, 4]} wrap className={styles.tagSpace}>
            {item.skills &&
              item.skills.map((skill, index) => (
                <Tag key={index} color="green">
                  {skill}
                </Tag>
              ))}
          </Space>
        </div>
      </Card>
    </a>
  ));

  return (
    <div id="Projects" className={styles.ExperienceDiv}>
      {ProjectListItems}
    </div>
  );
};

const Right: React.FC = () => {
  return (
    <div id="About" className={styles.rightMainDiv}>
      <div className={styles.aboutDiv}>
        <p>
          In high school, I started working on small Python projects inspired by
          a book my dad bought me. Since then, my passion for technology has
          driven me to build bigger and better things. This enthusiasm has led
          to opportunities to work with amazing companies and people, far beyond
          what I could have ever imagined.
        </p>
        <p>
          I am currently studying computer science at Louisiana State
          University. Through coursework, projects, hackathons, internships, and
          extensive LeetCode practice, I have gained valuable experience. I
          particularly enjoy building full-stack applications, working on both
          the frontend and backend, and design. I love creating clean,
          attractive UIs while ensuring efficient and robust backend services.
        </p>
        <p>
          When I'm not at a screen, I like to get outside in my free time for
          runs, climbs, and hikes. But sometimes, I just go back to the screen
          to play video games.
        </p>
      </div>
      <ExperienceList experience={ExperienceData} />
      <ProjectsList project={ProjectData} />
    </div>
  );
};

export default Right;
