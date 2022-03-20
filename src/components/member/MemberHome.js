import React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { ListItem , ListItemText, ListItemIcon } from '@mui/material';
import  MemberResponseIcon  from './MemberResponseIcon';
import  MemberStatusIcon  from './MemberStatusIcon';
import DashboardIconMenu from './DashboardIconMenu';
import MemberSidePanelMenu from './MemberSidePanelMenu';
import { Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import MemberSearchBar from './MemberSearchBar';
import { apiclient } from '../../api/api';
import MemberAnalyticsIcon from './MemberAnalyticsIcon';

// import SearchBar from './SearchBar';

const drawerWidth = 240;

const MemberHome = (props) => {

  const navigate = useNavigate();
  
  const { Mycomponent , isSearchBar , isReport ,setStatus , setGrievanceType ,setSearchInpData ,setPrio} = props;

  const list = [<DashboardIconMenu />,<MemberStatusIcon /> , <MemberResponseIcon /> , <MemberAnalyticsIcon />];

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
        <MemberSidePanelMenu Mylist={list} />
      <Divider />
      <ListItem button onClick={() => {
          apiclient.get(`/member/logout`)
          .then((res) => {
            console.log(res.data);
            console.log("logout funstion called ");
          })
          .catch(errorres => console.log(errorres.response))
          sessionStorage.setItem("authenticated", "false");
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
            Member
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
        <MemberSearchBar setGrievanceType={setGrievanceType} setStatus={setStatus} setSIData={setSearchInpData} setPD={setPrio} />
      </Box> : isReport ? <Toolbar /> : <></> }
      
      
      {Mycomponent}
      </Box>
    </Box>

  );
}


export default MemberHome;
