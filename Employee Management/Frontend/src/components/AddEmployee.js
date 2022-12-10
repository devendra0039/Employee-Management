import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../Redux/EmployeeTask';

const AddEmployee = () => {

  const dispatch = useDispatch();

  const navigate=useNavigate();


  const [empname, setempname] = useState('');
  const handleNameChange =(event)=>{
    setempname(event.target.value);
  }

  const [empage,setempage] = useState('');
  const handleAgeChange = (event)=>{
    setempage(event.target.value);
  }

  const [empdateofjoining,setempdateofjoining]=useState('');
  const handleJoingdate = (event) =>{
    setempdateofjoining(event.target.value);
  }

  const [emplocation,setemplocation]=useState('');
  const handleLocation = (event) =>{
    setemplocation(event.target.value);
  }

  const [empstatus,setempstatus]=useState('');
  const handleStatus = (event) =>{
    setempstatus(event.target.value)
  }

  const handleSubmit = () =>{
    const obj = {
      
        "employeeName": empname,
        "joiningDate": empdateofjoining,
        "age": empage,
        "employeeLocation": emplocation,
        "employeeActive": empstatus
    }

    dispatch(addEmployee(obj));

    
    
    navigate("/");

  }
  
  return (
    
    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off" >
      <div style={{width:"500px", display:"inline-block"}}>
      <TextField onChange={handleNameChange} value={empname} type="text" id="empname" label="Employee Name" variant="outlined" style={{width:"500px",margin:"10px"}} />
      <TextField onChange={handleAgeChange} value={empage} type="number" id="empage" label="Employee Age" variant="outlined" style={{width:"500px",margin:"10px"}}/>
      <TextField onChange={handleJoingdate} value={empdateofjoining} type="date" id="empdateofjoining"  variant="outlined" style={{width:"500px",margin:"10px"}}/>
      <TextField onChange={handleLocation} value={emplocation} type="text" id="emplocation" label="Employee Location" variant="outlined" style={{width:"500px",margin:"10px"}}/>
      <TextField onChange={handleStatus} value={empstatus} type="number"  id="empstatus" label="Employee Status" variant="outlined" style={{width:"500px",margin:"10px"}}/> 
      <Button onClick={handleSubmit} type="submit" sx={{marginLeft:"30px",marginBottom:"8px"}} variant="outlined">Submit</Button>
      </div>
    </Box>
   
  )
}
 
export default AddEmployee