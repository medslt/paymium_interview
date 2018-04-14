import React from 'react';
import { render } from "react-dom";
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css' 


import Router from "./components/Router";

render(<Router />, document.querySelector("#root"));
