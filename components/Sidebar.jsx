import Link from 'next/link';
import { useRouter } from 'next/router';
import FilesIcon from './icons/FilesIcon';
import GithubIcon from './icons/GithubIcon';
import TwitterIcon from './icons/TwitterIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import WhatsAppIcon from './icons/WhatsappIcon';
// import FacebookIcon from './icons/FacebookIcon';
// import TikTokIcon from './icons/TiktokIcon';
import styles from '../styles/Sidebar.module.css';
import LinkedInIcon from './icons/LinkedInIcon';

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
  },
  {
    Icon: WhatsAppIcon,
    path: 'https://wa.me/917340886912',
  },
  {
    Icon: TwitterIcon,
    path: 'https://x.com/KunalBishwal18',
  },
  {
    Icon: GithubIcon,
    path: 'https://github.com/KunalBishwal',
  },
  {
    Icon: LinkedInIcon,
    path: 'https://www.linkedin.com/in/kunalbishwal/',
  },
  {
    Icon: MailIcon,
    path: 'mailto:kunalbishwal2004@gmail.com',
  },
   // {
  //   Icon: FacebookIcon,
  //   path: '',
  // },
  // {
  //   Icon: TikTokIcon,
  //   path: '',
  // },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: '/about',
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
  },
];

const Sidebar = () => {
  const router = useRouter();

  const isExternal = (path) => path.startsWith('http') || path.startsWith('mailto');

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }, index) => (
          <div key={index} className={styles.iconContainer}>
            {isExternal(path) ? (
              <a href={path} target="_blank" rel="noopener noreferrer">
                <div>
                  <Icon fill={'rgb(106, 115, 125)'} className={styles.icon} />
                </div>
              </a>
            ) : (
              <Link href={path} passHref>
                <div className={router.pathname === path ? styles.active : undefined}>
                  <Icon
                    fill={
                      router.pathname === path
                        ? 'rgb(225, 228, 232)'
                        : 'rgb(106, 115, 125)'
                    }
                    className={styles.icon}
                  />
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }, index) => (
          <div key={index} className={styles.iconContainer}>
            <Link href={path} passHref>
              <div className={router.pathname === path ? styles.active : undefined}>
                <Icon
                  fill={
                    router.pathname === path
                      ? 'rgb(225, 228, 232)'
                      : 'rgb(106, 115, 125)'
                  }
                  className={styles.icon}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
