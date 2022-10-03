import { Box, Grid } from '@mui/material';
import ItemProject from './ItemProject';

const projectList = [
  {
    id: 1,
    title: 'Project 1',
    live: 'https://alexandre-monney.github.io/',
    source: 'https://github.com/Alexandre-Monney/Alexandre-Monney.github.io',
    image: 'img example',
  },
  {
    id: 2,
    title: 'Project 1',
    live: 'https://alexandre-monney.github.io/',
    source: 'https://github.com/Alexandre-Monney/Alexandre-Monney.github.io',
    image: 'img example',
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
