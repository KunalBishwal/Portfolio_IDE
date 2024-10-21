import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles['education-section']}>
        <h3 className={styles.heading}>Education History</h3>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>BTech Student</h4>
          <div>SRM University</div>
          <p>These is the list of my CGPA I got till now</p>
          <ul type='circle'>
            <li>8.8 in 1st sem</li>
            <li>9.8 in 2nd sem</li>
          </ul>
          <div>2023 - Present</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>WEB DEVELOPMENT, PYTHON, JAVA, C, C++</h4>
          <div>Udemy INC. and Youtube</div>
          <div>2021 - Present</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Python and MySQL</h4>
          <div>In School</div>
          <div>2021</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Schooling from Kendriya Vidhyalaya</h4>
          <div><strong>Year:</strong> 2011 - 2023 </div>
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
