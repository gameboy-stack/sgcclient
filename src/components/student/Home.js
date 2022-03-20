import React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { ListItem , ListItemText, ListItemIcon } from '@mui/material';
import  ReportIcon  from './ReportIcon';
import  ResponseIcon  from './ResponseIcon';
import MyreportIcon from './MyreportIcon';
import DashboardIconMenu from './DashboardIconMenu';
import SidePanelMenu from './SidePanelMenu';
import { Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchBar from './SearchBar';
import { apiclient } from '../../api/api';

// import SearchBar from './SearchBar';

const drawerWidth = 240;

const Home = (props) => {

  const navigate = useNavigate();
  
  const { Mycomponent , isSearchBar , isReport ,setStatus , setGrievanceType ,setSearchInpData } = props;

  const list = [<DashboardIconMenu />,<ReportIcon />,<MyreportIcon /> , <ResponseIcon />];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
        <SidePanelMenu Mylist={list} />
      <Divider />
      <ListItem button onClick={() => {
          apiclient.get(`/student/logout`)
          .then((res) => {
            console.log(res.data);
            console.log("logout funstion called ");
          })
          .catch(errorres => console.log(errorres.response))
          sessionStorage.setItem("authenticated", "false");
          // sessionStorage.setItem("userType", "none");
          sessionStorage.removeItem('userType');
          navigate("/");
      }}
      key = "Logout">
              <ListItemIcon >
                  <LogoutIcon  />
              </ListItemIcon>
              <ListItemText primary="Logout"/> 
      </ListItem>   
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Student
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
    component="main"
    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >

  { isSearchBar ? <Box sx={{mb:"30px"}}>
  <Toolbar />
        <SearchBar setGrievanceType={setGrievanceType} setStatus={setStatus} setSIData={setSearchInpData} />
      </Box> : isReport ? <Toolbar /> : <></> }

      {Mycomponent}
      </Box>
    </Box>

  );
}


export default Home;
