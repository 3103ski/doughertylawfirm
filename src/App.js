// React
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// Components
import { Navbar } from './components';
// Pages
import {
	Home,
	CasesWeHandle,
	AboutUsPage,
	AdamBioPage,
	AmnesiaPage,
	ConcussionsPage,
	ContactUsPage,
	CrashesNotAccidentsPage,
	GcBioPage,
	LossOfConsciousnessPage,
	MildTraumaticBrainInjuryPage,
	MotorVehicleCrashPage,
	OutsideAttorneyConsultsPage,
	PremiseLiabilityPage,
	SkullFracturesPage,
	SportsRelatedInjuryPage,
	TraumaticBrainInjuryPage,
	TruckingPage,
	WrongfulDeathPage,
} from './pages';
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
				<Switch>
					<Route exact path={ROUTES.ABOUT_US} component={AboutUsPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.ADAM_BIO} component={AdamBioPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.AMNESIA} component={AmnesiaPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.CONCUSSION} component={ConcussionsPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.CRASHES_NOT_ACCIDENTS} component={CrashesNotAccidentsPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.GIANCARLO_BIO} component={GcBioPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.LOSS_OF_CONSCIOUSNESS} component={LossOfConsciousnessPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.MILD_TRAUMATIC_BRAIN_INJURY} component={MildTraumaticBrainInjuryPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.MOTOR_VEHICLE_CRASH} component={MotorVehicleCrashPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.OUTSIDE_ATTORNEY_CONSULTS} component={OutsideAttorneyConsultsPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.PREMISE_LIABILITY} component={PremiseLiabilityPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.SKULL_FRACTURES} component={SkullFracturesPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.SPORTS_RELATED_INJURY} component={SportsRelatedInjuryPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.TRAUMATIC_BRAIN_INJURY} component={TraumaticBrainInjuryPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.TRUCKING} component={TruckingPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.WRONGFUL_DEATH} component={WrongfulDeathPage} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.CONTACT_US} component={ContactUsPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
