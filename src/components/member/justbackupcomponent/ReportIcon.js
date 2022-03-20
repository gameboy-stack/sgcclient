import React from 'react';
import { ListItem,ListItemText, ListItemIcon } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';
const ReportIcon = () => {
    const navigate = useNavigate();
  return (
    <>
          <ListItem button onClick={() => navigate('/student/report')} key = "Report">
              <ListItemIcon >
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="Report"/> 
          </ListItem>    
    </>
    );
};

export default ReportIcon;
