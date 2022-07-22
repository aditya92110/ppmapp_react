import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Stack} from '@mui/material';
import '../App.css';

export default function Footer() {
  return (
    <Stack className= "Footer">
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Copyright
      </Typography>
    </Stack>
  );
}