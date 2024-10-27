import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Subscription from "../pages/SubcriptionPlan/Subscription";
import Device from "../pages/DeviceManagement/Device";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      children: [
        {
          path: "/",
          element: <Subscription />,
           
        },
        {
          path: "/devicemanagement",
          element: <Device/>
        },
      
      ],
    },
    
    
  ]);