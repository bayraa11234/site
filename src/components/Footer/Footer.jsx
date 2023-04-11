import React from "react";
import "../../styles/footerIcon.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container d-flex justify-content-between align-items-center">
        <ul className="footer-ul gap-5">
          <li>bidnii tuhai</li>
          <li>emchilgee uilchilgee</li>
          <li>uil ajillagaa</li>
          <li>zovlogoo medeelel</li>
          <li>holboo barih</li>
        </ul>
        <div className="icons">
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
