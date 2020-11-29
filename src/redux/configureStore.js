// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { ContactInitial } from './reducers';

// Form reducers for initial states

// Middleware
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

export const ConfigureStoreForForms = () => {
	const store = createStore(
		combineReducers({
			...createForms({
				contactForm: ContactInitial,
			}),
		}),
		applyMiddleware(thunk)
	);
	return store;
};
