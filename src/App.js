// React
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// Components
import { Navbar } from './components';
// Pages
import { Home, CasesWeHandle } from './pages';
// Constants
import * as ROUTES from './constants/routes';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path={ROUTES.HOME} component={Home} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.CASES_WE_HANDLE} component={CasesWeHandle} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
