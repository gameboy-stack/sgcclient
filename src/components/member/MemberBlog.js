import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MemberMain from './MemberMain';
// import { Toolbar } from '@mui/material';


const MemberBlog = (props) => {

  const {reportData } = props;
  console.log("blog " + reportData)


  return (
    <>
      <CssBaseline />
      <Container sx={{minWidth:"100%"}}>
        <main>
          <Grid  spacing={5} sx={{ mt: 3 }}>
            <MemberMain data={reportData} />
          </Grid>
        </main>
      </Container>
    </>

  )
}

export default MemberBlog;