import React from 'react';
import {  ListItem,ListItemText, ListItemIcon } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
const MyreportIcon = () => {
    const navigate = useNavigate();
  return (
    <>
          <ListItem button onClick={() => navigate('/student/myreport')} key = "My Report">
              <ListItemIcon >
                  <ArticleIcon  />
              </ListItemIcon>
              <ListItemText primary="My Report"/> 
          </ListItem>    
    </>
    );
};

export default MyreportIcon;
