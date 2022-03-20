import React from 'react';
import {  ListItem,ListItemText, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';



const DashboardIconMenu = () => {
    const navigate = useNavigate();
  return (
    <>
          <ListItem button onClick={() => navigate('/member/dashboard')} key = "dashboard">
              <ListItemIcon >
                  <DashboardIcon  />
              </ListItemIcon>
              <ListItemText primary="Dashboard"/> 
          </ListItem>    
    </>
    );
};

export default DashboardIconMenu;
