import React from 'react';
import {  ListItem,ListItemText, ListItemIcon } from '@mui/material';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { useNavigate } from 'react-router-dom';
const MemberStatusIcon = () => {
  const navigate = useNavigate();
  return (
    <>
          <ListItem button onClick={() => navigate('/member/status')} key = "Status Form">
              <ListItemIcon >
                  <SummarizeIcon  />
              </ListItemIcon>
              <ListItemText primary="Status Form"/> 
          </ListItem>    
    </>
 
    );
};

export default MemberStatusIcon;
