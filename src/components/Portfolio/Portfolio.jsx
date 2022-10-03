import { Box, Grid } from '@mui/material';
import ItemProject from './ItemProject';

import radiologyQuestionImg from '../../assets/rq.png';
import amicalFootballImg from '../../assets/af.png';
import porteFolioImg from '../../assets/pf.png';
import todoAppImg from '../../assets/av.png';

const projectList = [
  {
    id: 1,
    title: 'Mon PorteFolio',
    live: 'https://alexandre-monney.surge.sh/',
    source: 'https://github.com/Alexandre-Monney/Alexandre-Monney.github.io',
    image: porteFolioImg,
  },
  {
    id: 2,
    title: 'Radiology Questions',
    live: 'https://radiology-questions.surge.sh/',
    source: 'https://github.com/Alexandre-Monney/radiology-questions',
    image: radiologyQuestionImg,
  },
  {
    id: 3,
    title: 'Amical Football',
    live: 'https://amical-football.surge.sh/',
    source: 'https://github.com/Alexandre-Monney/Alexandre-Monney.github.io',
    image: amicalFootballImg,
  },
  {
    id: 4,
    title: 'Todo App',
    live: 'https://alexandre-monney.surge.sh/',
    source: 'https://github.com/Alexandre-Monney/Alexandre-Monney.github.io',
    image: todoAppImg,
  },
];

const Portfolio = () => {
  return (
    <Box>
      <Grid container display={'flex'} justifyContent={'center'}>
        {projectList.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <ItemProject image={item.image} title={item.title} live={item.live} source={item.source} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Portfolio;
