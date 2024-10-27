
import React, { useState } from 'react';
import './Subscription.css'
import PlanOption from '../../components/subcription/PlanOption';
import Addons from '../../components/subcription/Addons';
// import CardDetails from '../../components/subcription/CardDetails';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLockKeyhole } from '@fortawesome/free-solid-svg-icons';

const plans = [
  {
    title: 'Just mates',
    description: [
      {
        icon: <i className="fas fa-map-marker-alt"></i>, 
        text: 'Bring your own GPS',
      },
      {
        icon: <i class="fa-solid fa-gauge-high"></i>,  
        text: 'Mileage reporting to be done by you',
      },
      {
        icon: <i class="fa-solid fa-lock"></i>, 
        text: 'In-person key handover to guests',
      },
    ],
    price: 'Free',
  },
  {
    title: 'Good mates',
    description: [
      {
        icon: <i className="fas fa-map-marker-alt"></i>,
        text: 'Primary GPS included',
      },
      {
        icon: <i class="fa-solid fa-gauge-high"></i>,
        text: 'Automated mileage calculations',
      },
      {
        icon: <i class="fa-solid fa-lock"></i>,
        text: 'In-person key handover to guests',
      },
    ],
    price: 10,
  },
  {
    title: 'Best mates',
    description: [
      {
        icon: <i className="fas fa-map-marker-alt"></i>,
        text: 'Keyless access technology',
      },
      {
        icon: <i class="fa-solid fa-gauge-high"></i>,
        text: 'Automated mileage calculations',
      },
      {
        icon: <i className="fas fa-lock"></i>,
        text: 'Remote handover to guests',
      },
    ],
    price: 30,
  },
];

const Subscription = () => {
    const [selectedPlan, setSelectedPlan] = useState('Good mates');
    const [addOn, setAddOn] = useState(false);
  
 
  
    const handlePlanSelect = (plan) => {
      setSelectedPlan(plan);
    };
  
    const handleAddOnToggle = () => {
      setAddOn(!addOn);
    };
  
    return (
      <div className="subscription-container">
        <h2>Subscription plan</h2>
        <p>Select the ideal subscription plan for your listing.</p>
        <div className="divider"></div>
        <p className='select-plan'>Select Your Plan</p>

        <div className="plans-grid">
          {plans.map((plan) => (
             <PlanOption
             key={plan.title}
             title={plan.title}
             description={plan.description}
             price={plan.price}
             selected={selectedPlan === plan.title}
             onClick={() => handlePlanSelect(plan.title)}
           />
          ))}
        </div>
  
       <Addons/>

        
      </div>
    );
  };

export default Subscription;