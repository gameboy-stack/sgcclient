// import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import MemberHome from './MemberHome';
import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import  MemberBlog  from './MemberBlog';

const {apiclient} = require('../../api/api');




const SinglereportContent = () => {
    const [data , setData] = useState([]);
    const { id } = useParams();
    
    useEffect(() => {
        
        apiclient.get(`/member/dashboard/report/${id}`)
        .then((res) => {
            setData(res.data.array);
            console.log( " req res " + res.data.array);
        })
        .catch(errorres => console.log(errorres.response))

    },[id]);

        return (
            <>
    
    <Box>
        <MemberHome  Mycomponent={<MemberBlog reportData={data} />} isReport={true} isSearchBar={false} />
    </Box>
    </>
    )

};

const MemberSinglereport = () => {
    
  const isauth = sessionStorage.getItem("authenticated");
  if(isauth === "true"){
    return (<SinglereportContent />)
}
else{
  return  (<Navigate to="/" />);
}
};

export default MemberSinglereport;
