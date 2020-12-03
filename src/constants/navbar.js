import * as R from './routes';

const navLinks = [
	{
		linkText: 'home',
		link: R.HOME,
		isPrimary: true,
		activePrimaryLink: 'home',
	},
	{
		linkText: 'cases we handle',
		link: R.CASES_WE_HANDLE,
		isPrimary: true,
		activePrimaryLink: 'cases-we-handle',
		dropLinks: [
			{
				linkText: 'trucking accidents',
				link: R.TRUCKING,
				isSubLink: true,
				activePrimaryLink: 'cases-we-handle',
			},
			{
				linkText: 'traumatic brain injury',
				link: R.TRAUMATIC_BRAIN_INJURY,
				isSubLink: true,
				isSubMenu: true,
				activePrimaryLink: 'cases-we-handle',
				dropLinks: [
					{
						linkText: 'amnesia',
						link: R.AMNESIA,
						isSubLink: true,
						activePrimaryLink: 'cases-we-handle',
						activeSubMenu: 'traumatic-brain-injury',
					},
					{
						linkText: 'concussions',
						link: R.CONCUSSION,
						isSubLink: true,
						activePrimaryLink: 'cases-we-handle',
						activeSubMenu: 'traumatic-brain-injury',
					},
					{
						linkText: 'loss of consciousness',
						link: R.LOSS_OF_CONSCIOUSNESS,
						isSubLink: true,
						activePrimaryLink: 'cases-we-handle',
						activeSubMenu: 'traumatic-brain-injury',
					},
					{
						linkText: 'mild traumatic brain injury',
						link: R.MILD_TRAUMATIC_BRAIN_INJURY,
						isSubLink: true,
						activePrimaryLink: 'cases-we-handle',
						activeSubMenu: 'traumatic-brain-injury',
					},
					{
						linkText: 'skull fractures',
						link: R.SKULL_FRACTURES,
						isSubLink: true,
						activePrimaryLink: 'cases-we-handle',
						activeSubMenu: 'traumatic-brain-injury',
					},
					{
						linkText: 'sports related injury',
						link: R.SPORTS_RELATED_INJURY,
						isSubLink: true,
						activePrimaryLink: 'cases-we-handle',
						activeSubMenu: 'traumatic-brain-injury',
					},
				],
			},
			{
				linkText: 'wrongful death',
				link: R.WRONGFUL_DEATH,
				isSubLink: true,
				activePrimaryLink: 'cases-we-handle',
			},
			{
				linkText: 'premise liability',
				link: R.PREMISE_LIABILITY,
				isSubLink: true,
				activePrimaryLink: 'cases-we-handle',
			},
			{
				linkText: 'motor vehicle crash',
				link: R.MOTOR_VEHICLE_CRASH,
				isSubLink: true,
				activePrimaryLink: 'cases-we-handle',
			},
		],
	},
	{
		linkText: 'resources',
		link: '/',
		isPrimary: true,
		activePrimaryLink: 'resources',
		dropLinks: [
			{
				linkText: 'crashes not accidents',
				link: R.CRASHES_NOT_ACCIDENTS,
				isSubLink: true,
				activePrimaryLink: 'resources',
			},
			{
				linkText: 'outside attorney consults',
				link: R.OUTSIDE_ATTORNEY_CONSULTS,
				isSubLink: true,
				activePrimaryLink: 'resources',
			},
			{
				linkText: 'about us',
				link: R.ABOUT_US,
				isSubLink: true,
				activePrimaryLink: 'resources',
			},
			{
				linkText: 'contact us',
				link: R.CONTACT_US,
				isSubLink: true,
				activePrimaryLink: 'resources',
			},
		],
	},
	{
		linkText: 'call now (800)231-0323',
		link: 'tel:+18002310323',
		activePrimaryLink: '',
	},
];

export default navLinks;
