import React, { useState } from 'react';
import './Device.css'
import DeviceSegment from '../../components/device/DeviceSegment';

const devices = [
    {
        deviceNumber: 1,
        deviceType: 'Primary GPS'
    },
    {
        deviceNumber: 2,
        deviceType: 'Secondary GPS'
    },
    {
        deviceNumber: 3,
        deviceType: 'Drive mate Go'
    },
    {
        deviceNumber: 4,
        deviceType: 'Lockbox'
    },
]


const Device = () => {
    return (
        <div className='device-container'>

              <h2>Device Management</h2>
              <p>Add details of the device, if any already installed in your car. If none, then continue to next step</p>
              <div className="divider"></div>
              
              <div>
          {devices.map((device) => (
             <DeviceSegment
             key={device.deviceNumber}
             deviceNumber={device.deviceNumber}
             deviceType={device.deviceType}
           />
          ))}
        </div>
              
        </div>
    );
};

export default Device;