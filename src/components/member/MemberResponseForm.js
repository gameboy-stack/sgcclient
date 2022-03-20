
import React, { useEffect, useState } from 'react';
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
import MemberHome from './MemberHome';



const theme = createTheme();

const RespFrom = () =>{
  const navigate = useNavigate();
  const [formData , setFormData] = useState({});
  const [fid , setFuid] = useState("");
  const [sub , setSubj] = useState("");
  const [detres , setDetresp] = useState(``);

  console.log(document.cookie.session)

  useEffect(() => {
    apiclient.get(`/member/response`)
    .then((res) => {
          setFormData(res.data);
          console.log(res.data);
    })
    .catch(errorres => console.log(errorres.response))
  },[])

  const handleSubmit = (event) => {
    event.preventDefault();
    var flag = false;
    const data = {
      subj:sub,
      fuid:fid,
      detresp:detres,
    };

    apiclient.post(`/member/response/`,data)
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
              id="resid"
              label="Response ID"
              value={formData.resid}
              disabled
              name="resid"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              name="oneline"
              onInput={(e) => setFuid(e.target.value)}
              label="Form id"
              type="text"
            />
            <TextField
              margin="normal"
              fullWidth
              name="oneline"
              onInput={(e) => setSubj(e.target.value)}
              label="Explain yourself in a line"
              type="text"
            />
            <TextField sx = {{ mt:"6px" }}
                  id="outlined-multiline-flexible"
                  label="Explain breifly"
                  multiline
                  maxRows={15}
                  minRows={9}
                  onInput={(e) => setDetresp(e.target.value)}
                  style={{ width: 600 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Response
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}






const MemberResponseForm = () => {
  const isauth = sessionStorage.getItem("authenticated")
  if(isauth === "true"){

    return (
    <MemberHome Mycomponent = {<RespFrom />} />
    );
  }
  else{
    return  (<Navigate to="/" />);
  }
};

export default MemberResponseForm;