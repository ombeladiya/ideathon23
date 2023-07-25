import React from 'react'
import sch from "./shedule.png";
import sc from "./schedul.jpg";
function Schedule() {
  return (
    <div style={{minHeight:"65vh"}}>
      <center>
        <div>
          <img src={sch} alt="schedule" />
          <img src={sc} alt="schedule" />
        </div>
      </center> 
    </div>
  )
}

export default Schedule
