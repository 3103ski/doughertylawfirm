// React
import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './util/ScrollToTop';
// Components
import { Navbar, Footer } from './components';
// import './global.css';
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
	VideosPage,
} from './pages';
// Constants
import * as ROUTES from './constants/routes';

function App() {
	window.addEventListener('scroll', () => {
		if (window.pageYOffset > 300) {
			document.querySelector('.toTop').classList.add('show');
		} else {
			document.querySelector('.toTop').classList.remove('show');
		}
	});
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				<Navbar />
				<Switch>
					<Route exact path={ROUTES.HOME} render={() => <Home />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.CASES_WE_HANDLE} render={() => <CasesWeHandle />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.ABOUT_US} render={() => <AboutUsPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.ADAM_BIO} render={() => <AdamBioPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.AMNESIA} render={() => <AmnesiaPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.CONCUSSION} render={() => <ConcussionsPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.CRASHES_NOT_ACCIDENTS} render={() => <CrashesNotAccidentsPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.GIANCARLO_BIO} render={() => <GcBioPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.LOSS_OF_CONSCIOUSNESS} render={() => <LossOfConsciousnessPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.MILD_TRAUMATIC_BRAIN_INJURY} render={() => <MildTraumaticBrainInjuryPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.MOTOR_VEHICLE_CRASH} render={() => <MotorVehicleCrashPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.OUTSIDE_ATTORNEY_CONSULTS} render={() => <OutsideAttorneyConsultsPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.PREMISE_LIABILITY} render={() => <PremiseLiabilityPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.SKULL_FRACTURES} render={() => <SkullFracturesPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.SPORTS_RELATED_INJURY} render={() => <SportsRelatedInjuryPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.TRAUMATIC_BRAIN_INJURY} render={() => <TraumaticBrainInjuryPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.TRUCKING} render={() => <TruckingPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.WRONGFUL_DEATH} render={() => <WrongfulDeathPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.CONTACT_US} render={() => <ContactUsPage />} />
				</Switch>
				<Switch>
					<Route exact path={ROUTES.VIDEOS} render={() => <VideosPage />} />
				</Switch>
				<Footer />
			</Router>
			<i
				className='fas fa-arrow-up toTop'
				onClick={() =>
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: 'smooth',
					})
				}></i>
		</div>
	);
}

export default App;
