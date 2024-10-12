import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles['education-section']}>
        <h3 className={styles.heading}>Education History</h3>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>BTech Student</h4>
          <div>SRM UNIVERSITY</div>
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

        {/* Uncomment this block to display work experience */}
        {/*
        <div className={styles.item}>
          <h4 className={styles.resumeHead}>Virtuous Tech Enterprise</h4>
          <div>Remote: Edo State, Nigeria</div>
          <div>Frontend Developer with React</div>
          <div>2024 - Present</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>SKI MUSIC</h4>
          <div>Remote: Lagos State, Nigeria</div>
          <div>Lead Mobile App Developer</div>
          <div>2024 - Present</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>BIG Foundation (MY GRIND APP)</h4>
          <div>Remote: Lagos State, Nigeria</div>
          <div>Lead Developer</div>
          <div>2023</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>SOUTECH VENTURES</h4>
          <div>Physical: Imo State, Nigeria</div>
          <div>Web Developer & Instructor</div>
          <div>2023</div>
        </div>

        <div className={styles.item}>
          <h4 className={styles.resumeHead}>KRIS MEDICAL LABORATORY</h4>
          <div>Physical: Imo State, Nigeria</div>
          <div>Laboratory Scientist Intern</div>
          <div>2019</div>
        </div>
        */}
      </div>
    </div>
  );
};

export default ContactPage;
