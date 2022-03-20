import React from 'react';
// import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';

// import IconButton from '@mui/material/IconButton';

// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';

import Reportcard from './Reportcard';
import Grid from '@mui/material/Grid';

// const drawerWidth = 240;

const ListofReports = (props) => {

  const  { data ,liked ,isMyreport} =props;
  

  return (


    <Grid container spacing={3} direction="column"  justifyContent="center"  alignItems="center" >
      {
        data.map((report) => 
        {
          return (<Grid item key={String(report._id)} >
              
              {(
                isMyreport?
                <Reportcard reportData={report}  ismyrep={isMyreport} />
                :
                <Reportcard reportData={report} isLiked={liked.includes(report._id)} />
                  
              )}
          </Grid>)
          })
      }
    </Grid>



    )
};

export default ListofReports;
