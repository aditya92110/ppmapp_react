import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import 'C:/Users/ASUS/matui/src/App.css';
import { Button, Typography } from '@mui/material';
import axios from "axios";
import * as qs from 'qs';
import {useEffect} from 'react';
import { useLocation } from 'react-router-dom';


export default class Results extends React.Component{
  


  
  componentDidMount(){
    console.log(this.props)
  //  // const {name} = this.props.state
  //   // const location = useLocation();
    

   
  //       const config = {
  //         method:'post',
  //         url: 'http://localhost:5050/viewer',
  //         headers:{'content-type':'application/json'},
  //         data: {
  //           "filename": "pdf.pdf"
  //         }
  //       }
      
  //       axios(config).then(function(response){
  //         console.log(JSON.stringify(response.data))
  //       })

   }
  render(){
   // const {location}= this.props;
    return(
      <h1>Table</h1>

    )}}
      //function JsonDataDisplay(){
        //<Item className='tablediv'>
  //       const DisplayData=response.data.map(
  //         (info)=>{
  //           return(
  //             <tr>
  //               <td>{info.Number}</td>
  //               <td>{info.ChemicalName}</td>
  //               <td>{info.ChemicalFormula}</td>
  //             </tr>
  //           )
  //         }
  //       )
      
  //       return(
  //         <div>
  //           <table className='jsontable'>
  //             <thead>
  //               <tr>
  //               <th>Sr.NO</th>
  //               <th className='chem'>Chemical name</th>
  //               <th>Chemical formula</th>
  //               </tr>
  //             </thead>
  //             <tbody>
              
                
  //               {DisplayData}
                
  //             </tbody>
  //           </table>
            
  //         </div>
  //       )
      
  //       //</Item>
  //     }
      

      
      
  //   )
  // }
//}

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
// function viewresult(e){
//   var data = qs.stringify({
//     "filename":"pdf.pdf"
//   })
//   const config = {
//     method:'post',
//     url: 'http://localhost:5050/inference',
//     headers:{'content-type':'application/json'},
//     data: data
//   }

//   axios(config).then(function(response){
//     console.log(JSON.stringify(response.data))
//   })

// }
// function createData(name, calories, fat) {
//     return { name, calories, fat };
//   }


  
//   const rows = [
//     createData('Frozen', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];

//   export default function Results(props) {
//     const fname = React.useState(props.name)
//     useEffect(() => {
//       viewresult();
//     }, [])
//     return (
//       <Box sx={{ width: '70%' }}>
//         <Stack spacing={2}>
          
//         <Box sx={{ '& button': { m: 1 } }} className = 'button'>
//         <div className='typo'>
//           <Typography variant='h4'>
//             Results
//           </Typography>
          
//         </div>
  
//         </Box>
//         </Stack>
//         <Box  className='table'>
//           <TableContainer   >
//         <Table sx={{ maxWidth: 1000}} aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Dessert (100g serving)</TableCell>
//               <TableCell align="right">Calories</TableCell>
//               <TableCell align="right">Fat&nbsp;(g)</TableCell>
              
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow
//                 key={row.name}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell component="th" scope="row">
//                   {row.name}
//                 </TableCell>
//                 <TableCell align="right">{row.calories}</TableCell>
//                 <TableCell align="right">{row.fat}</TableCell>
                
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>     
//       </Box>   
        
//       </Box>
//     );
//   