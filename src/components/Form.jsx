import React from "react";
import Calendar from "./Calendar";

export default function Form() {
  return (
    <div style={{maxWidth:"400px"}} className="card p-4">
      <form>
      <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Нэр"
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Утасний дугаар"
          />
        </div>
        <div className="mb-3">
        <Calendar/>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
