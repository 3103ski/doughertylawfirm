// React
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './util/ScrollToTop';
// Components
import { Navbar, Footer } from './components';
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
	const pageEnterAnimation = 'fadeIn';
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				<Navbar />
				<Switch>
					<Route exact path={ROUTES.HOME} render={() => <Home animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.CASES_WE_HANDLE} render={() => <CasesWeHandle animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.ABOUT_US} render={() => <AboutUsPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.ADAM_BIO} render={() => <AdamBioPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.AMNESIA} render={() => <AmnesiaPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.CONCUSSION} render={() => <ConcussionsPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.CRASHES_NOT_ACCIDENTS} render={() => <CrashesNotAccidentsPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.GIANCARLO_BIO} render={() => <GcBioPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.LOSS_OF_CONSCIOUSNESS} render={() => <LossOfConsciousnessPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.MILD_TRAUMATIC_BRAIN_INJURY} render={() => <MildTraumaticBrainInjuryPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.MOTOR_VEHICLE_CRASH} render={() => <MotorVehicleCrashPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.OUTSIDE_ATTORNEY_CONSULTS} render={() => <OutsideAttorneyConsultsPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.PREMISE_LIABILITY} render={() => <PremiseLiabilityPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.SKULL_FRACTURES} render={() => <SkullFracturesPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.SPORTS_RELATED_INJURY} render={() => <SportsRelatedInjuryPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.TRAUMATIC_BRAIN_INJURY} render={() => <TraumaticBrainInjuryPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.TRUCKING} render={() => <TruckingPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.WRONGFUL_DEATH} render={() => <WrongfulDeathPage animation={pageEnterAnimation} />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.CONTACT_US} render={() => <ContactUsPage animation={pageEnterAnimation} />} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
