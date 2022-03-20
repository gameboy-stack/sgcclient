import React, { useEffect, useState } from 'react';
import { apiclient } from '../../api/api';
import Home from './Home';
import ListofReports from './ListofReports';
// import { Toolbar } from '@mui/material';


const MyReports = () => {

  const [reportData,setReportData] = useState([]);
  const [likedarray,setLikedarray] = useState([]);

  useEffect(() => {
    apiclient.get(`/student/myreport`)
    .then((res) => {
          setReportData(res.data.array);
          console.log(res.data.array)
          setLikedarray(res.data.la);
          console.log(res.data.la)
    })
    .catch(errorres => console.log(errorres.response))

  },[])

  return (
      // <Home Mycomponent = {<ListofReports data={reportData} />} isSearchBar={true} isReport={true} />
      <Home Mycomponent = {<ListofReports data={reportData} liked={likedarray} isMyreport={true} />} isSearchBar={false} isReport={true} />
      
    );
};

export default MyReports;
