import { Box } from '@mui/material';
import './style.scss';
import picture from '../../assets/avatar.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const info = {
  desc: [
    {
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      text: 'Lorem ipsum dolor sit amet.',
    },
    {
      text: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    },
    {
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ],
  socials: [
    {
      label: 'linkedin',
      icon: <LinkedInIcon sx={{ fontSize: 50 }} />,
      link: '',
    },
    {
      label: 'github',
      icon: <GitHubIcon sx={{ fontSize: 45 }} />,
      link: '',
    },
  ],
};

const Home = () => {
  return (
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
        mb={{ xs: '1rem', sm: 0 }}
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
              {item.text}
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
  );
};
export default Home;

// flexDirection={{xs: 'column', md: 'row'}}
// minHeight={'calc(100vh - 175px)'}
