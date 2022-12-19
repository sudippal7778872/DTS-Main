import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Error = () => {
  let navigate = useNavigate();
    
    return (
        <div className="text-center">
        <div className="text-danger font-weight-bold"><h1>Error</h1></div>
        An error occurred.<br/>
         Click here to return to the home page.<br/>
         <Button
                         type="button"
                         variant="contained"
                         color="primary"
                         onClick={()=>{navigate('/Home')}}
                     >
                     Home
                     </Button>
     </div>
    )
}

export default Error