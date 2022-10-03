import { Box, Grid } from '@mui/material';
import './style.scss';
// import picture from '../../assets/avatarAlex.jpg';
import picture from '../../assets/avatarCircle.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Footer from '../Footer/Footer';

const info = {
  desc: [
    {
      icon: '⚛️',
      text: 'Spécialisé Front - React & Redux',
    },
    {
      icon: '🏠',
      text: "Habitant de Seine & Marne, dispo pour toute l'IDF",
    },
    {
      icon: '📝',
      text: 'Disponible des maintenant (CDI/CDD)',
    },
    {
      icon: '📧',
      text: 'alexandre.monney@laposte.net',
    },
  ],
  socials: [
    {
      label: 'linkedin',
      icon: <LinkedInIcon sx={{ fontSize: 50 }} />,
      link: 'https://www.linkedin.com/in/alexandre-monney/',
    },
    {
      label: 'github',
      icon: <GitHubIcon sx={{ fontSize: 45 }} />,
      link: 'https://github.com/Alexandre-Monney',
    },
  ],
};

const Home = () => {
  return (
    <>
      <Box
        flexDirection={{ xs: 'column', md: 'row' }}
        component={'main'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        minHeight={'85vh'}
      >
        <Box
          alt={'picture'}
          component={'img'}
          className={'shadow'}
          src={picture}
          width={{ xs: '35vh', md: '40vh' }}
          height={{ xs: '35vh', md: '40vh' }}
          borderRadius={'50%'}
          p={'0.75rem'}
          mb={{ xs: '1rem', sm: '1rem' }}
          mr={{ xs: 0, md: '2rem' }}
        />
        <Box>
          <h1 className='home-h1'>
            {/* <p>Salut, je suis </p> */}
            <p>Alexandre Monney 👋🏼</p>
          </h1>
          <h2 className='home-h2'>Je suis un développeur Fullstack JavaScript</h2>
          <Box component={'ul'} p={'0.8rem'}>
            {info.desc.map((item, index) => (
              <li className='home-desc' key={index}>
                {item.icon} {item.text}
              </li>
            ))}
          </Box>
          <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
            {info.socials.map((social, index) => (
              <a key={index} aria-label={social.label} href={social.link}>
                {social.icon}
              </a>
            ))}
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};
export default Home;
