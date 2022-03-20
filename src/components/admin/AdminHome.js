import React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { ListItem , ListItemText, ListItemIcon, List } from '@mui/material';
import { Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import { apiclient } from '../../api/api';
import ArticleIcon from '@mui/icons-material/Article';


// import SearchBar from './SearchBar';

const drawerWidth = 240;

const AdminHome = (props) => {

  const navigate = useNavigate();
  
  const { Mycomponent } = props;


  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button onClick={() => navigate('/admin/cop')} key = "Change Password">
              <ListItemIcon >
                  <ArticleIcon  />
              </ListItemIcon>
              <ListItemText primary="Change Password"/> 
          </ListItem>
        <ListItem button onClick={() => navigate('/admin/addgmail')} key = "Add Gmail">
              <ListItemIcon >
                  <ArticleIcon  />
              </ListItemIcon>
              <ListItemText primary="Add Gmail"/> 
          </ListItem>
        </List>
      <Divider />
      <ListItem button onClick={() => {
          apiclient.get(`/admin/logout`)
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
            Admin
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
 <Toolbar /> 

      {Mycomponent}
      </Box>
    </Box>


  );
}


export default AdminHome;
