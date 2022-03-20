import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Navigate, useNavigate } from 'react-router-dom';
const {apiclient} = require('../api/api');

const theme = createTheme();



const LoginForm = () => {

  const [userType,setuserType] = useState();
  const [error,setError] = useState("");
  const [userRollno,setRollno] = useState();
  const [userPassword,setPassword] = useState();
  const [secretpass,setSecretPassword] = useState();
  
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = userType === "admin" ? {
      adm:userRollno,
      password:userPassword,
      pp:secretpass
    } : {
            rollno : userRollno,
            password : userPassword
          };

      apiclient.post(`http://127.0.0.1:8080/${userType}/`,data)
      .then((res) => {
          if(res.data.logged){
            sessionStorage.setItem("authenticated", "true");  
            sessionStorage.setItem("userType", userType);  
            if(userType !== "admin"){
              navigate(`/${userType}/dashboard`);
            }
            else{
              navigate("/admin/cop")
            }
            setError("");
            console.log(res)
            console.log(res.headers)
        }
      })
      .catch(errorres  => setError(errorres.response.data.err))
  }


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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2.5}>
              <Grid item xs={12}>
                <TextField
                  name="rollno"
                  fullWidth
                  id="rollno"
                  label="Username"
                  autoFocus
                  onInput={(e) => setRollno(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onInput={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
                <FormControl >
                  {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    onChange={(e) => setuserType(e.target.value)}
                    >
                    <FormControlLabel value="student" control={<Radio />} label="Student" />
                    <FormControlLabel value="member" control={<Radio />} label="Member" />
                    <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {
              userType === "admin" && <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="secretpassphrase"
                    label="Secret Phrase"
                    type="password"
                    id="secretpassphrase"
                    onInput={(e) => setSecretPassword(e.target.value)}
                  />
                </Grid>
              
              }

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot Password ?
                </Link>
              </Grid>
            </Grid>
            {error && <br />}
          </Box>
        </Box>
        {  error  &&  <>   
        <hr /><br />
        <Grid container justifyContent="center">
          <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert variant="outlined" severity="error">
                {error}
            </Alert>
          </Stack>
        </Grid></>
        }

      </Container>
    </ThemeProvider>
  );
}


const Login = () => {
  const isauth = sessionStorage.getItem("authenticated");
  if(isauth !== "true"){
    return (<LoginForm />);
  }
  else{
    const userType = sessionStorage.getItem("userType");
    if(userType === "admin"){
      return  (<Navigate to="/admin" />);
      
    }
    else if((userType === "student") || (userType === "member")){
      return  (<Navigate to={"/"+userType+"/dashboard"} />  );
    }
    else{
      return  (<Navigate to="/" />);
    }
}
}

export default Login;
