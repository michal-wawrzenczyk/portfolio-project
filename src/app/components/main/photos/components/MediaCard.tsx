import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

interface MediaCardProps {
  url: string;
  photoId: number;
}

export const MediaCard = ({ url, photoId }: MediaCardProps): any => {
  return (
    <Link to={`/details/${photoId}`}>
      <Card sx={{ maxWidth: '100%' }}>
        <CardMedia
          component="img"
          height="140"
          image={url}
          alt="green iguana"
        />
        <CardActions>RATING PLACHOLDER</CardActions>
      </Card>
    </Link>
  );
};
