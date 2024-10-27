import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import './Dashboard.css';
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const sections = [
    { name: 'Location', completed: true },
    { name: 'About', completed: true },
    { name: 'Features', completed: true },
    { name: 'Rules', completed: true },
    { name: 'Pricing', completed: true },
    { name: 'Promotion', completed: true },
    { name: 'Pictures', completed: true },
    { name: 'Insurance', completed: true },
    { name: 'Subscription', completed: true },
    { name: 'Device', completed: false },
    { name: 'Easy Access', completed: false }
  ];

const Dashboard = () => {
    const [selectedSection, setSelectedSection] = useState('Subscription');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate= useNavigate();


  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSectionClick = (section) => {
    setSelectedSection(section.name);
    console.log(selectedSection)
    if (section.name === 'Device') {
      navigate('/devicemanagement'); 
    }
    else{navigate('/')}
  };

  const handleDropdownChange = (event) => {
    const selectedName = event.target.value;
    const section = sections.find((sec) => sec.name === selectedName);
    if (section) {
      handleSectionClick(section);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
      <ul>
        {sections.map((section, index) => (
          <li
          key={index}
          className={`sidebar-item ${selectedSection === section.name ? 'active' : ''} ${!section.completed ? 'sidebar-item-disabled' : ''}`}
          onClick={() =>  handleSectionClick(section)}
        >
          {section.name}
          {section.completed && selectedSection !== section.name && <span className="checkmark"><i className="fa-solid fa-circle-check"></i></span>}
        </li>
        ))}
      </ul>
    </div>
    

{/* <div className="dropdown-container">
      <select className="dropdown-select">
        Device
      </select>
      </div> */}


        {/* Dropdown for mobile screens */}
        <div className="sidebar-dropdown-container">
          <select
            className="dropdown-select"
            value={selectedSection}
            onChange={handleDropdownChange}
          >
            {sections.map((section, index) => (
              <option
                key={index}
                value={section.name}
                disabled={!section.completed}
              >
                {section.name}
              </option>
            ))}
          </select>
        </div>

      {/* Main Content */}
      <div className="outlet-content">
        <Outlet />
      </div>
    </div>

    {/* Footer */}
    <Footer handleSectionClick={handleSectionClick}/>
    </>
  );
};

export default Dashboard;


{/* {selectedSection === 'Device' && (
            <div className="selected-message">
              <i className="fa-solid fa-circle-check"></i> Device is selected
            </div>
          )} */}
      {/* Hamburger Menu */}
      {/* <div className="bg-gray-800 text-white md:hidden flex justify-between items-center p-4">
        <div className="text-lg font-bold">Menu</div>
         <button onClick={toggleSidebar} className="text-2xl">
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button> 
      </div> */}