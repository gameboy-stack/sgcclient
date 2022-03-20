// import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MemberHome from './MemberHome';
import MemberListOfReports from './MemberListOfReports';
import { useEffect,useState } from 'react';
import { Navigate } from 'react-router-dom';
const {apiclient} = require('../../api/api');

const DashboardContent = () => {
  const [dataset, setDataSet] = useState([]);
  const [reportLike,setReportLike] = useState({});
  const [grievanceType, setGrievanceType] = useState("");
  const [status, setStatus] = useState("");
  const [searchInputData, setSearchInputData] = useState("");
  const [priorityData, setPriorityData] = useState("");

  useEffect(() => {
    if(grievanceType || status){
        if(grievanceType && !status){

          apiclient.get(`/member/dashboard?gtype=${grievanceType}&gstatus=`)
          .then((res) => {
            setReportLike(res.data.replikeobj);
            setDataSet(res.data.array);
          })
          .catch(errorres => console.log(errorres.response))
        }
        else if(status && !grievanceType){
          
          apiclient.get(`/member/dashboard?gtype=&gstatus=${status}`)
          .then((res) => {
            setReportLike(res.data.replikeobj);
            setDataSet(res.data.array);
          })
          .catch(errorres => console.log(errorres.response))
          
        }
        else{
          apiclient.get(`/member/dashboard?gtype=${grievanceType}&gstatus=${status}`)
          .then((res) => {
            setReportLike(res.data.replikeobj);
            setDataSet(res.data.array);
          })
          .catch(errorres => console.log(errorres.response))

        }
    }
    else{
      apiclient.get(`/member/dashboard`)
      .then((res) => {
            setReportLike(res.data.replikeobj);
            setDataSet(res.data.array);
      })
      .catch(errorres => console.log(errorres.response))
    }
  },[grievanceType,status]);

    return (
      <>
    
  <Box>
    <MemberHome  Mycomponent={<MemberListOfReports data={dataset} reportLike={reportLike} searchInput={searchInputData} prio={priorityData} />} setGrievanceType={setGrievanceType} setStatus={setStatus} setSearchInpData={setSearchInputData} setPrio={setPriorityData} isSearchBar={true} />
    </Box>
    </>
    )
};



const MemberDashboard = () => {

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


export default MemberDashboard;
