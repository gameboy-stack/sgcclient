import React, { useEffect ,useState } from 'react';
import { apiclient } from '../../api/api';
import Home from './Home';
import ListofResponse from './ListofResponse';



const Response = () => {

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

export default Response;
