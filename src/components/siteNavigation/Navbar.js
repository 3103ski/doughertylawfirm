import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import allLinks from '../../constants/navbar';
import * as R from '../../constants/routes';

import './navbar.css';

export default class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			isMobile: false,
			activePrimary: '',
			activeSublink: '',
			activeDrop: '',
			mobileNavOpen: false,
			linkArrays: {
				main: ['home', 'cases-we-handle', 'resources'],
				resources: ['crashes-not-accidents', 'about-us', 'contact-us', 'outside-attorney-consults', 'videos'],
				brain: ['loss-of-consciousness', 'amnesia', 'mild-traumatic-brain-injury', 'sports-related-injury', 'skull-fractures', 'concussions'],
				cases: ['trucking', 'traumatic-brain-injury', 'wrongful-death', 'premise-liability', 'motor-vehicle-crash'],
			},
		};
	}

	stickyNav() {
		const navContainer = document.getElementById('main-nav');
		if (window.pageYOffset >= 80) {
			navContainer.classList.add('sticky');
		} else {
			navContainer.classList.remove('sticky');
		}
	}

	checkActivePage = () => {
		const currentPath = this.removeSlash(window.location.pathname);
		console.log(currentPath);
		const links = this.state.linkArrays;
		let pathInfo = {
			activePrimary: '',
			activeSubLink: '',
			activeDrop: '',
		};
		if (links.main.includes(currentPath)) {
			pathInfo.activePrimary = currentPath;
		}
		if (links.cases.includes(currentPath)) {
			pathInfo = {
				activePrimary: 'cases-we-handle',
				activeDrop: 'cases',
				activeSubLink: currentPath,
			};
		}
		if (links.resources.includes(currentPath)) {
			pathInfo = {
				activePrimary: 'resources',
				activeDrop: 'resources',
				activeSubLink: currentPath,
			};
		}
		if (links.brain.includes(currentPath)) {
			pathInfo = {
				activePrimary: 'cases-we-handle',
				activeDrop: 'brain',
				activeSubLink: currentPath,
			};
		}
		this.setState({
			...this.state,
			isLoaded: true,
			activePrimary: pathInfo.activePrimary,
			activeSublink: pathInfo.activeSubLink,
			activeDrop: pathInfo.activeDrop,
		});
	};

	checkWidth = () => {
		if (window.innerWidth <= 1180 && this.state.isMobile === false) {
			this.setState({
				...this.state,
				isMobile: true,
			});
		}
		if (window.innerWidth > 1180 && this.state.isMobile === true) {
			this.setState({
				...this.state,
				isMobile: false,
			});
		}
	};

	setLink(activePrimary, activeDrop, activeSublink) {
		console.log('set link info ', activePrimary, activeDrop, activeSublink);
		this.setState({
			...this.state,
			activePrimary: activePrimary,
			activeSublink: activeSublink,
			activeDrop: activeDrop,
			mobileNavOpen: false,
		});
	}

	removeSlash(slashRoute) {
		const route = slashRoute.split('/')[1];
		if (route === '') {
			return 'home';
		} else {
			return route;
		}
	}

	toggleNav() {
		const filter = document.getElementById('nav-filter');
		if (!this.state.mobileNavOpen) {
			filter.classList.add('filter-on');
		} else {
			filter.classList.remove('filter-on');
		}
		this.setState({
			...this.state,
			mobileNavOpen: !this.state.mobileNavOpen,
		});
	}

	render() {
		const RenderLink = ({ route, activePrimary, children, activeDrop = '', activeSublink = '', classes = '' }) => {
			const link = this.removeSlash(route);
			let linkClasses = `menu-link ${this.state.linkArrays.main.includes(link) ? 'main-link' : ''}`;

			if (activeSublink === '') {
				linkClasses = link === this.state.activePrimary ? `${linkClasses} activePrimary` : linkClasses;
			} else {
				linkClasses = `subLink ${linkClasses}`;
			}

			return (
				<NavLink to={route} className={`${linkClasses} ${classes}`} onClick={() => this.setLink(activePrimary, activeDrop, activeSublink)}>
					{children}
				</NavLink>
			);
		};

		const casesLinks = () => {
			return (
				<div className={`dropmenu-cases drop-menu ${this.state.mobileNavOpen ? 'open' : ''} ${this.state.activeDrop === 'cases' ? 'activeDrop' : ''}`}>
					{!this.state.isMobile ? (
						<>
							<a
								onClick={() => this.setState({ ...this.state, activeDrop: this.state.activeDrop === 'cases' ? '' : '' })}
								className='menu-link main-link'
								style={{ fontSize: '.7rem', marginRight: '10px', paddingTop: '6px' }}>
								<span className='fas fa-times' /> close
							</a>
						</>
					) : null}
					<RenderLink route={R.CASES_WE_HANDLE} activePrimary='cases-we-handle' activeDrop='cases' activeSublink='cases-we-handle'>
						general info
					</RenderLink>
					<RenderLink route={R.TRUCKING} activePrimary='cases-we-handle' activeDrop='cases' activeSublink='truck-crashes'>
						truck crashes
					</RenderLink>
					<RenderLink route={R.TRAUMATIC_BRAIN_INJURY} activePrimary='cases-we-handle' activeDrop='brain' activeSublink='traumatic-brain-injury'>
						traumatic brain injury
					</RenderLink>
					{this.state.isMobile ? brainInjuryLinks() : null}
					<RenderLink route={R.PREMISE_LIABILITY} activePrimary='cases-we-handle' activeDrop='cases' activeSublink='premise-liability'>
						premise liability
					</RenderLink>
					<RenderLink route={R.WRONGFUL_DEATH} activePrimary='cases-we-handle' activeDrop='cases' activeSublink='wrongful-death'>
						wrongful death
					</RenderLink>
					<RenderLink route={R.MOTOR_VEHICLE_CRASH} activePrimary='cases-we-handle' activeDrop='cases' activeSublink='motor-vehicle-crash'>
						motor vehicle crash
					</RenderLink>
				</div>
			);
		};

		const resourcesLinks = () => {
			return (
				<div className={`dropmenu-resources drop-menu ${this.state.mobileNavOpen ? 'open' : ''} ${this.state.activeDrop === 'resources' ? 'activeDrop' : ''}`}>
					{this.state.isMobile ? null : (
						<a
							onClick={() => this.setState({ ...this.state, activeDrop: this.state.activeDrop === 'resources' ? '' : '' })}
							className='menu-link main-link'
							style={{ fontSize: '.7rem', marginRight: '10px', paddingTop: '6px' }}>
							<span className='fas fa-times' /> close
						</a>
					)}
					<RenderLink route={R.CRASHES_NOT_ACCIDENTS} activePrimary='resources' activeDrop='resources' activeSublink='crashes-not-accidents'>
						crashes not accidents
					</RenderLink>
					<RenderLink route={R.OUTSIDE_ATTORNEY_CONSULTS} activePrimary='resources' activeDrop='resources' activeSublink='outside-attorney-consults'>
						outside attorney consult
					</RenderLink>
					<RenderLink route={R.ABOUT_US} activePrimary='resources' activeDrop='about' activeSublink='about-us'>
						about us
					</RenderLink>
					{this.state.isMobile ? aboutLinks() : null}
					<RenderLink route={R.VIDEOS} activePrimary='resources' activeDrop='resources' activeSublink='videos'>
						videos
					</RenderLink>
					<RenderLink route={R.CONTACT_US} activePrimary='resources' activeDrop='resources' activeSublink='contact-us'>
						contact us
					</RenderLink>
				</div>
			);
		};
		const aboutLinks = () => {
			return (
				<div className={`dropmenu-about drop-menu ${this.state.mobileNavOpen ? 'open' : ''} ${this.state.activeDrop === 'about' ? 'activeDrop' : ''}`}>
					{!this.state.isMobile ? (
						<>
							<a
								onClick={() => this.setState({ ...this.state, activeDrop: this.state.activeDrop === 'about' ? 'resources' : '' })}
								className='menu-link main-link'
								style={{ fontSize: '.7rem', marginRight: '10px', paddingTop: '6px' }}>
								<span className='fas fa-arrow-left' /> back
							</a>
						</>
					) : null}
					<RenderLink route={R.ABOUT_US} activePrimary='resources' activeDrop='about' activeSublink='about-us'>
						general info
					</RenderLink>
					<RenderLink route={R.GIANCARLO_BIO} activePrimary='resources' activeDrop='about' activeSublink='giancarlo'>
						giancarlo cellini
					</RenderLink>
					<RenderLink route={R.ADAM_BIO} activePrimary='resources' activeDrop='about' activeSublink='adam'>
						adam dougherty
					</RenderLink>
				</div>
			);
		};

		const brainInjuryLinks = () => {
			return (
				<div className={`dropmenu-brain drop-menu ${this.state.mobileNavOpen ? 'open' : ''}  ${this.state.activeDrop === 'brain' ? 'activeDrop' : ''}`}>
					{!this.state.isMobile ? (
						<>
							<a
								onClick={() => this.setState({ ...this.state, activeDrop: this.state.activeDrop === 'brain' ? 'cases' : '' })}
								className='menu-link main-link'
								style={{ fontSize: '.7rem', marginRight: '10px', paddingTop: '6px' }}>
								<span className='fas fa-arrow-left' /> back
							</a>
						</>
					) : null}
					<RenderLink route={R.TRAUMATIC_BRAIN_INJURY} activePrimary='cases-we-handle' activeDrop='brain' activeSublink='traumatic-brain-injury'>
						general info
					</RenderLink>

					<RenderLink route={R.AMNESIA} activePrimary='cases-we-handle' activeDrop='brain' activeSublink='amnesia'>
						amnesia
					</RenderLink>
					<RenderLink route={R.CONCUSSION} activePrimary='cases-we-handle' activeDrop='brain' activeSublink='concussions'>
						concussions
					</RenderLink>
					<RenderLink route={R.LOSS_OF_CONSCIOUSNESS} activePrimary='cases-we-handle' activeDrop='brain' activeSublink='loss-of-consciousness'>
						loss of consciousness
					</RenderLink>
					<RenderLink route={R.MILD_TRAUMATIC_BRAIN_INJURY} activePrimary='cases-we-handle' activeDrop='brain' activeSublink='mild-traumatic-brain-injury'>
						mild traumatic brain injury
					</RenderLink>
					<RenderLink route={R.SKULL_FRACTURES} activePrimary='cases-we-handle' activeDrop='brain' activeSublink='skull-fractures'>
						skull fractures
					</RenderLink>
					<RenderLink route={R.SPORTS_RELATED_INJURY} activePrimary='cases-we-handle' activeDrop='brain' activeSublink='sports-related-injury'>
						sports related injury
					</RenderLink>
				</div>
			);
		};

		window.addEventListener('scroll', () => this.stickyNav());
		window.addEventListener('resize', () => this.checkWidth());
		window.addEventListener('load', () => {
			this.checkWidth();
			if (!this.state.isLoaded) {
				this.checkActivePage();
			}
		});

		return (
			<>
				<i className={`fas fa-${this.state.mobileNavOpen ? 'times' : 'bars'} toggle-nav`} onClick={() => this.toggleNav()} />
				<div id='nav-filter' className={`close-nav-filter ${this.state.mobileNavOpen ? 'filter-on' : ''}`} onClick={this.state.mobileNavOpen ? () => this.toggleNav() : null} />
				<div className={`mobile-nav-outer-container ${this.state.mobileNavOpen ? 'open' : ''} ${this.state.activeDrop === '' ? '' : 'dropMargin'}`}>
					<div id='main-nav' className={`main-nav-container ${this.state.mobileNavOpen ? 'open' : ''}`}>
						<RenderLink route={R.HOME} activePrimary='home' classes={`nav-logo ${this.state.mobileNavOpen ? 'open' : ''}`}>
							<img style={{ width: '100%' }} src='/assets/images/logo.png' />
						</RenderLink>

						<div className='mobile-links-container'>
							<div className={`nav-controls-container ${this.state.mobileNavOpen ? 'open' : ''}`}>
								<div className={`nav-main-controls menu ${this.state.activeMenu === 'main' ? 'activeMenu' : ''}`}>
									<RenderLink route={R.HOME} activePrimary='home'>
										home
									</RenderLink>
									<a onClick={() => this.setState({ ...this.state, activeDrop: this.state.activeDrop === 'cases' ? '' : 'cases' })} className='menu-link main-link'>
										cases we handle
									</a>
									{this.state.isMobile ? casesLinks() : null}
									<a onClick={() => this.setState({ ...this.state, activeDrop: this.state.activeDrop === 'resources' ? '' : 'resources' })} className='menu-link main-link'>
										resources
									</a>
									{this.state.isMobile ? resourcesLinks() : null}
									<a href='tel:+18002310323' className='menu-link main-link'>
										call now!
									</a>
								</div>
							</div>
							{this.state.isMobile ? null : casesLinks()}
							{this.state.isMobile ? null : resourcesLinks()}
							{this.state.isMobile ? null : brainInjuryLinks()}
							{this.state.isMobile ? null : aboutLinks()}
						</div>
					</div>
				</div>
			</>
		);
	}
}
