//NODE_MODULES
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';



interface CardComponentProps {
  src: string;
  title: string;
  description: string;
}

const CardComponent = ({ src, title, description }: CardComponentProps) => {
//Generate Stars
  const randomStars = Math.floor(Math.random() * 5) + 1;
  const stars = Array(randomStars).fill('★');
  const emptyStars = Array(5 - randomStars).fill('☆');

//Generate Random view
  const randomViews = Math.floor(Math.random() * 1000) + 1;

  return (
    <Card sx={{
      maxWidth: 400, boxShadow: 3, borderRadius: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'start', height: '500px', '@media (max-width: 768px)': {
        width: '300px',
      },
    }}>
      <CardMedia
        className='h-64 w-full'
        component="img"
        height="60"
        image={src}
        alt={title}
      />
      <CardContent className='w-full'>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Box className='!w-full flex flex-row justify-between'>
          <Typography variant="body1" color="error" sx={{ marginTop: 2 }}>
            {stars.map((star, index) => (
              <span key={index} style={{ color: 'gold' }}>{star}</span>
            ))}
            {emptyStars.map((star, index) => (
              <span key={index + stars.length} style={{ color: 'gray' }}>{star}</span>
            ))}
          </Typography>
          <Typography variant="body1" color="error" sx={{ marginTop: 2 }}>
            {description}
          </Typography>
        </Box>
        <Typography variant="body1" color="error" sx={{ marginTop: 2 }}>
          <span><VisibilityIcon style={{ verticalAlign: 'middle' }} /><span className='px-4'>{randomViews} views</span></span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
