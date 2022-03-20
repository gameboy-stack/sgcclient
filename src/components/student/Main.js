import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function Main(props) {
  const { data ,isRep } = props;
  var d = isRep ? (new Date(`${data.doi}`) + "") :(new Date(`${data.dor}`) + "");
  d = (d.slice(0,-21)) + "";
  console.log("main " + data)
  return (isRep ? (
    <Grid
      item
      xs={12}
      md={8}
      sx={{minWidth:"97%" }}
    >
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
    ) : (
      <Grid
      item
      xs={12}
      md={8}
      sx={{minWidth:"97%" }}
    >
      <Typography variant="h6" gutterBottom>
        {data.subj}
      </Typography>
        <em >
          {`${d} - [ ${data.fuid} ]`}
        </em>
      <Divider />
      <br />
      <Grid spacing={5} >
        {data.detres}
      </Grid>
    </Grid>

    ));
}


export default Main;
