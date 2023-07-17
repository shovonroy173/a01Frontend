import DoneIcon from "@mui/icons-material/Done";
import React from "react";

const Result = () => {
  return (
    <div className="result_main">
      <h2 className="text">Thank You!</h2>
      <div className="secLine">
        <DoneIcon style={{color:"green"}}/>
        File Successfully Updated!
      </div>
      Your records will be processed shorty.
      Refresh for Next Upload..
    </div>
  );
};

export default Result;
