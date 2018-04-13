import React from 'react';
import { render } from "react-dom";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import react router deps

import Router from "./components/Router";

render(<Router />, document.querySelector("#root"));
