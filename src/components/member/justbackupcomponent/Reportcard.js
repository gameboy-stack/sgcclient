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
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ReadMoreRoundedIcon from '@mui/icons-material/ReadMoreRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import Popover from '@mui/material/Popover';
import { apiclient } from '../../api/api';
import { useNavigate } from 'react-router-dom';




const Reportcard = (props) => {

  const navigate = useNavigate();
  
  const { reportData , isLiked, ismyrep } = props;
  
  const initialState = isLiked?isLiked:ismyrep;
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [likeButton, setLikeButton] = useState(initialState);   

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const likeFunction = async (repid) => {

    const temp = likeButton !== true;

    if(temp){//like
      await apiclient.post(`/student/dashboard/report/${repid}?flag=${likeButton}`);
      
      console.log("liked   " + repid );
      console.log(temp)
      }
      else{//dislike
        await apiclient.post(`/student/dashboard/report/${repid}?flag=${likeButton}`);
        console.log("disliked    " + repid );
        console.log(temp)

    }

  }

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const copyClipboard = () => {
    navigator.clipboard.writeText(reportData._id);
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
              <Typography sx={{ p: 1 }} >{reportData._id}</Typography>
            </Popover>
          </IconButton>
        }
        title={reportData.gtype}
        subheader={reportData.doi}
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent >
        <Typography variant="body2" color="text.secondary">
          {reportData.subj}
        </Typography>
      </CardContent>
      <CardActions >
        <IconButton aria-label="Like" onClick={() => {
          setLikeButton(!likeButton);
          likeFunction(reportData._id);
          }}>
          {likeButton ? (
            <FavoriteIcon sx={{ color: "#ed4956" }}  />
          ) : (
            <FavoriteIcon /> 
          )} 
        </IconButton>
        <IconButton aria-label="Share" onClick ={() => navigator.clipboard.writeText(`http://127.0.0.1:8080/dashboard/${reportData._id}`)}>
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="Read More">
          <ReadMoreRoundedIcon  onClick ={() => navigate(`/student/dashboard/${reportData._id}`)}/>
        </IconButton>

      </CardActions>
    </Card>
  );
}


export default Reportcard;
