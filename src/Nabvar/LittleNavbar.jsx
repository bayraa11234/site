import React from "react";
import { CiLocationOn, CiAlarmOn, CiPhone, CiMail } from "react-icons/ci";

export default function LittleNavbar() {
  return (
    <div style={{ backgroundColor: "rgba(0, 161, 153,0.2)", display: "flex" }}>
      <div>
        <CiLocationOn fontSize={50} color="#00a199" />
      </div>
      <div>
        <CiAlarmOn fontSize={50} color="#00a199" />
      </div>
      <div>
        <CiMail fontSize={50} color="#00a199" />
      </div>
      <div>
        <CiPhone fontSize={50} color="#00a199" />
      </div>
    </div>
  );
}
