import React, {  useState } from 'react';
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

const AdminAddGmailForm = () =>{

  const navigate = useNavigate();

  const [gm , setGmail] = useState("");
  const [pp , setPp] = useState("");

  console.log(document.cookie.session)

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      passp:pp,
      gmail:gm,
    };

    apiclient.post(`/admin/add/gmail/`,data)
    .then((res) => {
      console.log(res.data.message)
      navigate("/admin/cop");
      
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
              required
              fullWidth
              name="oneline"
              onInput={(e) => setGmail(e.target.value)}
              label="Email Address"
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
              Add Gmail
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const AdminAddGmail = () => {
  const isauth = sessionStorage.getItem("authenticated")
  if(isauth === "true"){
    return (
      <AdminHome Mycomponent={<AdminAddGmailForm />} />
    );
  }
  else{
    return  (<Navigate to="/" />);
  }
};


export default AdminAddGmail;