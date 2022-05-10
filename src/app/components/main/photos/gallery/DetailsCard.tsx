import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const DetailsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  align-content: center;

  h2 {
    margin-bottom: 0;
  }

  p {
    margin-top: 0.2rem;
  }
`;

interface DetailsCardProps {
  imgUrl: string;
  species: string;
  // author: string;
  // description?: string;
}

export const DetailsCard: React.FC<DetailsCardProps> = ({
  imgUrl = '',
  species
}: DetailsCardProps) => {
  const [value, setValue] = React.useState(0);

  return (
    <DetailsCardContainer>
      <Card sx={{ Width: '100%', Height: '100%' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="400"
            image={imgUrl}
            alt="green iguana"
          />
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
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Name of species
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              Location
            </Typography>
            <Typography gutterBottom variant="subtitle1" component="div">
              Author
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description text...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Back to gallery
          </Button>
        </CardActions>
      </Card>
      {/*<h2>Name of species</h2>*/}
      {/*<p>Localization</p>*/}
      {/*<img alt="image" />*/}
      {/*<p>Author:</p>*/}
      {/*<h3>Description:</h3>*/}
      {/*<p>...</p>*/}
      {/*<div>Back to gallery</div>*/}
    </DetailsCardContainer>
  );
};
