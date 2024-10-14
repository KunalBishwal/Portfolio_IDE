import Image from 'next/image';
import styles from '../styles/About.module.css';
import brain from '../public/brain.jpg';

export default function AboutMe() {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageContainer} data-aos="fade-right">
            <Image
              src={brain}
              alt="About Me - Kunal Bishwal"
              width={150}
              height={150}
              priority
              className={styles.myImage}
            />
          </div>
          <div className={styles.textContainer} data-aos="fade-left">
            <h3 className={styles.textHead}>Btech Student</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span><strong className={styles.strong}>Name: </strong>
                  Kunal Bishwal</span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span><strong className={styles.strong}>Nationality: </strong>
                  Indian IND</span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span><strong className={styles.strong}>College Degree: </strong>
                  Pursuing Btech in CSE Data Science</span>
              </li>
            </ul>
          </div>

          <div className={styles.textContainer} data-aos="fade-left">
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span><strong className={styles.strong}>Aliases: </strong>
                  CODExKUN</span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span><strong className={styles.strong}>Zodiac: </strong>
                  Gemini</span>
              </li>
              <li className={styles.listItem}>
                <i className={`${styles.icon} bi bi-chevron-right`}></i>
                <span><strong className={styles.strong}>Availability: </strong>
                  Learning Stage</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.paragraph}>
          I am a student at SRM University, pursuing a Btech degree in CSE Data Science (2nd Year) and also learning DSA and Web Dev as personal skills.
        </div>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <h3 className={styles.textHead}>Skills</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skill}>
              <span className={styles.skillName}>JavaScript</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>React</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '25%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>CSS & Bootstrap</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>HTML</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Java</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>C & C++</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Python</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>MongoDB, ExpressJS & NodeJS</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '15%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Firebase, EmailJS </span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '15%' }}></div>
              </div>
            </div>
            <div className={styles.skill}>
              <span className={styles.skillName}>Git & GitHub</span>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch static props if needed for SSR or static generation
export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}
