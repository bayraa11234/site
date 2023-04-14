import React from "react";
import { useState } from "react";
import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import axios from "axios";

export default function Form() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("huselt:", user);
    // const u = { ...user };
    axios
      .post("http://localhost:3001/user", { user: user })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div style={{ width: "400px" }} className="card p-4">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user.name}
            placeholder="Нэр"
            name="name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail2"
            aria-describedby="emailHelp"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Утасны дугаар"
            name="number"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-3">
          <Calendar
            id="calendar-24h"
            onChange={(e) => handleChange(e)}
            name="date"
            showTime
            hourFormat="24"
            placeholder="calendar"
            style={{ width: "100%" }}
          />
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
