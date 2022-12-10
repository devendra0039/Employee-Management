import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import { Button } from '@mui/material';
import List from './List';
import { useNavigate } from 'react-router-dom';






const FrontPage = () => {

  const navigate= useNavigate();
  const handleAddEmployee = () =>{
    navigate('AddEmployee')
  }

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },

  }));



  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
  return (
    <Box  >
      <AppBar position="static" sx={{ backgroundColor: "black" }} >
        <Toolbar sx={{ justifyContent: "space-between" }}>

          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ fontWeight: "bold", color: "white"}}>
            EMPLOYEES
            <Button onClick={handleAddEmployee} sx={{marginLeft:"30px",marginBottom:"8px"}} variant="outlined">Add Employee</Button>
          </Typography>
           
          <Search>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <Button variant="outlined">Search</Button>
          </Search>
            
        </Toolbar>
      </AppBar>
      <List />
      
    
    </Box>
  )
}

export default FrontPage