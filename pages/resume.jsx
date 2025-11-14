import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      {/* Resume Buttons Positioned in the Top Right Corner */}
      <div className={styles.resumeButtons}>
  <a
    href="https://www.dropbox.com/scl/fi/t091klom8frubqdtqih26/Kunal-Bishwal-Resume.pdf?rlkey=b9bc4kd0zaa0fl4s1otox9kzw&st=1dfs4cfd&dl=0"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.certificateLink}
  >
    View Resume
  </a>
  <a
    href="https://www.dropbox.com/scl/fi/t091klom8frubqdtqih26/Kunal-Bishwal-Resume.pdf?rlkey=b9bc4kd0zaa0fl4s1otox9kzw&st=1dfs4cfd&dl=0"
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
          <p>My current cgpa is <b>9.6</b></p>
          <p>This is the list of my SGPA I got till now (In every semester)</p>
          <ul type='circle'>
            <li>8.8 sgpa in 1st sem</li>
            <li>9.8 sgpa in 2nd sem</li>
            <li>10.0 sgpa in 3rd sem</li>
            <li>9.85 sgpa in 4th sem</li>
          </ul>
        {/* --- Achievement Section Added --- */}
        <div className={styles.achievementSection}>
          <p>
            <b>Achievements:</b>
             <ul type='circle'>
               First Prize in Physics project workshop
               Received Performance-based scholarship for excellence in college studies in 2nd year.
              </ul>
          </p>
        </div>
        {/* --------------------------------- */}
          <div>2023 - Present</div>
        </div>
        
  <div className={styles.item}>
          <h4 className={styles.resumeHead}>NPTEL CERTIFICATION</h4>
          <div>Machine Learning Course</div>
          <div>2025</div>
          <a
            href="https://www.dropbox.com/scl/fi/nms6ogfvjxwpxd7bl0xib/NPTEL_ML_CERTIFICATE.pdf?rlkey=2o7kvhehankgeax48vrkbtqhk&st=j9778ppu&dl=0"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.certificateLink}
          >
            View Certificate PDF
          </a>
        </div>
        
  <div className={styles.item}>
  <h4 className={styles.resumeHead}>ORACLE NETWORKING CERTIFICATION</h4>
  <div>Networking Course</div>
  <div>2025</div>
  <a
    href="https://www.dropbox.com/scl/fi/88qz3utfm7oxdxnow93lw/Orcale_Networking_eCertificate.pdf?rlkey=l65tsc2db3su41h4mjexsk5wz&st=438wqq36&dl=0"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.certificateLink}
  >
    View Certificate PDF
  </a>
  <br />
  <a
    href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=090F35AC1F92CBC709064014478E2BA468DE6B1CF2D97104DA6EB1C43FB9696D"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.certificateLink}
  >
    View Certification Badge
  </a>
</div>

<div className={styles.item}>
  <h4 className={styles.resumeHead}>ORACLE AI CERTIFICATION</h4>
  <div>AI Course</div>
  <div>2025</div>
  <a
    href="https://www.dropbox.com/scl/fi/ylskq9yid800e4ruprm8k/Oracle-eCertificate.pdf?rlkey=o1jjcjo2wi1bbgeihucymaxzs&e=1&st=8ccqk4yi&dl=0"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.certificateLink}
  >
    View Certificate PDF
  </a>
  <br />
  <a
    href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=E9E8605BD8EA48311F33A19D74477589A6DA44E2B3DB9E7D5B740C07FF6ADE13"
    target="_blank"
    rel="noopener noreferrer"
    className={styles.certificateLink}
  >
    View Certification Badge
  </a>
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







