



import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export  function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 305 }} style={{marginTop:"50px"}}>
      
      <img src={props.image} style={{width:"90%",height:"150px",marginLeft:"7%",marginTop:"25px"}} alt="" />

      <CardContent>
        <Typography gutterBottom variant="h6" sx={{ fontWeight: "bold" }} component="div">
          {props.title}
        </Typography>
        
      </CardContent>
      <CardContent>
      <Typography gutterBottom variant="h6" component="div">
          {props.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small"> More</Button>
      </CardActions>
    </Card>
  );
}






