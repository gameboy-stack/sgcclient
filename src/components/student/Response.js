import React, { useEffect ,useState } from 'react';
import { Navigate } from 'react-router-dom';
import { apiclient } from '../../api/api';
import Home from './Home';

import ListofResponse from './ListofResponse';



const ResponseContent = () => {

  const [dataset, setDataSet] = useState([]);

  useEffect(() => {

    apiclient.get(`/student/response`)
    .then((res) => {
          setDataSet(res.data.array);
    })
    .catch(errorres => console.log(errorres.response))

  },[])

    return (
      <Home Mycomponent = { <ListofResponse data={dataset} /> } isSearchBar={false} isReport={true}  />
      );
};


const Response = () => {
  
  const isauth = sessionStorage.getItem("authenticated");
  if(isauth === "true"){
    return (<ResponseContent />);
}
else{
  return  (<Navigate to="/" />);
}
};


export default Response;
