import { Button, Grid } from '@mui/material';
import  { useState } from 'react';
import '../App.css';
import {Paper} from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import axios from "axios";
import { CSVLink } from 'react-csv';
import { blue } from '@mui/material/colors';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import uploadImg from '../uploadImg.png'
import {Divider} from '@mui/material';






const headers = [
        {label: 'S. No.', key:'iteration'},
        {label: 'Chemical Name', key:'chem_name'},
        {label: 'PPM Value', key:'ppm_value'},
      ]




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




 

export default function Projects(){
  const [file,setFile] = useState()
  const [triggerButton,setTriggerButton] = useState(false)
  const [fileName,setFileName] = useState("")
  const data = {name:fileName}
  const [result,setResult] = useState([])
  const [status,setStatus] = useState(0)
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



  // const data_json = [
  //   {
  //       "chem_name": "acetonitrile",
  //       "ppm_value": "410 ppm",
  //       "iteration": 0
  //   },
  //   {
  //       "chem_name": "cumene",
  //       "ppm_value": "1000 ppm",
  //       "iteration": 1
  //   },]
  //let result = []

  function handleFile(e){
    setFile(e.target.files[0])
  }

  function handleSubmit(e){
    e.preventDefault();
    const url = "http://localhost:5050/uploader";
    const formData= new FormData();
    formData.append('file',file);
    
    setFileName(file.name);
    const config = {
      headers:{'content-type':'multipart/form-data'}
    }
    axios.post(url,formData).then((response)=>{
      console.log(response.data)
    })
    // console.log('fileUploaded')
    // .catch((error)=>{
    //   console.log(error)
    // })

}  

async function backendtrigger(e) {
  e.preventDefault();
  setTriggerOpen(true);

  const config = {
    method:'post',
    url: 'http://localhost:5050/inference',
    headers:{'content-type':'application/json'},
    data: {'filename':fileName}
  }

  await axios(config) .then((response)=>{
    console.log(response)
    setStatus(1)
    let res = response.data.return_data
    setResult(res)
    console.log(result)
  })


  
    

  
 
}



// function handleTrigger(e){
//   setState(triggerButton)
//   axios({
  
//     // Endpoint to send files
//     url: "http://localhost:3000/files",
//     method: "POST",
  
//     // Attaching the form data
//     data: triggerButton,
//   })

//     // Handle the response from backend here
//     .then((res) => { })

//     // Catch errors if any
//     .catch((err) => { });
// }





  

  return (
    
    <Paper sx={{margin:3,padding:3}}>
      
      <Grid container spacing={2} sx={{display:'flex',alignItem:'center',justifyContent:'center'}}>
      <Grid item spacing={2}>
      <img src={uploadImg} width ='50' height='50'>
        </img>
        </Grid>
        <Grid item>
        <Divider orientation="vertical" flexItem /></Grid>
        <Grid item   marginTop={2} spacing={2} direction='row'>
       
      <form onSubmit= {handleSubmit}> <input type="file" name="file" onChange={ handleFile} />

        {/* <Item> <Button variant='outlined' onClick={}>
                Submit
            </Button></Item> */}
            {/* <Link to="/results">Submit</Link> */}
        <button onClick={handleClick}>

                Submit

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
            <Grid item sx={{marginLeft:'auto'}} >
        <Button onClick={backendtrigger} variant='contained'>
                Trigger
                

            </Button>
            <Snackbar open={triggerOpen} autoHideDuration={6000} onClose={handleTriggerClose}>
        <Alert onClose={handleTriggerClose} severity="success" sx={{ width: '100%' }} variant="filled">
          Data is being processed
        </Alert>
      </Snackbar>
            {/* <Snackbar
        open={triggerOpen}
        autoHideDuration={6000}
        onClose={handleTriggerClose}
        message="Data extraction is in process"
        action={actionTrigger}
      /> */}
            </Grid>
            
           
            
            
      
      </Grid>
      
      {
              status==1 && (
                <Grid
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
             
                <Grid item >
                <CSVLink data={result} headers={headers} filename={"ExtractedData.csv"} target="_blank" style={{textDecoration:"none"}}>
                <Button variant='contained'  >Download</Button>
              </CSVLink>
                  
                </Grid>
                
                  <table className='table1'>
                    <thead>

                    
                    <tr>
                      <td className='td'><h2>S.No</h2></td>
                      <td className='td'> <h2>Chemical Names</h2></td>
                      <td className='td'><h2>PPM values</h2></td>
                    </tr>
                    </thead>
                    <tbody>

                   
                    {result.map((info,id)=>(
			
				<tr key={id} >

					<td className='td'>{id+1}</td>
					<td className='td'>{info.chem_name}</td>
					<td className='td'>{info.ppm_value}</td>
				</tr>
			
                    ))}
                     </tbody>
	
                  </table>
                  </Grid>
                
              )
            }
            
      
    </Paper>
    
  );
}
