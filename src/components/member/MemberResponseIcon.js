import React from 'react';
import { ListItem,ListItemText, ListItemIcon } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
const MemberResponseIcon = () => {
    const navigate = useNavigate();
  return (
    <>
          <ListItem button onClick={() => navigate('/member/reponse')} key = "Response Form">
              <ListItemIcon >
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Response Form"/> 
          </ListItem>    
    </>
    );
};

export default MemberResponseIcon;
