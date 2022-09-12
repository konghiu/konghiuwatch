import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from './Routing';
import store from './redux/store'
import './index.css'
import './css/customCSS.css'


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render (
     <Router>
          <Provider store={store}>
               <Routing />
          </Provider>
     </Router>
);

reportWebVitals();