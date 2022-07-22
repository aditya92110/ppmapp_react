import { Button } from '@mui/material';
import React, { useState } from 'react';
import 'C:/Users/ASUS/matui/src/App.css';
import {Paper} from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import axios from "axios";




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
  
  const config = {
    method:'post',
    url: 'http://localhost:5050/inference',
    headers:{'content-type':'application/json'},
    data: {'filename':fileName}
  }

  await axios(config) .then((response)=>{
    console.log(response)
    setStatus(1)
    result = response.data.return_data
    console.log(result)
  })
//   const res = await axios(config) 

//   console.log(res)


// setResult( prevState => [...prevState, JSON.stringify(res.data.result_data)]);
//   console.log(result)
// const res = await axios.post('http://localhost:5050/inference', fileName)
//   console.log(res)
//   setResult(res.data.result_data)
//   console.log(result)

  
    

  
 
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
    <div className='upload'>
      <Stack direction="row" spacing={2}>
        <form onSubmit= {handleSubmit}><Item> <input type="file" name="file" onChange={ handleFile} /></Item>
        {/* <Item> <Button variant='outlined' onClick={}>
                Submit

            </Button></Item> */}
            {/* <Link to="/results">Submit</Link> */}
        <Item> <button>
                Submit

            </button></Item>
            </form>
            
        <Item><button onClick={backendtrigger} >
                Trigger

            </button></Item>
            {/* <Item><Button variant='outlined'  >
            <Link to= '/results' state = {fileName}> View Results </Link>

            </Button></Item>   */}
            
            
      </Stack>
      <div>
      {
              status==1 && (
                
                  <table>
                    <thead>

                    
                    <tr>
                      <td>S.No</td>
                      <td>chem name</td>
                      <td>ppm values</td>
                    </tr>
                    </thead>
                    <tbody>

                   
                    {result.map((info,id)=>(
			
				<tr>
					<td>{id+1}</td>
					<td>{info.chem_name}</td>
					<td>{info.ppm_value}</td>
				</tr>
			
                    ))}
                     </tbody>
	
                  </table>
                
              )
            }
      </div>
    </div>
    
  );
}
