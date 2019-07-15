import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link } from 'react-router-dom'
import './index.css';
import App from './App';

const app = (
    <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/description">Description</Link>
        <App />
    </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));

