// React
import React from 'react';
import ReactDOM from 'react-dom';
// Bootstrap v4.5.2
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';
// Font Awesome v5.15
import '@fortawesome/fontawesome-free/css/all.css';
// Global Styles
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import './global.css';
// Provider Imports
import { Provider } from 'react-redux';
import { ConfigureStoreForForms } from './redux/configureStore';
// Context Providers
import { AllContentProvider } from './contexts';
// Components
import App from './App';

// Using Redux Store to manage React-Redux-Forms
const reduxFormsStore = ConfigureStoreForForms();

ReactDOM.render(
	<AllContentProvider>
		<Provider store={reduxFormsStore}>
			<App />
		</Provider>
	</AllContentProvider>,
	document.getElementById('root')
);
