
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-light-indigo/theme.css";   
import "primereact/resources/primereact.min.css"; 
import "primeicons/primeicons.css";  


export default function TimeDemo() {
    const [datetime24h, setDateTime24h] = useState(null);
    // const [time, setTime] = useState(null);

    return (
        <Calendar id="calendar-24h" value={datetime24h} onChange={(e) => setDateTime24h(e.value)} showTime hourFormat="24" placeholder="calendar" style={{width:"100%"}}/>
    )
}
          