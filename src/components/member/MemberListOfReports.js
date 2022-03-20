import React from 'react';
// import PropTypes from 'prop-types';

// import Box from '@mui/material/Box';

// import IconButton from '@mui/material/IconButton';

// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';

import MemberReportCard from './MemberReportCard';
import Grid from '@mui/material/Grid';

// const drawerWidth = 240;

const MemberListOfReports = (props) => {

  const  { data , searchInput , reportLike , prio} =props;
  
  var searchedData = data;

  if(!(searchInput?.trim() === "")){

    searchedData = data.filter((report) => {
      console.log(report.keywords)

        return ((report.keywords).includes(searchInput) || (report._id).includes(searchInput));
    })
  }
  else{
    searchedData = data;
  }
  if(prio === "Higher Priority"){
    searchedData = data.filter((report) => {

      return (report.predict) === "Higher Priority";
  })
  }
  else if(prio === "Lower Priority"){
    searchedData = data.filter((report) => {

      return (report.predict) !== "Higher Priority";
  })
  }
  else{
    searchedData = data;
  }

  return (


    <Grid container spacing={3} direction="column"  justifyContent="center"  alignItems="center" >
      {
        searchedData.map((report) => 
        {
          return (<Grid item key={String(report._id)} >

                <MemberReportCard reportData={report}  reportLikeData={reportLike} />
                  

          </Grid>)
          })
      }
    </Grid>
    )
};

export default MemberListOfReports;
