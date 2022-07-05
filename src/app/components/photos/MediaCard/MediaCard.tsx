import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { useMediaCardStyles } from './MediaCard.styles';
import { setSelectedPhoto } from '../../../../store/slices/gallery';
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
  const [value, setValue] = useState<number[]>([]);
  const [avgValue, setAvgValue] = useState<number | null>(null);
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

  const getAverage = (array: number[]): number => {
    // shorter:
    // a = accumulator, b = current value
    const sum = array.reduce((a, b) => a + b, 0);
    // divide sum by amount of numbers
    return Math.round(sum / array.length);
  };

  // TODO: lifecycle hooks - dokumentacja reacta
  useEffect(() => {
    setAvgValue(getAverage(value));
  }, [value]);

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
        value={avgValue}
        // onClick={(event: any ): any => console.log('event.target', event.target.value)}
        onChange={(event, newValue) => {
          // console.log('newValue', newValue)
          if (typeof newValue === 'number') {
            setValue([...value, newValue]);
          }
        }}
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
