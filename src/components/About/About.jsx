import { Paper } from '@mui/material';
import { Box } from '@mui/system';
import Footer from '../Footer/Footer';
import './style.scss';

const About = () => {
  const firstText = () => (
    <Paper className='about-p' elevation={3}>
      Hello ! Je m'appelle Alexandre, j'ai tout juste 30ans. Etant passionnée d'IT, j'ai décidé de mettre cette passion au coeur de ma vie
      professionnelle en devenant développeur Web. J'ai donc suivi une formation intensive "Fullstack JavaScript" au sein de l'école O'Clock
      d'une durée de 6 mois.
    </Paper>
  );

  const tech = () => (
    <Paper className='about-p' elevation={3}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quae placeat, eos excepturi ex eius velit quia blanditiis
      consectetur dolore!
    </Paper>
  );

  const softSkills = () => (
    <Paper className='about-p' elevation={3}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam, unde vel deleniti odit voluptatem aspernatur culpa facere alias
      saepe.
    </Paper>
  );

  return (
    <>
      <Box display={'flex'} flexDirection={'column'} height={'82vh'} mt={3} p={3}>
        <Box width={'70%'}>{firstText()}</Box>
        <Box width={'70%'} alignSelf={'end'}>
          {tech()}
        </Box>
        <Box width={'70%'}>{softSkills()}</Box>
      </Box>

      <Footer />
    </>
  );
};
export default About;
