import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faPython, faJava } from '@fortawesome/free-brands-svg-icons'; 
import { faC, faCode, faDatabase } from '@fortawesome/free-solid-svg-icons'; 
import styles from '../styles/HomePage.module.css';
import styling from '../styles/Home.module.css';
import logo from "../public/logo.png"; 

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I AM</h1>
          <h1>KUNAL!</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>CODExKUN</h1>
            <h6 className={styles.bio}>
              Btech Student in
              <span className={styles.react}> Data Science.</span>
            </h6>

            {/* Skill Icons Section */}
            <div className={styling.skillsContainer}>
              {/* Skill item for React */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faReact} size="3x" className={`${styling.icon} ${styling.reactIcon}`} />
                <div className={styling.skillText}>React</div>
              </div>

              {/* Skill item for JavaScript */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faJs} size="2x" className={`${styling.icon} ${styling.jsIcon}`} />
                <div className={styling.skillText}>JavaScript</div>
              </div>

              {/* Skill item for Python */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faPython} size="3x" className={`${styling.icon} ${styling.pythonIcon}`} />
                <div className={styling.skillText}>Python</div>
              </div>

              {/* Skill item for Java */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faJava} size="3x" className={`${styling.icon} ${styling.javaIcon}`} />
                <div className={styling.skillText}>Java</div>
              </div>

              {/* Skill item for C */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faC} size="4x" className={`${styling.icon} ${styling.cIcon}`} />
                <div className={styling.skillText}>C</div>
              </div>

              {/* Skill item for C++ (Using faCode as a substitute) */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faCode} size="4x" className={`${styling.icon} ${styling.cppIcon}`} />
                <div className={styling.skillText}>C++</div>
              </div>

              {/* Skill item for MySQL */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faDatabase} size="3x" className={`${styling.icon} ${styling.mysqlIcon}`} />
                <div className={styling.skillText}>MySQL</div>
              </div>
            </div>

            {/* Buttons for Work and Resume */}
            <div className={styling.forMobile}>
              <Link href="/projects">
                <button className={`${styles.button} ${styling.workBtn}`}>View Work</button>
              </Link>
              <Link href="/resume">
                <button className={`${styles.outlined} ${styling.contactBtn}`}>My Resume</button>
              </Link>
            </div>
          </div>

          <div className={styling.imageWrapper}>
            <Image src={logo} alt="CODExKUN Logo" className={styling.myImg} priority />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
