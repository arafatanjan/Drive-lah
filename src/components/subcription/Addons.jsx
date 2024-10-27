import React, { useState } from "react";
import "./Addons.css";
import CardDetails from "./CardDetails";

const Addons = () => {
  const [addons, setAddons] = useState(false);

  const [showInsurance, setShowInsurance] = useState(false);

  const handleAddonChange = (event) => {
    const { name, checked } = event.target;
    // setAddons({
    //   ...addons,
    //   [name]: checked,
    // });
    setAddons(!addons);
  };

  const handleToggle = () => {
    setShowInsurance(!showInsurance);
    // setAddons(!addons);
  };

  return (
    <>
      <div className="addons-container">
        <h3>Select add-ons for your subscription</h3>
        <div className="addons-grid">
          <label className="addon-item">
            <span className="addon-label">BYO secondary GPS - $5/month</span>
            <input
              type="checkbox"
              name="gps"
              checked={addons.gps}
              onClick={handleAddonChange}
              className="custom-checkbox"
            />
          </label>

          <label className="addon-item">
            <span
              className="addon-label"
              // onClick={handleToggle}
            >
              {showInsurance ? (
                <>
                  Between trip insurance <small>(Coming soon)</small>
                </>
              ) : (
                <>BYO lockbox - $10/month</>
              )}
            </span>
            {/* <span className="addon-label">
            Between trip insurance <small>(Coming soon)</small>
          </span> */}
            <input
              type="checkbox"
              name="insurance"
              onClick={handleToggle}
              className="custom-checkbox"
            />
          </label>
        </div>
      </div>

      <div className="divider"></div>

      {addons && (
        <div className="card-content">
          <CardDetails />
        </div>
      )}
    </>
  );
};

export default Addons;
