// import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Home from './Home';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  Blog  from './Blog';
const {apiclient} = require('../../api/api');




const Singlereport = () => {

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
        <Home  Mycomponent={<Blog reportData={data} />} isReport={true} isSearchBar={false} />
    </Box>
    </>
    )
};

export default Singlereport;
