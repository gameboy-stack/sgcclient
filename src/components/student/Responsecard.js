import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red  } from '@mui/material/colors';
import { useState } from 'react';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import Popover from '@mui/material/Popover';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';




const Responsecard = (props) => {

  const navigate = useNavigate();
  
  const { reportData } = props;
  
  const [anchorEl, setAnchorEl] = useState(null);


  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  


  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const copyClipboard = () => {
    navigator.clipboard.writeText(reportData.fuid);
  }

  const open = Boolean(anchorEl);
  

  return (
    <Card sx={{ maxWidth: 500 ,minWidth:500}} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={copyClipboard}>
              <InfoRoundedIcon
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              >
              </InfoRoundedIcon>
            <Popover
              id="mouse-over-popover"
              sx={{
                pointerEvents: 'none',
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              onClose={handlePopoverClose}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }} >{reportData.fuid}</Typography>
            </Popover>
          </IconButton>
        }
        title={"sdjkh"}
        subheader={reportData.dor}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent >
        <Typography variant="body2" color="text.dark">
          {reportData.subj}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:"#455a64"}} onClick ={() => navigate(`/student/dashboard/response/${reportData.fuid}`)} >Read More</Button>
      </CardActions>
    </Card>
  );
}


export default Responsecard;
