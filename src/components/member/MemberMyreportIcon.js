import React from 'react';
import {  ListItem,ListItemText, ListItemIcon } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
const MemberMyreportIcon = () => {
    const navigate = useNavigate();
  return (
    <>
          <ListItem button onClick={() => navigate('/member/myresponse')} key = "My Response">
              <ListItemIcon >
                  <ArticleIcon  />
              </ListItemIcon>
              <ListItemText primary="My Response"/> 
          </ListItem>    
    </>
    );
};

export default MemberMyreportIcon;
