import React from 'react';

import { Col } from 'reactstrap';
// Components
import { PageHeader, LayoutSection, ImageSlider, HeaderText, Paragraph, HoverServices, ImgReel, RouteAnimation } from '../components';

function CasesWeHandle(props) {
	const imgDir = '/assets/images/pageAssets/cases-we-handle/slider/';
	const slides = [{ imageURL: `${imgDir}s-3.jpg` }, { imageURL: `${imgDir}s-2.png` }, { imageURL: `${imgDir}s-1.jpg` }];
	return (
		<>
			<PageHeader>Cases We Handle</PageHeader>
			<RouteAnimation animation={props.animation ? props.animation : ''}>
				<LayoutSection>
					<Col className='col-10 mx-auto'>
						<ImageSlider slides={slides} />
					</Col>
				</LayoutSection>
				<LayoutSection className=''>
					<Col className='col-12 d-flex align-items-center justify-content-center mb-5'>
						<img src='/assets/images/icons/law-scale.png' alt='balance' width='100' />
						<h1 style={{ fontSize: '3rem' }}>OUR PROMISE</h1>
					</Col>
					<Col md={6}>
						<Paragraph>
							The <strong>DOUGHERTY LAW FIRM</strong>, P.A. is honest and no nonsense when it comes to our relationship with our clients! We believe that TRUST is the cornerstone of the
							Attorney – Client relationship. That relationship is a two way street and requires the client to be candid and honest about the facts of their case along with their past
							medical history. In turn the attorney is honest and truthful about the merits of the case and the possibility for recovery. Working together is paramount in obtaining fair
							and just compensation.
						</Paragraph>
					</Col>
					<Col md={6}>
						<Paragraph>
							The <strong>DOUGHERTY LAW FIRM</strong>, P.A. will not fabricate, lie or take on representation UNLESS THE POTENTIAL CLIENT IS ACTUALLY INJURED. Being in an accident alone
							doesn’t entitle someone to a monetary recovery, their must be an injury. We WILL NOT take on any matter that is frivolous. We will maintain the highest levels of
							professionalism with the client, insurance adjusters, opposing counsel and the Court.
						</Paragraph>
					</Col>
				</LayoutSection>
				<HoverServices />
				<ImgReel />
			</RouteAnimation>
		</>
	);
}

export default CasesWeHandle;
