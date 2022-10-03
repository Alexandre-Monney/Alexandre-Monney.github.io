import { Box } from '@mui/system';
import Footer from '../Footer/Footer';
import './style.scss';

const aboutText = [
  {
    text: `Hello ! Je m'appelle Alexandre, j'ai tout juste 30ans. Etant passionnée d'IT, j'ai décidé de mettre cette passion au coeur de ma vie
    professionnelle en devenant développeur Web. J'ai donc suivi une formation intensive "Fullstack JavaScript" au sein de l'école O'Clock
    d'une durée de 6 mois.`,
    flex: false,
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae placeat, eos excepturi ex eius velit quia blanditiis
    consectetur dolore!`,
    flex: true,
  },
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae placeat, eos excepturi ex eius velit quia blanditiis
    consectetur dolore!`,
    flex: false,
  },
];

const About = ({ theme }) => {
  return (
    <>
      <Box display={'flex'} flexDirection={'column'} height={'82vh'} mt={3} p={3}>
        {aboutText.map((p, i) => (
          <Box key={i} width={'70%'} alignSelf={p.flex ? 'end' : null}>
            <p className={theme ? 'dark about-p' : 'about-p'}>{p.text}</p>
          </Box>
        ))}
      </Box>
      <Footer />
    </>
  );
};
export default About;
