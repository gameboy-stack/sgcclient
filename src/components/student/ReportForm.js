import React, { useEffect, useState } from 'react';
import Home from './Home';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { apiclient } from '../../api/api';
import { Navigate, useNavigate } from 'react-router-dom';



const theme = createTheme();

const RepFrom = () =>{
  const navigate = useNavigate();
  const [formData , setFormData] = useState({});
  const [gtyp , setGtype] = useState("");
  const [sub , setSubj] = useState("");
  const [detre , setDetrep] = useState(``);

  console.log(document.cookie.session)

  useEffect(() => {
    apiclient.get(`/student/report`)
    .then((res) => {
          setFormData(res.data);
          console.log(res.data);
    })
    .catch(errorres => console.log(errorres.response))
  },[])

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      gtype:gtyp,
      subj:sub,
      detrep:detre,
    };
    console.log(gtyp)

    apiclient.post(`/student/report/`,data)
    .then((res) => {
      console.log(res.data.message)
      navigate("/student/dashboard");
      
    })
    .catch(errorres  =>   console.log(errorres.response.data.err))
    // eslint-disable-next-line no-console

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
              id="formid"
              label="Form ID"
              value={formData.fuid}
              disabled
              name="formid"
              InputProps={{
                readOnly: true,
              }}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Grievance Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={gtyp}
                label="Grievance Type"
                onChange={(e) => setGtype(e.target.value)}
              >
              <MenuItem value="">
                  <em>None</em>
              </MenuItem>
              <MenuItem value={"Academic Problem"}>Academic Problem</MenuItem>
              <MenuItem value={"Financial Problem"}>Financial Problem</MenuItem>
              <MenuItem value={"Library Problem"}>Library Problem</MenuItem>
              <MenuItem value={"Accommodation Problem"}>Accommodation Problem</MenuItem>
              <MenuItem value={"Campus Problem"}>Campus Problem</MenuItem>
              <MenuItem value={"Other Problems"}>Other Problems</MenuItem>
              </Select>
            </FormControl>

            <TextField
              margin="normal"
              required
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
                  onInput={(e) => setDetrep(e.target.value)}
                  style={{ width: 600 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit Report
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


const ReportForm = () => {
  const isauth = sessionStorage.getItem("authenticated")
  if(isauth === "true"){

    return (
    <Home Mycomponent = {<RepFrom />} />
    );
  }
  else{
    return  (<Navigate to="/" />);
  }
};

export default ReportForm;
