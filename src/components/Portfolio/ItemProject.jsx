import { Box } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';
import GitHubIcon from '@mui/icons-material/GitHub';
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
        <Box
          display={'flex'}
          alignItems={'center'}
          gap={'0.5rem'}
          className='project-button'
          p={1}
          border={'2px solid black'}
          borderRadius={'25px'}
        >
          <PreviewIcon sx={{ fontSize: 35 }} />
          <a href={live}> Voir le Site</a>
        </Box>
        <Box
          display={'flex'}
          alignItems={'center'}
          gap={'0.5rem'}
          className='project-button'
          p={1}
          border={'2px solid black'}
          borderRadius={'25px'}
        >
          <GitHubIcon sx={{ fontSize: 35 }} />
          <a href={source}> Voir le GitHub</a>
        </Box>
      </Box>
    </Box>
  );
};
export default ItemProject;
