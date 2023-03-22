import React from "react";
import { CiLocationOn, CiAlarmOn, CiPhone, CiMail } from "react-icons/ci";

export default function LittleNavbar() {
  return (
    <div style={{ backgroundColor: "rgba(0, 161, 153,0.2)",fontSize:"0.7em" }}>
      <div className="container" style={{display: "flex",justifyContent:"space-between"}}>
        <div className="col-3 " style={{display:"flex",alignItems:"center"}}>
          <CiLocationOn fontSize="7em" color="#00a199" />
          <p style={{margin:"0 auto"}}>Баянгол дүүрэг 12-р хороо 4-р хороолол Хасбаатарын гудамж 5-3 тоот </p>
        </div>
        <div className="col-3 " style={{display:"flex",alignItems:"center"}}>
          <CiMail fontSize={50} color="#00a199" />
          <p style={{margin:" auto"}}>bbDental@.gmail.com</p>
        </div>
        <div className="col-3 " style={{display:"flex",alignItems:"center"}}>
          <CiPhone fontSize={50} color="#00a199" />
          <p style={{margin:" auto"}}>(+976) 88571071, 88105971</p>
        </div>
        <div className="col-3 " style={{display:"flex",alignItems:"center"}}>
          <CiAlarmOn fontSize={50} color="#00a199" />
          <p style={{margin:"auto"}}>Цагийн хуваарь<br/>Даваа-Ням: 10:00 - 18:00</p>
        </div>
      </div>
    </div>
  );
}
