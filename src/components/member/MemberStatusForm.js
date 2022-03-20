import React, { useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navigate, useNavigate } from 'react-router-dom';
import MemberHome from './MemberHome';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { apiclient } from '../../api/api';


const theme = createTheme();


const StatusFormContent = () => {

  const navigate = useNavigate();
  
  const[gs,setSt] = useState("");
  const[fuid,setFuid] = useState("");

  const changegstatus= (val) => {
      setSt(val);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var flag = false;
    const data = {
      gstatus:gs,
      formid:fuid
    };

    apiclient.post(`/member/status/`,data)
    .then((res) => {
      flag = true
      navigate("/member/dashboard");
      console.log(res.data.msg)
    })
    .catch(errorres  =>   console.log(errorres.response.data.err))
    
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Form ID"
              label="Form ID"
              name="formid"
              onChange={(e) => setFuid(e.target.value) }
              autoFocus
            />
            <FormControl fullwidth sx={{ m: 1, minWidth: 310 }}>
                  <InputLabel id="demo-simple-select-helper-label">Grievance Status</InputLabel>
                  <Select
                    style={{height: "57px",width:"390px"}}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={gs}
                    label="Grievance Status"
                    onChange={(e) => changegstatus(e.target.value)}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Completed"}>Completed</MenuItem>
                    <MenuItem value={"Processing"}>Processing</MenuItem>
                    <MenuItem value={"Pending"}>Pending</MenuItem>
                    </Select>
              </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Change Status
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


const MemberStatusForm = () => {
  


  const isauth = sessionStorage.getItem("authenticated");
  if(isauth === "true"){
    return (<MemberHome  Mycomponent={<StatusFormContent />} isReport={true} isSearchBar={false} />)
  }
  else{
    return  (<Navigate to="/" />);
  }

}

export default MemberStatusForm