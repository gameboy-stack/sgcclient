import React from 'react';
import {  ListItem,ListItemText, ListItemIcon } from '@mui/material';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { useNavigate } from 'react-router-dom';
const ResponseIcon = () => {
  const navigate = useNavigate();
  return (
    <>
          <ListItem button onClick={() => navigate('/student/response')} key = "Reponse">
              <ListItemIcon >
                  <SummarizeIcon  />
              </ListItemIcon>
              <ListItemText primary="Response"/> 
          </ListItem>    
    </>
 
    );
};

export default ResponseIcon;
