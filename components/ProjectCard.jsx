import Image from 'next/image';
import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.card}>
      {/* <Image src={project.image} height={300} width={600} alt={project.name} /> */}
      <div className={styles.content}>
        <h3>
          <a
            href={project.demo} 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.underline}
          >
            {project.name}
          </a>
        </h3>
        <p>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;