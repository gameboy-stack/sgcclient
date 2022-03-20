import EqualizerIcon from '@mui/icons-material/Equalizer';
import React from 'react';
import {  ListItem,ListItemText, ListItemIcon } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const MemberAnalyticsIcon = () => {
    const navigate = useNavigate();
    
    return (
    <>
          <ListItem button onClick={() => navigate('/member/reports')} key = "Reponse">
              <ListItemIcon >
                  <EqualizerIcon  />
              </ListItemIcon>
              <ListItemText primary="Report Analytics"/> 
          </ListItem>    
    </>
 
    );
}

export default MemberAnalyticsIcon