import React, { useState } from "react";
import "./DeviceSegment.css";

const DeviceSegment = ({ deviceNumber, deviceType }) => {
  const [isBringingOwnDevice, setIsBringingOwnDevice] = useState(false);

  const handleToggle = () => {
    setIsBringingOwnDevice(!isBringingOwnDevice);
  };

  return (
    <>
    <div className="device-form">
      <h3>Device {deviceNumber}</h3>
      <div className="device-row">
        <div className="device-input">
          <label htmlFor={`device-type-${deviceNumber}`}>Device type</label>
          <input
            type="text"
            id={`device-type-${deviceNumber}`}
            value={deviceType}
            readOnly
          />
        </div>

        <div className="device-toggle">
          
          <div className="toggle-container">
          <label>Bringing your own device?</label>
            <div
              className={`toggle-switch ${isBringingOwnDevice ? "on" : ""}`}
              onClick={handleToggle}
            >
              <div className="toggle-knob"></div>
            </div>
          </div>
          <span className="toggle-label">
              Toggle this on if you're bringing your own device. Leave it off if
              Drive mate is to provide the device.
            </span>
        </div>
      </div>

      {isBringingOwnDevice ? (
        <div className="device-row">
          {/* Serial number */}
          <div className="device-input">
            <label htmlFor={`serial-number-${deviceNumber}`}>
              Serial number
            </label>
            <input
              type="text"
              id={`serial-number-${deviceNumber}`}
              placeholder="Enter the serial number of the device"
            />
          </div>

          {/* Upload image */}
          <div className="upload-container">
            <label>Upload an image of the device</label>
            <div className="upload-box">
              <span>Click to upload</span>
            </div>
          </div>
        </div>
      ) : null}
        
</div>
    <div className="divider"></div>
    </>
  );
};

export default DeviceSegment;
