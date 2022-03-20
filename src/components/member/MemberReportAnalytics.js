
import { Box, grid } from '@mui/system';
import React, { useEffect, useState } from 'react';
import MemberHome from './MemberHome';
import Plot from 'react-plotly.js';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Grid } from '@mui/material';
const {apiclient} = require('../../api/api');




const AnalyticsDataView = () => {
    const [state, setState] = useState(true);
    const [data,setData] = useState([]);

    useEffect(() => {

        apiclient.get(`/member/reports`)
        .then((res) => {
            setData(res.data.array);
            console.log( res.data.array);
        })
        .catch(errorres => console.log(errorres.response))

    },[])

    const xarr = ["Other Problems","Campus Problem","Accommodation Problem","Library Problem","Financial Problem","Academic Problem"]
    xarr.sort();
    console.log(data)
    const counts = {};
    data.forEach((x) => { counts[x.gtype] = (counts[x.gtype] || 0) + 1; });
    const yarr = xarr.map(ele => {return counts[ele];})



    
    // console.log(yarr)

    console.log("function called analay")
    // const reportData = [{
    //         x:xarr,
    //         y:yarr
    //         type:"bar"
    // }];



    return (
        <>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
            <Grid item xs={3}>

            <FormControl component="fieldset" variant="standard">
                <FormGroup>
                    <FormControlLabel
                    control={
                        <Switch checked={state} onChange={() => setState(!state)} name={state ? "Pie Chart":"Bar Chart"} />
                    }
                    label={state ? "Pie Chart":"Bar Chart"}
                    />
                </FormGroup>
            </FormControl>
            </Grid>
        </Grid>
        {state ?
            (<Plot
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
            data={[{
                labels:xarr,
                values:yarr,
                textposition: 'inside',
                name: 'Grievance Reports',
                hoverinfo: 'label+percent+name',
                type: 'pie'
            },
            // {
                //     },
            ]}
            layout={{title:"IT Department Grievance Report"}}
            />):
        (<Plot
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}
        data={[{
            x: xarr,
            y: yarr,
            type: "bar",
        },
        // {
            //     },
        ]}
        layout={{title:"IT Department Grievance Report"}}
        />)
    }
        </> 
    
    )
}


const MemberReportAnalytics = () => {
    return (
        <Box>
        <MemberHome  Mycomponent={<AnalyticsDataView />} isReport={true} isSearchBar={false} />
    </Box>
      
  )
}

export default MemberReportAnalytics