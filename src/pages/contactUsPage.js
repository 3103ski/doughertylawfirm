// React
import React from 'react';

// Components
import { PageHeader, RouteAnimation, ContactCard, LayoutSection, ImgReel, CounterSection } from '../components';
//

function ContactUsPage(props) {
	return (
		<>
			<PageHeader>Contact us</PageHeader>
			<RouteAnimation animation={props.animation ? props.animation : ''}>
				<LayoutSection fullWidth className=''>
					<ContactCard florida />
					<ContactCard />
				</LayoutSection>
				<ImgReel />
				<CounterSection />
			</RouteAnimation>
		</>
	);
}

export default ContactUsPage;
