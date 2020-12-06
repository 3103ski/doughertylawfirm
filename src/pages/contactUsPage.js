// React
import React from 'react';

// Components
import { PageHeader, RouteAnimation, ContactCard, LayoutSection, ImgReel, CounterSection, FormSection } from '../components';
//

function ContactUsPage(props) {
	return (
		<>
			<PageHeader>Contact us</PageHeader>
			<RouteAnimation>
				<LayoutSection fullWidth className=''>
					<ContactCard florida />
					<ContactCard />
				</LayoutSection>
				<PageHeader />
				<FormSection />
				<PageHeader />
				<ImgReel />
				{/* <CounterSection /> */}
			</RouteAnimation>
		</>
	);
}

export default ContactUsPage;
