
import React from 'react';
// ✅ now importing from react-dom/client
import ReactDOM from 'react-dom/client';

import './index.css'

import App from './App';

// 👇️ IMPORTANT: make sure to specify correct ID
// must be the ID of the div element in your index.html file
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<App />);