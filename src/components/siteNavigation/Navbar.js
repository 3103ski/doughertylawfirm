import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import allLinks from '../../constants/navbar';
import * as R from '../../constants/routes';

import './navbar2.css';

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
				// linkClasses = activeSublink === this.state.activeSublink ? `${linkClasses} activeSublink` : `subLink ${linkClasses}`;
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
						<RenderLink route={R.CASES_WE_HANDLE} activePrimary='cases-we-handle' activeDrop='cases' activeSublink='cases-we-handle'>
							general info
						</RenderLink>
					) : null}
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
					<RenderLink route={R.CRASHES_NOT_ACCIDENTS} activePrimary='resources' activeDrop='resources' activeSublink='crashes-not-accidents'>
						crashes not accidents
					</RenderLink>
					<RenderLink route={R.OUTSIDE_ATTORNEY_CONSULTS} activePrimary='resources' activeDrop='resources' activeSublink='outside-attorney-consults'>
						outside attorney consult
					</RenderLink>
					<RenderLink route={R.ABOUT_US} activePrimary='resources' activeDrop='resources' activeSublink='about-us'>
						about us
					</RenderLink>
					<RenderLink route={R.VIDEOS} activePrimary='resources' activeDrop='resources' activeSublink='videos'>
						videos
					</RenderLink>
					<RenderLink route={R.CONTACT_US} activePrimary='resources' activeDrop='resources' activeSublink='contact-us'>
						contact us
					</RenderLink>
				</div>
			);
		};

		const brainInjuryLinks = () => {
			return (
				<div className={`dropmenu-brain drop-menu ${this.state.mobileNavOpen ? 'open' : ''}  ${this.state.activeDrop === 'brain' ? 'activeDrop' : ''}`}>
					{!this.state.isMobile ? (
						<RenderLink route={R.TRAUMATIC_BRAIN_INJURY} activePrimary='cases-we-handle' activeDrop='brain' activeSublink='traumatic-brain-injury'>
							general info
						</RenderLink>
					) : null}

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

		window.addEventListener('resize', () => this.checkWidth());
		window.addEventListener('load', () => {
			this.checkWidth();
			if (!this.state.isLoaded) {
				this.checkActivePage();
			}
		});

		return (
			<div className={`mobile-nav-outer-container ${this.state.mobileNavOpen ? 'open' : ''}`} onClick={this.state.mobileNavOpen ? () => this.toggleNav() : null}>
				<div className={`main-nav-container ${this.state.mobileNavOpen ? 'open' : ''}`}>
					<RenderLink route={R.HOME} activePrimary='home' classes={`nav-logo ${this.state.mobileNavOpen ? 'open' : ''}`}>
						<img style={{ width: '100%' }} src='/assets/images/logo.png' />
					</RenderLink>

					<i className={`fas fa-${this.mobileNavOpen ? 'times' : 'bars'} toggle-nav`} onClick={() => this.toggleNav()} />
					<div className='mobile-links-container'>
						<div className={`nav-controls-container ${this.state.mobileNavOpen ? 'open' : ''}`}>
							<div className={`nav-main-controls menu ${this.state.activeMenu === 'main' ? 'activeMenu' : ''}`}>
								<RenderLink route={R.HOME} activePrimary='home'>
									home
								</RenderLink>
								<RenderLink route={R.CASES_WE_HANDLE} activePrimary='cases-we-handle' activeDrop='cases' activeSublink={`cases-we-handle`}>
									cases we handle
								</RenderLink>
								{this.state.isMobile ? casesLinks() : null}
								{/* <RenderLink route={R.ABOUT_US} activePrimary='resources' activeDrop='resources' activeSublink='about-us'>
									resources
								</RenderLink> */}
								<a onClick={() => this.setState({ ...this.state, activeDrop: this.state.activeDrop === 'resources' ? '' : 'resources' })} className='menu-link main-link'>
									resources
								</a>
								{this.state.isMobile ? resourcesLinks() : null}
								{/* <RenderLink route={R.CONTACT_US} activePrimary='resources' activeDrop='resources' activeSublink='contact-us'>
									call now
								</RenderLink> */}
								<a href='tel:+18002310323' className='menu-link main-link'>
									call now!
								</a>
							</div>
						</div>
						{this.state.isMobile ? null : casesLinks()}
						{this.state.isMobile ? null : resourcesLinks()}
						{this.state.isMobile ? null : brainInjuryLinks()}
					</div>
				</div>
			</div>
		);
	}
}

// export default class SiteNav extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			allLinks: [...allLinks],
// 			isLoaded: false,
// 			width: window.innerWidth,
// 			mobileCasesDrop: false,
// 			mobileResourcesDrop: false,
// 			activePrimaryLink: '',
// 			activeSubLink: '',
// 			activeSubMenu: '',
// 			activeMobileMenu: '',
// 		};
// 	}

// 	selectLink(link) {
// 		if (link) {
// 			const activeSublink = link.link.split('/')[1];
// 			this.setState({
// 				activePrimaryLink: link.activePrimaryLink,
// 				activeSubLink: link.isSubLink ? activeSublink : '',
// 				activeSubMenu: link.activeSubMenu ? link.activeSubMenu : '',
// 			});
// 		}
// 		if (this.state.width < 992) {
// 			this.toggleMobileNavLinks();
// 		}
// 	}

// 	generateRouteInfoForNav = () => {
// 		const currPage = document.location.pathname.split('/')[1];
// 		let routeInfo = {
// 			primary: '',
// 			subLink: '',
// 			subMenu: '',
// 		};

// 		if (currPage === '') {
// 			routeInfo.primary = 'home';
// 		} else if (currPage === 'cases-we-handle') {
// 			routeInfo.primary = currPage;
// 		} else if (resourceLinks.includes(currPage)) {
// 			routeInfo.primary = 'resources';
// 			routeInfo.subLink = currPage;
// 		} else if (casesWeHandleLinks.includes(currPage)) {
// 			routeInfo.primary = 'cases-we-handle';
// 			routeInfo.subLink = currPage;
// 		} else if (brainInjuryLinks.includes(currPage)) {
// 			routeInfo = {
// 				primary: 'cases-we-handle',
// 				subLink: currPage,
// 				subMenu: 'traumatic-brain-injury',
// 			};
// 		}
// 		return routeInfo;
// 	};

// 	stickyNav() {
// 		const navContainer = document.getElementById('main-nav');
// 		if (window.pageYOffset >= 80) {
// 			navContainer.classList.add('sticky');
// 		} else {
// 			navContainer.classList.remove('sticky');
// 		}
// 	}

// 	setWidth = () => {
// 		const width = window.innerWidth;
// 		this.setState({
// 			...this.state,
// 			width,
// 		});
// 	};

// 	toggleMobileNavLinks() {
// 		const mobileNav = document.getElementById('nav-links');
// 		if (!mobileNav.classList.contains('open-mobile-nav')) {
// 			mobileNav.classList.add('open-mobile-nav');
// 		} else {
// 			mobileNav.classList.remove('open-mobile-nav');
// 		}
// 	}

// 	toggleMobileClasses() {
// 		const navContainer = document.getElementById('main-nav');
// 		const logoContainer = document.getElementById('nav-logo');
// 		const linksContainer = document.getElementById('nav-links');
// 		if (this.state.width < 992) {
// 			navContainer.classList.add('mobile-main-nav-container');
// 			logoContainer.classList.add('mobile-nav-logo-container');
// 			linksContainer.classList.add('mobile-nav-links-container');
// 		} else {
// 			navContainer.classList.remove('mobile-main-nav-container');
// 			logoContainer.classList.remove('mobile-nav-logo-container');
// 			linksContainer.classList.remove('mobile-nav-links-container');
// 		}
// 	}

// 	toggleSubNav() {}

// 	// **********************************************************
// 	// **********************************************************
// 	//          RENDER
// 	// **********************************************************
// 	// **********************************************************

// 	render() {
// 		// -----------------------
// 		//      Event Listeners
// 		// -----------------------
// 		window.onscroll = () => {
// 			this.stickyNav();
// 		};
// 		window.addEventListener('resize', () => {
// 			if (window.innerWidth != this.state.width) {
// 				this.setWidth();
// 				console.log(this.state.width);
// 			}
// 			this.toggleMobileClasses();
// 		});
// 		window.addEventListener('load', () => {
// 			this.toggleMobileClasses();
// 			if (!this.state.isLoaded) {
// 				const routeInfo = this.generateRouteInfoForNav();
// 				this.setWidth();
// 				this.setState({
// 					...this.state,
// 					activePrimaryLink: routeInfo.primary,
// 					activeSubMenu: routeInfo.subMenu,
// 					activeSubLink: routeInfo.subLink,
// 					isLoaded: true,
// 				});
// 			}
// 		});

// 		// -----------------------
// 		//      Nav Links
// 		// -----------------------
// 		let priamryLinks = this.state.allLinks.map((link) => {
// 			if (link.link) {
// 				if (link.dropLinks) {
// 					return <SiteNav.RenderDropMenuLink selectLink={(link) => this.selectLink(link)} state={this.state} linkObject={link} />;
// 				}
// 				return (
// 					<div className='non-drop-link'>
// 						<SiteNav.RenderLink selectLink={(link) => this.selectLink(link)} state={this.state} linkObject={link} />
// 					</div>
// 				);
// 			}
// 			return null;
// 		});

// 		return (
// 			<div style={{ position: 'relative' }}>
// 				<div id='main-nav' className={`main-nav-container `}>
// 					<div id='nav-logo' className={`nav-logo-container`}>
// 						<NavLink to={R.HOME} onClick={() => this.setState({ activePrimaryLink: 'home', activeSubLink: '', activeSubMenu: '' })}>
// 							<img className='nav-logo' src='/assets/images/logo.png' />
// 						</NavLink>
// 					</div>
// 					<div className='mobile-nav-toggle'>
// 						<i id='nav-toggle' className='fas fa-bars' onClick={() => this.toggleMobileNavLinks()}></i>
// 					</div>
// 					<div id='nav-links' className='nav-links-container'>
// 						{priamryLinks}
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// SiteNav.RenderLink = function (props) {
// 	const link = props.linkObject;
// 	const linkStr = link.link.split('/')[1];
// 	let isActiveSubLink = props.state.activeSubLink === linkStr ? true : false;
// 	let isActiveSubMenu = props.state.activeSubMenu === linkStr ? true : false;

// 	const clickLink = () => {
// 		if (link.isPrimary && link.dropLinks) {
// 		}
// 		if (!link.isPrimary && link.dropLinks) {
// 			return () => {};
// 		}
// 	};

// 	return (
// 		<NavLink
// 			className={`
//         ${!link.isSubLink ? 'menu-link' : 'menu-link sub-link'}
//         ${link.isPrimary && link.activePrimaryLink === props.state.activePrimaryLink ? 'activePrimary' : ''}
//         ${!link.isPrimary && isActiveSubLink ? 'activeSublink' : ''}
//         ${!link.isPrimary && isActiveSubMenu ? 'activeSubMenu' : ''}
//         `}
// 			to={link.link}
// 			onClick={() => props.selectLink(link)}>
// 			{link.linkText}
// 		</NavLink>
// 	);
// };

// SiteNav.RenderDropMenuLink = (props) => {
// 	const link = props.linkObject;
// 	return (
// 		<div className={`${!link.isSubMenu ? `drop-menu-container mobile-sub${link.link}` : 'sub-menu-container'}`}>
// 			<SiteNav.RenderLink selectLink={(link) => props.selectLink(link)} state={props.state} linkObject={link} />
// 			<div className={`${!link.isSubMenu ? 'drop-menu-content' : 'sub-menu-content'}`}>
// 				{link.dropLinks.map((subLink) => {
// 					if (subLink.dropLinks) {
// 						return (
// 							<SiteNav.RenderDropMenuLink
// 								selectLink={(subLink) => props.selectLink(subLink)}
// 								state={props.state}
// 								linkObject={subLink}
// 								isSubMenu
// 								dropLinks={subLink.dropLinks}
// 								text={subLink.linkText}
// 								link={subLink.link}
// 							/>
// 						);
// 					}
// 					return <SiteNav.RenderLink selectLink={(subLink) => props.selectLink(subLink)} state={props.state} linkObject={subLink} isSubLink text={subLink.linkText} link={subLink.link} />;
// 				})}
// 			</div>
// 		</div>
// 	);
// };
