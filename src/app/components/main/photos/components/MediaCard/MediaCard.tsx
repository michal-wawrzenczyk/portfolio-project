import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
// import { Box } from '@mui/material';
import { useMediaCardStyles } from './MediaCard.styles';
import { setSelectedPhoto } from '../../../../../../store/slices/gallery';
import { useDispatch } from 'react-redux';

export interface MediaCardProps {
  url: string;
  photoId: number;
  author: string;
  species: string;
  description?: string;
  location?: object;
}

export const MediaCard: React.FC<MediaCardProps> = ({
  url,
  photoId,
  author,
  species,
  description,
  location
}: MediaCardProps) => {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const classes = useMediaCardStyles();

  const doSomething = (): void => {
    dispatch(
      setSelectedPhoto({
        author,
        species,
        description: description ?? '',
        location: location ?? {},
        photoUrl: url,
        photoId
      })
    );
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        margin: '0.5rem'
      }}>
      <Link onClick={(): void => doSomething()} to={`/details/${photoId}`}>
        <div className={classes.overlayContainer}>
          <div className={classes.overlay}></div>
          <CardMedia component="img" image={url} />
        </div>
      </Link>
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
  );
};
