import React from 'react';
import { List  } from '@mui/material';

const SidePanelMenu = ({Mylist}) => {
  return (
    <List>
    {Mylist.map((text,index) => (

          <div key={index}>
            {text}
          </div>

    ))}
  </List>
    );
};

export default SidePanelMenu;
