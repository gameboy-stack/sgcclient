// import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Home from './Home';
import ListofReports from './ListofReports';
import { useEffect,useState } from 'react';
import { Navigate } from 'react-router-dom';
const {apiclient} = require('../../api/api');



// import SearchBar from './SearchBar';

// axios.defaults.baseURL ='http://127.0.0.1:8080/';
// axios.defaults.withCredentials = true;

const DashboardContent = () => {
  const [dataset, setDataSet] = useState([]);
  const [likedarray,setLikedarray] = useState([]);
  const [grievanceType, setGrievanceType] = useState("");
  const [status, setStatus] = useState("");
  const [searchInputData, setSearchInputData] = useState("");

  useEffect(() => {
    if(grievanceType || status){
        if(grievanceType && !status){

          apiclient.get(`/student/dashboard?gtype=${grievanceType}&gstatus=`)
          .then((res) => {
            setLikedarray(res.data.la);
            setDataSet(res.data.array);
          })
          .catch(errorres => console.log(errorres.response))
        }
        else if(status && !grievanceType){
          
          apiclient.get(`/student/dashboard?gtype=&gstatus=${status}`)
          .then((res) => {
            setLikedarray(res.data.la);
            setDataSet(res.data.array);
          })
          .catch(errorres => console.log(errorres.response))
          
        }
        else{
          apiclient.get(`/student/dashboard?gtype=${grievanceType}&gstatus=${status}`)
          .then((res) => {
            setLikedarray(res.data.la);
            setDataSet(res.data.array);
          })
          .catch(errorres => console.log(errorres.response))

        }
    }
    else{
      apiclient.get(`/student/dashboard`)
      .then((res) => {
            setLikedarray(res.data.la);
            setDataSet(res.data.array);
      })
      .catch(errorres => console.log(errorres.response))
    }

  },[grievanceType,status]);

    return (
      <>
    
  <Box>
    <Home  Mycomponent={<ListofReports data={dataset} liked={likedarray} searchInput={searchInputData} />} setGrievanceType={setGrievanceType} setStatus={setStatus} setSearchInpData={setSearchInputData} isSearchBar={true} />
    </Box>
    </>
    )
};



const Dashboard = () => {

  const isauth = sessionStorage.getItem("authenticated");
  if(isauth === "true"){
    return (
      <DashboardContent />
    )
  }
else{
  return  (<Navigate to="/" />);
}
};


export default Dashboard;
