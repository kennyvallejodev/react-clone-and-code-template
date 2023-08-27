import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { RoutesHandler } from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode children={<RoutesHandler />} />,
);
