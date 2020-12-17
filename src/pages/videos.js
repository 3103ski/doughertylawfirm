import React from 'react';

import { LayoutSection, PageHeader, Vimeo, Paragraph } from '../components';
import { Card, CardHeader, CardBody, Col } from 'reactstrap';

const VideosPage = (props) => {
	const RenderVideoCard = (props) => {
		const headerStyle = {
			backgroundColor: 'var(--secondary-dark)',
			color: 'white',
			textAlign: 'center',
			fontSize: '1.3rem',
		};

		const textStyle = {
			marginBottom: '10',
		};

		const cardStyle = {
			boxShadow: '4px 6px 14px rgba(148, 148, 148, 0.26)',
		};

		const vidLink = `https://www.youtube.com/embed/${props.videoNumber}`;
		return (
			<Col className='col-12 col-md-6 mt-5'>
				<Card style={cardStyle}>
					<CardHeader style={headerStyle}>{props.title}</CardHeader>
					<CardBody>
						<Paragraph style={textStyle}>
							{props.children}
						</Paragraph>
						<iframe
							width='560'
							height='315'
							src={vidLink}
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowfullscreen></iframe>
					</CardBody>
				</Card>
			</Col>
		);
	};
	return (
		<>
			<PageHeader>videos</PageHeader>
			<LayoutSection containerStyle={{ paddingBottom: '40px' }}>
				<RenderVideoCard
					title='Know The Law Part 1'
					videoNumber='cUvBp3Nnv4o'>
					Gives an overview of what Bodily Injury & Property Damage
					coverage are. Florida is the only state that does not
					require bodily injury coverage.
				</RenderVideoCard>
				<RenderVideoCard
					title='Know The Law Part 2'
					videoNumber='afuZOtHCGjg'>
					This video gives a basic overview of Uninsured Motorist (UM)
					& Under-Insured Motorist (UIM) coverage and the importance
					of carrying this coverage in Florida. 26.7% of Florida
					drivers are uninsured!
				</RenderVideoCard>
				<RenderVideoCard
					title='Know The Law Part 3'
					videoNumber='F0lo34Vh4wI'>
					This video gives a basic over view of Personal Injury
					Protection (PIP) benefits and tries to dispel some of the
					common misconceptions about this particular coverage.
				</RenderVideoCard>
				<RenderVideoCard
					title='Know The Law Part 4'
					videoNumber='m2FV9gXskik'>
					This video is an overview of Med Pay and what it covers in a
					motor vehicle crash/accident.
				</RenderVideoCard>
				<RenderVideoCard
					title='Know The Law Part 5'
					videoNumber='DhSNMz0OwU4'>
					This video gives an overview of Insurance Subrogation Rights
					and how that can affect your personal injury claim.
				</RenderVideoCard>
			</LayoutSection>
		</>
	);
};
export default VideosPage;
