



import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export  function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 305 }}>
      
      <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=90&.v=1567022175704" style={{width:"90%",height:"350px",marginLeft:"7%"}} alt="" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          I phone 5
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small"> More</Button>
      </CardActions>
    </Card>
  );
}


