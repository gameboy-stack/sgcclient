// import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import Home from './Home';
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import  Blog  from './Blog';

const {apiclient} = require('../../api/api');




const SingleresponseContent = () => {

    const [data,setData] = useState({});
    const { id } = useParams();

    useEffect(() => {

            apiclient.get(`/student/response/${id}`)
            .then((res) => {

                setData(res.data.array);
                console.log(res.data.array);
            })
            .catch(errorres => console.log(errorres.response))

        },[id]);

        return (
            <>
    
    <Box>
        <Home  Mycomponent={<Blog reportData={data} isReport={false} />} isReport={true} isSearchBar={false} />
    </Box>
    </>
    )

};

const Singleresponse = () => {
    
  const isauth = sessionStorage.getItem("authenticated");
  if(isauth === "true"){
      return (<SingleresponseContent />);
  }
else{
  return  (<Navigate to="/" />);
}
};

export default Singleresponse;
