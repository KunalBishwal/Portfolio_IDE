import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      {/* Resume Buttons Positioned in the Top Right Corner */}
      <div className={styles.resumeButtons}>
  <a
    href="https://drive.google.com/file/d/1sj8xptBN9mwNbHcF1G7ghLvTEQ6PdeaR/view"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.certificateLink}
  >
    View Resume
  </a>
  <a
    href="https://drive.google.com/uc?export=download&id=1sj8xptBN9mwNbHcF1G7ghLvTEQ6PdeaR"
    download
    className={styles.certificateLink}
  >
    Download Resume
  </a>
</div>

      <div className={styles['education-section']}>
        <h3 className={styles.heading}>Education History</h3>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>BTech Student</h4>
          <div>SRM University</div>
          <p>This is the list of my CGPA I got till now (In every semester)</p>
          <ul type='circle'>
            <li>8.8 cgpa in 1st sem</li>
            <li>9.8 cgpa in 2nd sem</li>
            <li>10.0 cgpa in 3rd sem</li>
          </ul>
          <div>2023 - Present</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>WEB DEVELOPMENT(MERN Stack)</h4>
          <div>Learning from Youtube</div>
          <div>2024 - Present</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>NPTEL CERTIFICATION</h4>
          <div>Java Course</div>
          <div>2024</div>
          <a
            href="https://www.dropbox.com/scl/fi/ef6ysvxr586d4povmls6i/certificate.pdf?rlkey=mjhbvo78s087etzo5cffhp613&st=1cxt0c01&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certificateLink}
          >
            View Certificate PDF
          </a>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>PYTHON, JAVA, C, C++</h4>
          <div>Udemy INC. and Youtube</div>
          <div>2021 - 2023</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Python and MySQL</h4>
          <div>In School</div>
          <div>2021</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Schooling from Kendriya Vidhyalaya</h4>
          <div>
            <strong>Year:</strong> 2011 - 2023
          </div>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className={styles['work-section']}>
        <h3 className={styles.heading}>Professional Experience</h3>
      </div>
    </div>
  );
};

export default ContactPage;
