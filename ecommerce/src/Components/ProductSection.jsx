import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { MediaCard } from './Card';


export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={10}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing} columnGap="2%">
          {[0, 1, 2,3,4,5].map((value) => (
            <MediaCard/>
          ))}
        </Grid>
      </Grid>
     
    </Grid>
  );
}
