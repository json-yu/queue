import React from 'react';

const WaitTimesDisplay = (props) => {
    return ( 
        <div>
            <input type = "number" id = "addWaitTime" onChange = { () => addWaitTime(document.getElementById("addWaitTime").value)}></input>
        </div>
     );
}
 
export default WaitTimesDisplay;