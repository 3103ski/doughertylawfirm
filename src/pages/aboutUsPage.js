// React
import React from 'react';
import { Col } from 'reactstrap';
import * as ROUTES from '../constants/routes';
// Components
import { HeaderImage, LayoutSection, PageHeader, SubHeaderText, Paragraph, Button, CounterSection, ImgReel, RouteAnimation } from '../components';

function AboutUsPage({ animation, children, ...restProps }) {
	return (
		<>
			<PageHeader>About Us</PageHeader>
			<RouteAnimation animation={animation ? animation : ''}>
				<LayoutSection>
					<Col className='mx-auto col-11 my-5'>
						{/* <HeaderImage styles={{ backgroundPosition: 'top', height: '' }} image='/assets/images/pageAssets/about-us/AD-GC.jpeg' alt='Adam and Giancarlo' /> */}
						<img src='/assets/images/pageAssets/about-us/AD-GC.jpeg' alt='' style={{ width: '100%' }} className='rounded' />
					</Col>
				</LayoutSection>
				<LayoutSection className=''>
					<Col className='col-12 col-md-6 order-0 mt-2'>
						<SubHeaderText>Giancarlo R. Cellini, Esq</SubHeaderText>
						<Paragraph>
							Giancarlo Cellini is an Of Councel attorney with the DOUGHERTY LAW FIRM’S trial team. He started his legal career while still a teenager as an office assistant for a solo
							practitioner.
						</Paragraph>
					</Col>
					<Col className='col-12 col-md-6 order-2 order-md-1 mt-2'>
						<SubHeaderText>Adam T. Dougherty, Esq.</SubHeaderText>
						<Paragraph>
							Adam Dougherty is the founding partner of DOUGHERTY LAW FIRM. He has been involved with the justice system since 1993, first in law enforcement and then as an attorney. Mr.
							Dougherty has tried serious felonies (including multiple 1st Degree Murder Cases) and various different types of personal injury cases. Mr. Dougherty is a member of the
							prestigious Million Dollar Advocates and his mission is to give a voice to the voiceless in a court system that is often stacked against the “little guy.”
						</Paragraph>
					</Col>
					<Col className='col-12 col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2 mb-5'>
						<Button isNavLink to={ROUTES.GIANCARLO_BIO}>
							Learn More
						</Button>
					</Col>
					<Col className='col-12 col-md-6 d-flex justify-content-center align-items-center order-3 mb-5'>
						<Button isNavLink to={ROUTES.ADAM_BIO}>
							Learn More
						</Button>
					</Col>
				</LayoutSection>
				<LayoutSection>
					<Col className='col-12 col-md-11 mx-auto mt-2 mb-5 my-md-4'>
						<Paragraph>
							The <strong>DOUGHERTY LAW FIRM</strong> is dedicated to helping their clients recover for injuries they have suffered due to the wrongful conduct of others. While trial
							attorneys have been ridiculed by the insurance industry and politicians, we are PROUD to call ourselves trial attorneys.
						</Paragraph>
						<Paragraph>
							We believe that people who make up our juries are smart enough to figure out what a truly frivolous lawsuit is and which lawsuits have merit. The TRUTH is, insurance
							companies and the politicians who helped them push through Tort Reform have gotten much richer. While at the same time the average insurance claimant has to almost go to
							war with an insurance company just to get a fair settlement. In fact, studies show that the insurance rates in the states that have passed Tort Reform have gone up
							significantly.
						</Paragraph>
						<Paragraph>We believe what we do matters. Trial Lawyers have made both the cars we drive and the toys our children play with safer!</Paragraph>
					</Col>
				</LayoutSection>
				<CounterSection />
				<ImgReel />
			</RouteAnimation>
		</>
	);
}

export default AboutUsPage;
