// import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Home from './Home';
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import  Blog  from './Blog';

const {apiclient} = require('../../api/api');




const SinglereportContent = () => {
    const [data , setData] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        
        apiclient.get(`/student/dashboard/${id}`)
        .then((res) => {
            setData(res.data.arrayitem);
            console.log( " req res " + res.data.arrayitem);
        })
        .catch(errorres => console.log(errorres.response))

    },[id]);

        return (
            <>
    
    <Box>
        <Home  Mycomponent={<Blog reportData={data} isReport={true} />} isReport={true} isSearchBar={false} />
    </Box>
    </>
    )

};

const Singlereport = () => {
    
  const isauth = sessionStorage.getItem("authenticated");
  if(isauth === "true"){
    return (<SinglereportContent />)
}
else{
  return  (<Navigate to="/" />);
}
};

export default Singlereport;
