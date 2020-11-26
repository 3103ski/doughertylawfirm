// React
import React from 'react';
// Components
import { PageHeader, LayoutSection, ImageSlider, HeaderText, Paragraph, SubHeaderText, BulletItem, BulletList, HoverServices, ImgReel, RouteAnimation } from '../components';
import { Col } from 'reactstrap';

function PremiseLiabilityPage(props) {
	const slides = [
		{
			imageURL: '/assets/images/pageAssets/premise-liability/s1.jpg',
		},
		{
			imageURL: '/assets/images/pageAssets/premise-liability/s2.png',
		},
		{
			imageURL: '/assets/images/pageAssets/premise-liability/s3.jpg',
		},
	];
	return (
		<>
			<PageHeader>premise liability</PageHeader>
			<RouteAnimation animation={props.animation ? props.animation : ''}>
				<LayoutSection>
					<Col>
						<ImageSlider slides={slides}></ImageSlider>
						<HeaderText>premise liability attorneys</HeaderText>
						<Paragraph>
							Property owners have certain obligations they must meet under local, state and federal laws. In fact, in some states a property owner has a non-delegable duty to keep
							his/her property in a safe condition. That means the owner is always on the hook, even if it’s his/her tenant is also at fault. While these laws vary, the basic concept is
							that property owners must keep their land and buildings safe for authorized visitors and those with business there.
						</Paragraph>
						<Paragraph>
							When property choose not to keep their property and buildings safe, innocent people often suffer injuries, sometimes catastrophic ones. The{' '}
							<strong>DOUGHERTY LAW FIRM</strong> IS experienced at holding property owners accountable for their negligence.
						</Paragraph>
						<Paragraph>
							Other premises cases can consist of playground cases or nursing home cases that involve staff not paying attention and/or providing the services that people pay for.
						</Paragraph>
						<Paragraph>We're available to speak to you about your claim and evaluate your case.</Paragraph>
						<SubHeaderText>Example of Premise Liability Cases:</SubHeaderText>
						<BulletList>
							<BulletItem>Assault & Battery</BulletItem>
							<BulletItem>Assisted Living Facility & Nursing Home</BulletItem>
							<BulletItem>Slip and Falls & Trip and Falls</BulletItem>
							<BulletItem>Staircase Falls</BulletItem>
							<BulletItem>Elecricity and Electrocution</BulletItem>
							<BulletItem>Dangerous and Uneven Sidewalks</BulletItem>
							<BulletItem>Insufficient Security</BulletItem>
							<BulletItem>Elevator Mis-leveling or Drops</BulletItem>
							<BulletItem>Negligent Supervision (daycare, after school programs)</BulletItem>
						</BulletList>
						<SubHeaderText>Injuries often caused in Premise Liability Cases:</SubHeaderText>
						<BulletList>
							<BulletItem>Broken Bones</BulletItem>
							<BulletItem>Electric Shocks</BulletItem>
							<BulletItem>Burns</BulletItem>
							<BulletItem>Spinal Cord Injuries</BulletItem>
							<BulletItem>Cuts or Amputations</BulletItem>
						</BulletList>
						<Paragraph>Don’t suffer in silence, call us and let us be your voice in this difficult and traumatic time.</Paragraph>
						<Paragraph>
							Our premises liability lawyers will investigate your injury to determine its cause, and then pursue compensation on your behalf. Premises liability covers a wide range of
							case types, and it’s important when researching prospective lawyers to find an attorney with experience in the area that is most relevant to your claim.
						</Paragraph>
						<Paragraph>
							Contact the experienced attorneys at the <strong>DOUGHERTY LAW FIRM</strong> for your free consultation .
						</Paragraph>
					</Col>
				</LayoutSection>
				{/* *********************************** */}
				{/* *********************************** */}
				<HoverServices />
				<ImgReel />
			</RouteAnimation>
		</>
	);
}

export default PremiseLiabilityPage;
