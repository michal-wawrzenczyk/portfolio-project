import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

interface MediaCardProps {
  url: string;
  photoId: number;
}

export const MediaCard: React.FC<MediaCardProps> = ({
  url,
  photoId
}: MediaCardProps) => {
  const [value, setValue] = React.useState(0);

  return (
    <Link to={`/details/${photoId}`}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          margin: '0.5rem'
        }}>
        <CardMedia component="img" image={url} />
        <Rating
          name="simple-controlled"
          value={value}
          sx={{
            margin: '0.5rem'
          }}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        />
        {/*<CardActions>Upload date placeholder</CardActions>*/}
      </Card>
    </Link>
  );
};
