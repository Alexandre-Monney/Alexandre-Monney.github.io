import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Style from './style.scss';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const links = [
  {
    name: 'Accueil',
    to: '/',
    // active: 'home'
  },
  {
    name: 'A propos',
    to: '/about',
    // active: 'about'
  },
  {
    name: 'AM',
    type: true,
    to: '/',
    // active: 'home'
  },
  {
    name: 'Portefolio',
    to: '/portfolio',
    // active: 'portfolio',
  },
];

const Navbar = () => {
  return (
    <Box component={'nav'} width={'100%'}>
      <Box
        component={'ul'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={{ xs: '2rem', md: '8rem' }}
        fontSize={'1rem'}
      >
        {links.map((link, index) => (
          <Box key={index} component={'li'} className={''}>
            <Link to={link.to}>
              {/* {link.name} */}
              {!link.type && <p style={{ paddingBottom: '0.5rem' }}>{link.name}</p>}
              {link.type && <h1 className='nav-title'>{link.name}</h1>}
            </Link>
          </Box>
        ))}
        <li>
          <DarkModeIcon />
        </li>
      </Box>
    </Box>
  );
};
export default Navbar;
