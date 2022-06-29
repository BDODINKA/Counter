import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {State} from "./state/state";





ReactDOM.render(
    <App  appState = {State}/>,
    document.getElementById('root')
);


