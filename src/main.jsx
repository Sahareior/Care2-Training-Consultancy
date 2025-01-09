// src/main.jsx
import * as React from "react";
import ReactGA from 'react-ga';
import * as ReactDOM from "react-dom/client";
import { HelmetProvider } from 'react-helmet-async';
import "./index.css";

import App from "./App";

// Initialize Google Analytics
ReactGA.initialize('G-RYPYJT11ZB'); // Replace with your Tracking ID
ReactGA.pageview(window.location.pathname + window.location.search);



// Render your application root with RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <HelmetProvider>
 <div className="md:px-10 mx-auto md:mr-3 bg-black overflow-hidden">
       <App />
      </div>
 </HelmetProvider>
  </React.StrictMode>
);

