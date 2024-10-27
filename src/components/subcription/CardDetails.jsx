import React from 'react';
import './CardDetails.css'; // Import CSS for styling

const CardDetails = () => {
  return (
    <div className="card-details-container">
      <h3>Add card details</h3>

      <div className="card-inputs">
        <div className="number-inputs">
        <i class="fa-solid fa-credit-card"></i>
        <input
          type="text"
          placeholder="1234 5678 1234 5678"
          // className="card-number-input"
        />
        
        </div>
        <div className="cvc-inputs">
        <input type="text" placeholder="MM/YY"  />
        <input type="text" placeholder="CVC"  />
        </div>
      </div>

      <p className="disclaimer">
        You will not be charged right now. Subscription will only start once
        your listing is published and live.
      </p>

      <p className="more-info">
        Learn more about the plans here -{' '}
        <a href="#" className="info-link">
          What is the right plan for me?
        </a>
      </p>

      <p className="clarifications">
        You will be able to switch between plans easily later as well. Speak to
        our host success team if you need any clarifications.
      </p>
      
    </div>
  );
};

export default CardDetails;
