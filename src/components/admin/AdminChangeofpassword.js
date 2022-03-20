import React, { useEffect, useState } from 'react';
import AdminHome from "./AdminHome";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { apiclient } from '../../api/api';
import { Navigate, useNavigate } from 'react-router-dom';


const theme = createTheme();

const AdminCOPForm = () =>{

  const navigate = useNavigate();

  const [pp , setPp] = useState("");
  const [npass , setNpass] = useState("");
  const [uid , setUid] = useState("");
  const [dep , setDep] = useState("");

  console.log(document.cookie.session)

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      passp:pp,
      newpassw:npass,
      uniqid:uid,
      dept:dep,
    };

    apiclient.post(`/admin/copform/`,data)
    .then((res) => {
      console.log(res.data.message)
      navigate("/admin/addgmail");
      
    })
    .catch(errorres  =>   console.log(errorres.response.data.err))

  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              fullWidth
              id="uid"
              label="Unique ID"
              value={uid}
              onInput={(e) => setUid(e.target.value)}
              name="uid"
            />


            <TextField
              margin="normal"
              required
              fullWidth
              name="oneline"
              onInput={(e) => setDep(e.target.value)}
              label="Department"
              type="text"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="oneline"
              onInput={(e) => setNpass(e.target.value)}
              label="New Password"
              type="text"
            />

            <TextField
              margin="normal"
              fullWidth
              name="oneline"
              onInput={(e) => setPp(e.target.value)}
              label="Secret Passphrase"
              type="text"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Change Password
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const AdminChangeofpassword = () => {

  const isauth = sessionStorage.getItem("authenticated")
  if(isauth === "true"){
    return (
      <AdminHome Mycomponent={<AdminCOPForm />} />
    );
  }
  else{
    return  (<Navigate to="/" />);
  }
};


export default AdminChangeofpassword;