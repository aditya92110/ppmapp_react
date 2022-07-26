import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import uploadImg from '../uploadImg.png'
import { Button, Grid } from '@mui/material';
import { useState } from 'react';
import '../App.css';

import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import axios from "axios";
import { CSVLink } from 'react-csv';
import { blue, lightBlue } from '@mui/material/colors';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const headers = [
  { label: 'S. No.', key: 'iteration' },
  { label: 'Chemical Name', key: 'chem_name' },
  { label: 'PPM Value', key: 'ppm_value' },
]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function Results() {
  const [file, setFile] = useState()
  const [triggerButton, setTriggerButton] = useState(false)
  const [fileName, setFileName] = useState("")
  const data = { name: fileName }
  const [result, setResult] = useState([])
  const [status, setStatus] = useState(0)
  const [triggerOpen, setTriggerOpen] = React.useState(false);


  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleTriggerClose = () => {
    setTriggerOpen(false);
  };





  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  const actionTrigger = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleTriggerClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleTriggerClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );




  function handleFile(e) {
    setFile(e.target.files[0])
  }

  function handleSubmit(e) {
    e.preventDefault();
    const url = "http://localhost:5050/uploader";
    const formData = new FormData();
    formData.append('file', file);

    setFileName(file.name);
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }
    axios.post(url, formData).then((response) => {
      console.log(response.data)
    })


  }

  async function backendtrigger(e) {
    e.preventDefault();
    setTriggerOpen(true);

    const config = {
      method: 'post',
      url: 'http://localhost:5050/inference',
      headers: { 'content-type': 'application/json' },
      data: { 'filename': fileName }
    }

    await axios(config).then((response) => {
      console.log(response)
      setStatus(1)
      let res = response.data.return_data
      setResult(res)
      console.log(result)
    })
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        margin: 5,
        '& > :not(style)': {
          m: 1,
          width: 750,
          
        },
      }}
    >
      <Card sx={{ maxWidth: 600,height:550, bgcolor:'#ADD8E6' }}>
        <CardMedia
          component="img"
          height="100"
          sx={{ width: 100, marginLeft: 30, marginTop:17 }}

          image={uploadImg}
          alt="upload"

        />
        <CardContent
          sx={{ lineHeight: 5 }}
        >
          <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                
          <form onSubmit={handleSubmit}> <input type="file" name="file" onChange={handleFile} />
          
            <button onClick={handleClick} className='form-submit-button'>

              Upload File

            </button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} variant="filled">
                PDF uploaded successfully
              </Alert>
            </Snackbar>
            {/* <Snackbar
open={open}
autoHideDuration={6000}
onClose={handleClose}
message="PDF uploaded successfully"
action={action}
/> */}
          </form>
          </Grid>
          <Grid item>
          <Button onClick={backendtrigger} variant='contained'>
            Trigger


          </Button>
          <Snackbar open={triggerOpen} autoHideDuration={6000} onClose={handleTriggerClose}>
            <Alert onClose={handleTriggerClose} severity="success" sx={{ width: '100%' }} variant="filled">
              Data is being processed
            </Alert>
          </Snackbar>
          </Grid>
          </Grid>

        </CardContent>
      </Card>
      <Paper elevation={1 } sx={{flexWrap:'wrap',height:'auto'}}>
        {
          status == 1 && (
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >

              <Grid item sx={{marginTop:3 ,marginBottom:3}}>
                <CSVLink data={result} headers={headers} filename={"ExtractedData.csv"} target="_blank" style={{ textDecoration: "none" }}>
                  <Button variant='contained'  >Download</Button>
                </CSVLink>

              </Grid>
              




    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 500, marginLeft:15}} size="small" aria-label="a dense table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>S.No</StyledTableCell>
            
            <StyledTableCell align="left">Chemical Names</StyledTableCell>
            <StyledTableCell align="right">PPM Value</StyledTableCell>
            
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {result.map((row) => (
            <StyledTableRow
              key={row.iteration}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell align="left">{row.iteration +1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.chem_name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.ppm_value}</StyledTableCell>
  
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  



              {/* <table className='table1'>
                <thead>


                  <tr className='tr'>
                    <td className='td'><h2>S.No</h2></td>
                    <td className='td'> <h2>Chemical Names</h2></td>
                    <td className='td'><h2>PPM values</h2></td>
                  </tr>
                </thead>
                <tbody>


                  {result.map((info, id) => (

                    <tr key={id} className='tr' >

                      <td className='td'>{id + 1}</td>
                      <td className='td'>{info.chem_name}</td>
                      <td className='td'>{info.ppm_value}</td>
                    </tr>

                  ))}
                </tbody>

              </table>
               */}
            </Grid>

          )
        }

      </Paper>
    </Box>
  );
}