import { Box } from '@mui/material';
import './style.scss';

const ItemProject = ({ image, title, live, source }) => {
  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
      <Box className='project-img' component={'img'} src={image} alt={'project preview'} />
      <h1 style={{ fontSize: '2rem' }}>{title}</h1>
      <Box
        className={'portfolio'}
        display={'flex'}
        flexDirection={'column'}
        gap={'0.5rem'}
        alignItems={'center'}
        fontSize={'1.5rem'}
        py={'2rem'}
      >
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <p>Live Example</p>
        </Box>
        <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
          <p>Github Code</p>
        </Box>
      </Box>
    </Box>
  );
};
export default ItemProject;
