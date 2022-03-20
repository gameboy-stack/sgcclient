import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Main from './Main';
// import { Toolbar } from '@mui/material';


const Blog = (props) => {

  const {reportData , isReport} = props;
  console.log("blog " + reportData)


  return (
    <>
      <CssBaseline />
      <Container sx={{minWidth:"100%"}}>
        <main>
          <Grid  spacing={5} sx={{ mt: 3 }}>
            <Main data={reportData} isRep={isReport} />
          </Grid>
        </main>
      </Container>
    </>

  )
}

export default Blog;