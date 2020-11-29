import React, { Component } from 'react';
import './nav.css';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
class MainNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeLink: 'home',
			showDrawerNav: false,
			subMenu: false,
		};
	}

	selectActiveLink(activeLink) {
		return this.setState({
			...this.state,
			activeLink: activeLink,
		});
	}

	toggleShowDrawerNav() {
		console.log('toggle');
		return this.setState({
			showDrawerNav: !this.state.showDrawerNav,
		});
	}

	componentDidMount() {
		window.onscroll = function () {
			fixNavOnScroll();
		};
		var mainNav = document.querySelector('#main-nav');

		function fixNavOnScroll() {
			if (window.pageYOffset >= 100) {
				mainNav.classList.add('sticky');
			} else {
				mainNav.classList.remove('sticky');
			}
		}
	}

	render() {
		let linkFunctions;
		const checkWidth = () => {
			const viewportWidth = window.innerWidth;
			if (viewportWidth < 900) {
				linkFunctions = (link) => {
					this.selectActiveLink(link);
					this.toggleShowDrawerNav();
				};
			} else {
				linkFunctions = (link) => {
					this.selectActiveLink(link);
				};
			}
		};
		checkWidth();
		window.addEventListener('resize', checkWidth);

		return (
			<>
				<span onClick={() => this.toggleShowDrawerNav()} className='fas fa-bars nav-toggle'></span>
				<div className={`${this.state.showDrawerNav ? 'showNavExit' : null}`} onClick={() => this.toggleShowDrawerNav()} />
				<div id='main-nav' className={` main-nav-container ${this.state.showDrawerNav ? 'showNav' : null}`}>
					<span onClick={() => this.toggleShowDrawerNav()} className='fas fa-times nav-close'></span>
					<div className='nav-inner-container'>
						<NavLink to={ROUTES.HOME}>
							<img src='/assets/images/logo.png' alt='' className='nav-logo' />
						</NavLink>
						<ul className='nav-links'>
							<li>
								<NavLink onClick={() => this.selectActiveLink('home')} to={ROUTES.HOME} className={this.state.activeLink === 'home' ? 'activePage' : null}>
									HOME
								</NavLink>
							</li>
							<li className='drop-menu'>
								<NavLink
									onClick={() => linkFunctions('cases we handle')}
									className={`drop-btn ${this.state.activeLink === 'cases we handle' ? 'activePage' : null}`}
									to={ROUTES.CASES_WE_HANDLE}>
									CASES WE HANDLE
								</NavLink>
								<div className='drop-content'>
									<NavLink onClick={() => linkFunctions('cases we handle')} to={ROUTES.TRUCKING}>
										Trucking Accidents
									</NavLink>

									<div className='sub-drop-menu'>
										<NavLink
											onClick={() => linkFunctions('cases we handle')}
											className={`sub-drop-btn ${this.state.subMenu ? 'activePage' : null}`}
											to={ROUTES.TRAUMATIC_BRAIN_INJURY}>
											Traumatic Brain Injury
										</NavLink>
										<div className='sub-drop-content'>
											<NavLink onClick={() => linkFunctions('cases we handle')} to={ROUTES.AMNESIA}>
												Amnesia
											</NavLink>
											<NavLink onClick={() => linkFunctions('cases we handle')} to={ROUTES.CONCUSSION}>
												Concussions
											</NavLink>
											<NavLink onClick={() => linkFunctions('cases we handle')} to={ROUTES.LOSS_OF_CONSCIOUSNESS}>
												Loss Of Consciousness
											</NavLink>
											<NavLink onClick={() => linkFunctions('cases we handle')} to={ROUTES.MILD_TRAUMATIC_BRAIN_INJURY}>
												Mild Traumatic Brain Injury
											</NavLink>
											<NavLink onClick={() => linkFunctions('cases we handle')} to={ROUTES.SKULL_FRACTURES}>
												Skull Fractures
											</NavLink>
											<NavLink onClick={() => linkFunctions('cases we handle')} to={ROUTES.SPORTS_RELATED_INJURY}>
												Sports Related Injury
											</NavLink>
										</div>
									</div>
									<NavLink onClick={() => linkFunctions('cases we handle')} to={ROUTES.WRONGFUL_DEATH}>
										Wrongful Death
									</NavLink>
									<NavLink onClick={() => linkFunctions('cases we handle')} to={ROUTES.PREMISE_LIABILITY}>
										Premise Liability
									</NavLink>
									<NavLink onClick={() => linkFunctions('cases we handle')} to={ROUTES.MOTOR_VEHICLE_CRASH}>
										Motor Vehicle Crash
									</NavLink>
								</div>
							</li>
							<li className='drop-menu'>
								<NavLink to='/' className={`drop-btn ${this.state.activeLink === 'resource' ? 'activePage' : null}`}>
									RESOURCES
								</NavLink>
								<div className='drop-content'>
									<NavLink onClick={() => linkFunctions('resource')} to={ROUTES.CRASHES_NOT_ACCIDENTS}>
										Crashes Not Accidents
									</NavLink>
									<NavLink onClick={() => linkFunctions('resource')} to={ROUTES.OUTSIDE_ATTORNEY_CONSULTS}>
										Attorney Consults
									</NavLink>
									<NavLink onClick={() => linkFunctions('resource')} to={ROUTES.ABOUT_US}>
										About Us
									</NavLink>
									<NavLink onClick={() => linkFunctions('resource')} to={ROUTES.CONTACT_US}>
										Contact Us
									</NavLink>
								</div>
							</li>
							<li className='phone-contact'>
								<a href='tel:+18002310323'>CALL NOW (800)231-0323</a>
							</li>
						</ul>
					</div>
				</div>
			</>
		);
	}
}

export default MainNav;
