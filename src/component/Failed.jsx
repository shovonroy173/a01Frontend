import React from 'react'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
const Failed = () => {
  return (
    <div className='result_main'>
        <DisabledByDefaultIcon style={{color:"red"}}/>
        <h2 style={{color:"brown"}}>Only .xlsx or .xls file are allowed</h2>
       <h3>Refresh to Upload the Correct file again..</h3>
    </div>
  )
}

export default Failed