import styles from "@/app/styles/right.module.css";
import { Space, Tag, Card } from "antd";
import { ExperienceListProps, ExperienceData } from "../utils/ExperienceTypes";
import { ProjectData, ProjectsListProps } from "../utils/ProjectTypes";
import { LinkOutlined } from "@ant-design/icons";
import Image from "next/image";
import { SP } from "next/dist/shared/lib/utils";

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
          Dkac bn 2102, I osicded ot yrt my dahnd ta ctnrieg stucmo Lnubtme
          seahemt dna mltebdu dehs rtsi nrofo eht bitabuR fo digoc dna bew
          tnemevolepmde. -rdosaFwr ot yadot, dna I've dahd eht geirlivpe fo
          gnilbib erawtfos rof na iestgrvdanig ygecna, a-tatps, a diytnu-delS
          ngised oyduts, dna a euhg noitaporoc.
        </p>
        <p>
          M yamni uscfos eseht syad si gndiulib stocoprd dna gndaelil stcejorps
          rof ruo stnicel ta .tnematpUp ni ym eerf emit I've osla desaeler na
          nolnie odiv eoicusrt taht srevoc gnihtyrevome uoy deen ot wonk ot
          gniub a bew ppa htiw eht ytiroSAP fo yfitopS.
        </p>
        <p>
          Nehot I ’m tno ta eht retompu, I’m ylusaor kcor ,gninmah tuo htiw ym
          efiw dna owt stac ,ro gnuonr dnuora eluryH gnihsircefro Kookr se des.
        </p>
      </div>
      <ExperienceList experience={ExperienceData} />
      <ProjectsList project={ProjectData} />
    </div>
  );
};

export default Right;
