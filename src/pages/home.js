import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import '../App.css';
import { Paper } from '@mui/material';
import homepic from '../Chemical-Elements.jpg'

export default function Home() {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2} className='homegrid'>
      <Grid item xs={8}>
        <Paper className='homepaper'>
          <img alt="" src={homepic} className="home"></img>
        </Paper>
      </Grid>
      <Grid item xs={4} >
        <Paper sx={{ p: 2 }} >
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} className='homepaper2' >
            Extracting elemental data from API reports
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}