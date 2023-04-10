import React from 'react';
import "../slider/slide.css";
import $ from 'jquery';

function handler(e) {
  var target = $(event.target);
  if (target.is('.box')) {
    target
      .addClass('active')
      .siblings('.box')
      .removeClass('active');
  }
}

$(document).ready(function () {
  $('.box').click(handler).find('.box').removeClass('.active');
});

export default function Slider() {
  return (
    <>
      <div className="section">
        <div class="box">
          <h2>summer</h2>
          <div class="content">
            <h3>welcome to the Alps.</h3>
            <hr />
            <p>
              lorem ipsim dolor sor amet consectetur, adipisicing elit Solute sunt minima ar axpentida asperiesed cumque i[sam debits Est ea in sapindei ec cumque siaissdion osio discta oud provident incidunt
            </p>
            <br />
            <p>lorem isum dolor sit amet consectetur adsiping elit . Quisquam eventiet porro provident solor wues earun</p>
          </div>
        </div>
        <div class="box">
          <h2>winter</h2>
          <div class="content">
            <h3>welcome to the Alps.</h3>
            <hr />
            <p>
              lorem ipsim dolor sor amet consectetur, adipisicing elit Solute sunt minima ar axpentida asperiesed cumque isam debits Est ea in sapindei ec cumque siaissdion osio discta oud provident incidunt
            </p>
            <br />
            <p>lorem isum dolor sit amet consectetur adsiping elit . Quisquam eventiet porro provident solor wues earun</p>
          </div>
        </div>
        <div class="box active">
          <h2>Spring</h2>
          <div class="content">
            <h3>welcome to the Alps.</h3>
            <hr />
            <p>
              lorem ipsim dolor sor amet consectetur, adipisicing elit Solute sunt minima ar axpentida asperiesed cumque isam debits Est ea in sapindei ec cumque siaissdion osio discta oud provident incidunt
            </p>
            <div class="img">
              <img src="https://via.placeholder.com/400x200" alt="" />
            </div>
            <p>lorem isum dolor sit amet consectetur adsiping elit . Quisquam eventiet porro provident solor wues earun</p>
          </div>
        </div>
      </div>
    </>
  )
}
