import React from "react";

export default function DealCounter() {
  return (
    <div id="dealend" className="dealend-timer max-[767px]:mt-[15px]">
      <div className="dealend-timer">
        <div className="time-block">
          <div className="time">92</div>
          <span className="day">Days</span>
        </div>
        <div className="time-block">
          <div className="time">15</div>
          <span className="dots">:</span>
        </div>
        <div className="time-block">
          <div className="time">24</div>
          <span className="dots">:</span>
        </div>
        <div className="time-block">
          <div className="time">47</div>
          <span className="dots" />
        </div>
      </div>
    </div>
  );
}
