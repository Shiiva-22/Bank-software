import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import CreateAccount from "./CreateAccount.jsx";

import Dashboard from "./dashboard";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import DebitAmount from "./DebitAmount.jsx";
import CreditAmount from "./CreditAmount.jsx";



let AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },
  {
    path:"/CreateAccount",
    element:<CreateAccount/>
  },
  {
    path:"/CreditAmount",
    element:<CreditAmount/>
  },
  {
    path:"/DebitAmount",
    element:<DebitAmount/>
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={AppRouter}>
<App/>
  </RouterProvider>
    
  
)
