// React
import React from 'react';
import { Col } from 'reactstrap';

// Components
import { LayoutSection, CounterSection, ImgReel, PageHeader, Paragraph, HeaderText } from '../components';

// Styling
import './styles/bioPages.css';

function GcBioPage(props) {
	const imgDir = '/assets/images/pageAssets/about-us/GC';
	return (
		<div>
			<PageHeader>giancarlo cellini</PageHeader>
			<LayoutSection>
				<Col className='col-12 col-md-4'>
					<Col className='col-12 my-5  mt-md-5 mb-md-2'>
						<img src={`${imgDir}/gc.jpeg`} alt='Giancarlo' style={{ width: '100%' }} className='rounded' />
					</Col>
					<Col className='col-12 d-flex align-items-center d-md-block'>
						<Col className='col-8 col-md-12'>
							<img src={`${imgDir}/rising.png`} alt='Giancarlo' style={{ width: '100%' }} className='rounded' />
						</Col>
						<Col className='col-3 col-md-6 mx-md-auto'>
							<img src={`${imgDir}/kti.jpg`} alt='Giancarlo' style={{ width: '100%' }} className='rounded' />
						</Col>
					</Col>
					<Col className='col-12 my-5'>
						<HeaderText className='creds-title'>bar memberships</HeaderText>
						<Paragraph className='creds-li'>State of Florida</Paragraph>
						<Paragraph className='creds-li final'>Southern Dist. of Florida</Paragraph>
						<HeaderText className='creds-title'>education</HeaderText>
						<Paragraph className='creds-li'>Nova Southeastern Univ. - BA Legal Studies</Paragraph>
						<Paragraph className='creds-li'>Nova Southeastern Univ. - JD Law</Paragraph>
						<Paragraph className='creds-li final'>Keenan Trial Institude - Graduate</Paragraph>
					</Col>
				</Col>
				<Col className='col-12 col-md-8 mb-5 mt-2 my-md-5'>
					<Paragraph>
						Giancarlo Cellini is an Of Counsel attorney with the <strong>DOUGHERTY LAW FIRM’S</strong> trial team. He started his legal career while still a teenager as an office assistant
						for a solo practitioner. The exposure to law fascinated Giancarlo and he went on to become a paralegal, a job he held for seven years. As a paralegal, Giancarlo knew he had
						what it took to become an attorney and so he enrolled in the evening part-time program at Nova Southeastern University’s Shephard Broad Law School while still working full time
						in the legal system.
					</Paragraph>
					<Paragraph>
						Giancarlo has been working alongside the <strong>DOUGHERTY LAW FIRM</strong> since March of 2017, and later that year in October he was brought on-board as an Of-Counsel Trial
						Lawyer. In 2019, Giancarlo graduated from the Keenan Trial Institute, a national trial lawyers’ college located in Atlanta, GA.
					</Paragraph>
					<Paragraph>Giancarlo is fluent in both English and Spanish after growing up in Honduras.</Paragraph>
				</Col>
			</LayoutSection>
			<CounterSection />
			<ImgReel />
		</div>
	);
}

export default GcBioPage;
