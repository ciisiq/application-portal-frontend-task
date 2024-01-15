import React from 'react';
import './index.css';
import App from './app/App';
import { createRoot } from 'react-dom/client';

import './assets/css/colors.css';
import './assets/css/fonts.css';

const rootContainer = document.getElementById('root');
const root = createRoot(rootContainer);
root.render(<App />);
