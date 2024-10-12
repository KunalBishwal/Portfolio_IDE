import Link from 'next/link';
// import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';
import styling from '../styles/Home.module.css';
import logo from "../public/logo.png";
import Image from 'next/image';

// FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faPython, faJava } from '@fortawesome/free-brands-svg-icons'; 
import { faC, faCpp, faDatabase } from '@fortawesome/free-solid-svg-icons'; // Use appropriate icons

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>MAGIC!</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>CODExKUN</h1>
            <h6 className={styles.bio}>Btech Student in
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
                <FontAwesomeIcon icon={faJs} size="3x" className={`${styling.icon} ${styling.jsIcon}`} />
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
                <FontAwesomeIcon icon={faC} size="3x" className={`${styling.icon} ${styling.cIcon}`} />
                <div className={styling.skillText}>C</div>
              </div>

              {/* Skill item for C++ */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faCpp} size="3x" className={`${styling.icon} ${styling.cppIcon}`} />
                <div className={styling.skillText}>C++</div>
              </div>

              {/* Skill item for MySQL */}
              <div className={styling.skillItem}>
                <FontAwesomeIcon icon={faDatabase} size="3x" className={`${styling.icon} ${styling.mysqlIcon}`} />
                <div className={styling.skillText}>MySQL</div>
              </div>
            </div>

            <div className={styling.forMobile}>
              <Link href="/projects">
                <button className={`${styles.button} ${styling.workBtn}`}>View Work</button>
              </Link>
              <Link href="/resume">
                <button className={`${styles.outlined} ${styling.contactBtn}`}>My Resume</button>
              </Link>
            </div>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          {/* Logo image */}
          <div className={styling.imageWrapper}>
            <Image src={logo} alt="Logo" className={styling.myImg} />
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
