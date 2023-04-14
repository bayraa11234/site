import React from "react";
import { useState } from "react";
import { Calendar } from 'primereact/calendar';
import "primereact/resources/themes/lara-light-indigo/theme.css";   
import "primereact/resources/primereact.min.css"; 
import "primeicons/primeicons.css";  
import axios from "axios";


export default function Form() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [datetime24h, setDateTime24h] = useState(null);
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        name: inputName,
        email: inputEmail,
        phone: inputNumber,
        dateTime: datetime24h
      };
      const response = await axios.post('http://localhost:3001/user', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleChangeName = (event) => {
    setInputName(event.target.value);
  }
  const handleChangeEmail = (event) => {
    setInputEmail(event.target.value);
  }
  const handleChangeNumber = (event) => {
    setInputNumber(event.target.value);
  }
  const handleChangeTime = (event) => {
    setDateTime24h(event.target.value);
  }
  
  return (
    <div style={{ width: "400px" }} className="card p-4">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Нэр"
            onChange={handleChangeName}
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Email"
            onChange={handleChangeEmail}

          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Утасны дугаар"
            onChange={handleChangeNumber}

          />
        </div>
        <div className="mb-3">
        <Calendar id="calendar-24h" onChange={handleChangeTime} showTime hourFormat="24" placeholder="calendar" style={{width:"100%"}}/>
        </div>
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: "rgb(37, 189, 189)", width: "100%" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
