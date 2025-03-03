import { useState } from 'react';
import styles from '../styles/ContactPage.module.css';

const ContactPage = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => {
    setIsResumeOpen(true);
  };

  const closeResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles['education-section']}>
        <h3 className={styles.heading}>Education History</h3>
        {/* ... your existing education items ... */}
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

      {/* New Resume Button */}
      <button className={styles.resumeButton} onClick={openResume}>
        View Resume
      </button>

      {/* Modal for Resume */}
      {isResumeOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={closeResume}>
              Close
            </button>
            {/* Embed your resume here using an iframe */}
            <iframe
              src="/path/to/your/resume.pdf"  // Replace with the actual path or URL to your resume PDF
              title="Resume"
              width="100%"
              height="500px"
              style={{ border: 'none' }}
            ></iframe>
            <a href="/path/to/your/resume.pdf" download>
              <button className={styles.downloadButton}>Download Resume</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
