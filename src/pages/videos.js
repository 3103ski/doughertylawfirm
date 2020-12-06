import React from 'react';

import { LayoutSection, PageHeader, Vimeo, Paragraph } from '../components';
import { Card, CardHeader, CardBody, Col } from 'reactstrap';

const VideosPage = (props) => {
	const RenderVideoCard = (props) => {
		const link = `https://player.vimeo.com/video/${props.videoNumber}${props.stopAuto ? '' : '?autoplay=1&loop=1&muted=1'}`;

		const headerStyle = {
			backgroundColor: 'var(--secondary-dark)',
			color: 'white',
			textAlign: 'center',
			fontSize: '1.3rem',
		};

		const textStyle = {
			marginBottom: '0',
		};

		const cardStyle = {
			boxShadow: '4px 6px 14px rgba(148, 148, 148, 0.26)',
		};
		return (
			<Col className='col-12 col-md-6 mt-5'>
				<Card style={cardStyle}>
					<CardHeader style={headerStyle}>{props.title}</CardHeader>
					<CardBody>
						<Paragraph style={textStyle}>{props.children}</Paragraph>
						<Vimeo vimeoLink={link} />
					</CardBody>
				</Card>
			</Col>
		);
	};
	return (
		<>
			<PageHeader>videos</PageHeader>
			<LayoutSection containerStyle={{ paddingBottom: '40px' }}>
				<RenderVideoCard title='You Should Know' videoNumber='438353350' stopAuto>
					Some things I have to say about this video or details you should consider while watching it
				</RenderVideoCard>
				<RenderVideoCard title='I Tell Everybody' videoNumber='438353350' stopAuto>
					Some things I have to say about this video or details you should consider while watching it
				</RenderVideoCard>
				<RenderVideoCard title='You Should Know' videoNumber='438353350' stopAuto>
					Some things I have to say about this video or details you should consider while watching it
				</RenderVideoCard>
			</LayoutSection>
		</>
	);
};
export default VideosPage;
