import React, { useState } from "react";
import "./PlanOption.css";

// PlanOption component to handle the subscription plans
const PlanOption = ({ title, description, price, selected, onClick }) => {
  return (
    <div className="Plan-Container">
      <div
        className={`plan-option ${selected ? "selected" : ""}`}
        onClick={onClick}
      >
        <h3>{title}</h3>
        <ul>
          {description.map((item, index) => (
            <li key={index} className="icon">
              {item.icon}
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <div className="price">
          {price === "Free" ? (
            price
          ) : (
            <>
              {`$${price}`}
              <span style={{ fontWeight: "normal" }}>/month</span>
            </>
          )}
        </div>
      </div>
      {/* <div className="divider"></div> */}
    </div>
  );
};

export default PlanOption;
