import React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'Black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));






const MemberSearchBar = (props) => {

  const { setGrievanceType , setStatus , setSIData , setPD} = props;

  const[gt,setGt] = useState("");
  const[st,setSta] = useState("");
  const[pr,setP] = useState("");

  const changepriority = (val) => {
    setPD(val);
    setP(val);
  }
  const changegtype = (val) => {
    setGrievanceType(val);
      setGt(val);
  }
  const changesttype = (val) => {
    setStatus(val);
      setSta(val);
  }
  return (
    <AppBar style={{ background: "transparent" ,overflow:"" , boxShadow: "none"}} position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Box sx={{ mr: 7 ,ml:7}}>
                <FormControl variant="filled"  sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Grievance Type</InputLabel>
                    <Select
                    style={{height: "50px",width:"250px"}}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={gt}
                    label="Grievance Type"
                    onChange={(e) => changegtype(e.target.value)}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Academic Problem"}>Academic Problem</MenuItem>
                    <MenuItem value={"Financial Problem"}>Financial Problem</MenuItem>
                    <MenuItem value={"Library Problem"}>Library Problem</MenuItem>
                    <MenuItem value={"Accommodation Problem"}>Accommodation Problem</MenuItem>
                    <MenuItem value={"Campus Problem"}>Campus Problem</MenuItem>
                    <MenuItem value={"Other Problems"}>Other Problems</MenuItem>
                    </Select>
                </FormControl>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
                <FormControl variant="filled"  sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
                    <Select
                    style={{height: "50px",width:"250px"}}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={st}
                    label="Status"
                    onChange={(e) => changesttype(e.target.value)}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Completed"}>Completed</MenuItem>
                    <MenuItem value={"Processing"}>Processing</MenuItem>
                    <MenuItem value={"Pending"}>Pending</MenuItem>
                    </Select>
                </FormControl>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
                <FormControl variant="filled"  sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Priority</InputLabel>
                    <Select
                    style={{height: "50px",width:"250px"}}
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={pr}
                    label="Status"
                    onChange={(e) => changepriority(e.target.value)}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Higher Priority"}>Higher Priority</MenuItem>
                    <MenuItem value={"Lower Priority"}>Lower Priority</MenuItem>
                    </Select>
                </FormControl>
          </Box>
          <Box>
                <AppBar style={{ background: 'transparent' }} position="static">
                        <Search>
                            <SearchIconWrapper >
                                <SearchIcon sx={{ color: "#525252" }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                            style={{height: "40px",maxWidth:"550px",boxShadow:"none"}}
                            placeholder="Search…"
                            onInput={(e) => {setSIData(e.target.value)}}
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                </AppBar>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MemberSearchBar;
