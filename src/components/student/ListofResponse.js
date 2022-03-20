import React from 'react';
// import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';

// import IconButton from '@mui/material/IconButton';

// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';

import Grid from '@mui/material/Grid';
import Responsecard from './Responsecard';

// const drawerWidth = 240;

const ListofResponse = (props) => {

  const  { data } =props;
  

  return (


    <Grid container spacing={3} direction="column"  justifyContent="center"  alignItems="center" >
      {
        data.map((report) => 
        {
          return (<Grid item key={String(report._id)} >
                      <Responsecard reportData={report}  />
                  
                   </Grid>)
          })
      }
    </Grid>



    )
};

export default ListofResponse;
