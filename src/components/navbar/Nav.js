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
		};
	}

	selectActiveLink(activeLink) {
		return this.setState({
			...this.state,
			activeLink: activeLink,
		});
	}

	toggleNav() {
		console.log('toggle');
		return this.setState({
			showDrawerNav: !this.state.showDrawerNav,
		});
	}

	render() {
		let linkFunctions;
		const checkWidth = () => {
			const viewportWidth = window.innerWidth;
			if (viewportWidth < 900) {
				linkFunctions = (link) => {
					this.selectActiveLink(link);
					this.toggleNav();
				};
			} else {
				linkFunctions = (link) => {
					this.selectActiveLink(link);
				};
			}
			console.log(viewportWidth);
		};
		checkWidth();
		window.addEventListener('resize', checkWidth);
		return (
			<>
				<span onClick={() => this.toggleNav()} className='fas fa-bars nav-toggle'></span>
				<div className={`${this.state.showDrawerNav ? 'showNavExit' : null}`} onClick={() => this.toggleNav()} />
				<div className={`main-nav-container ${this.state.showDrawerNav ? 'showNav' : null}`}>
					<span onClick={() => this.toggleNav()} className='fas fa-times nav-close'></span>
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
									<NavLink onClick={() => linkFunctions('cases we handle')} to={ROUTES.TRAUMATIC_BRAIN_INJURY}>
										Traumatic Brain Injury
									</NavLink>
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
