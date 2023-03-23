import React from "react";
import Calendar from "./Calendar";

export default function Form() {
  return (
    <div style={{maxWidth:"400px"}}>
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
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Утасний дугаар"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <Calendar/>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
