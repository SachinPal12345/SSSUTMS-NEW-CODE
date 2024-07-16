import React from 'react';
import CI2SEM from "../SyllabusPDF/BENONCBSE/CI2sem.pdf";


function  Ci2sem() {
  return (
    <>
   
   
      <div style={{ background: "linear-gradient(to right, #A9F1DF , #FFBBBB)", padding: "4px" }}>
        <iframe
          src={CI2SEM}
          style={{
            width: '100%',
            height: '800px',
            marginTop: '1px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
          }}
          accept=".pdf"
        />
      </div>
    
    
    </>
  );
}

export default  Ci2sem;

