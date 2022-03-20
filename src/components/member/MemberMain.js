import  React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import { apiclient } from '../../api/api';

function MemberMain(props) {
  const { data } = props;
  const navigate = useNavigate();
  const[gs,setSt] = useState("");
  const formId = data._id;
  const changegstatus= (val) => {
    setSt(val);
    console.log("asdmhgasd" + formId);
    console.log("aasdasdasdsdmhgasd" + val);
}

  const handleSubmit = (event) => {
    event.preventDefault();
    var flag = false;
    const data = {
      gstatus:gs,
      formid:formId
    };

    apiclient.post(`/member/status/`,data)
    .then((res) => {
      flag = true
      navigate(`/member/dashboard/`);
      console.log(res.data.msg)
    })
    .catch(errorres  =>   console.log(errorres.response.data.err))
    
  };

 
  var d = (new Date(`${data.doi}`) + "");
  d = (d.slice(0,-21)) + "";
  console.log("main " + data)
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{minWidth:"97%" }}
    >
      <Grid  >
        <Box
        component="form" 
        onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            m: 1,
          }}
        >
        <Box>

          <FormControl  sx={{ m: 1, minWidth: 200 ,mr:4}}>
                <InputLabel id="demo-simple-select-helper-label">Grievance Status</InputLabel>
                <Select
                  style={{height: "55px",width:"200"}}
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
        </Box>
        <Box>

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
      </Grid>
      <Typography variant="h6" gutterBottom>
        {data.subj}
      </Typography>
        <em >
          {`${d} - [ ${data.gstatus} ]`}
        </em>
      <Divider />
      <br />
      <Grid spacing={5} >
        {data.detrep}
      </Grid>
    </Grid>
 );
}


export default MemberMain;
