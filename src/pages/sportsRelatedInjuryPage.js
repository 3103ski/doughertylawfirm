import React from 'react';
import * as ROUTES from '../constants/routes';
import { Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { LayoutSection, PageHeader, HeaderText, Paragraph, SubHeaderText, HeaderImage, BulletItem, BulletList, HoverServices } from '../components';

function SportsRelatedInjuryPage(props) {
	return (
		<>
			<PageHeader>sports related brain injuries</PageHeader>
			<LayoutSection>
				<HeaderImage image={`${ROUTES.ASSETS}/sports-related-injuries/hdr.png`} />
				<Col>
					<HeaderText>sports related brain injuries and concussions</HeaderText>
					<Paragraph>
						Athletes are frequently affected by cerebral concussions in both non-contact and contact sports. A cerebral concussion is considered a diffuse brain injury and is an alteration
						of mental status induced by trauma to the head. When trauma results in shaking of the brain (coup contrecoup) it can cause injury to nerve neurons and fibers in the brain which
						can result in a concussion. Medical research indicates that an athlete that has sustained a concussion in a sporting activity is 3 to 5 times more likely to experience another
						concussion at some point.
					</Paragraph>
					<Paragraph>
						When an athlete suffers head trauma, they are asked a series of questions and also asked to perform a series of physical exercises. This is typically performed by trainers and
						physicians and the series of questions and exercises are referred to as the Standardized Assessment of Concussion. It is not always comprehensive enough to diagnose subtle
						changes in mental state.
					</Paragraph>
					<Paragraph>
						Fatalities are infrequent in sports, however, when they do occur the cause is most often a traumatic brain injury. Sports brain injuries account for approximately 21 percent of
						head injuries among adolescents and children in the United States.
					</Paragraph>
					<Paragraph>
						A traumatic brain injury is a disruption of normal functioning of the brain which is caused by a jolt or blow to the head or an object penetrating the skull. The symptoms
						associated with traumatic brain injuries are classified as mild, moderate, and severe. Mild cases of TBI generally result in brief changes in a person’s mental state, while
						moderate to severe brain injuries can result in an extended period of altered states of consciousness including unconsciousness, coma, and death.
					</Paragraph>
					{/* **************************************** */}
					<HeaderText>number of emergency room visits non-fatal sports related tbi among children 2010-2016</HeaderText>
					<HeaderImage
						image={`${ROUTES.ASSETS}/sports-related-injuries/banner.png`}
						alt='concussions signs'
						styles={{ maxWidth: '650px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}
					/>
					{/* **************************************** */}
					<HeaderText>sports related injury preventions</HeaderText>
					<Paragraph>
						Helmets and headgear should be used while participating in certain sports. The helmet should be approved by the ASTM. Helmets and headgear approved by the ASTM will bear a
						sticker indicating so. There are many styles and sizes of helmets and headgear and for many different types of sports and sporting activities. Before purchasing and using a
						helmet or headgear, it is critical to make sure you are buying the right helmet or headgear for the activity and that it fits properly.
					</Paragraph>
					{/* ********************** */}
					<SubHeaderText>Helmets should always be worn in the following activities:</SubHeaderText>
					<BulletList>
						<BulletItem>Cycling</BulletItem>
						<BulletItem>Baseball</BulletItem>
						<BulletItem>Softball</BulletItem>
						<BulletItem>Hockey</BulletItem>
						<BulletItem>Football</BulletItem>
						<BulletItem>Operating Recreational Vehicles</BulletItem>
						<BulletItem>Horseback Riding</BulletItem>
						<BulletItem>Skiing</BulletItem>
						<BulletItem>Snowboarding</BulletItem>
						<BulletItem>Skateboarding</BulletItem>
						<BulletItem>Wrestling</BulletItem>
						<BulletItem>Riding Motorcycles or Scooters</BulletItem>
					</BulletList>
					<Paragraph>
						Young children should be supervised at all times and should never use sporting equipment or engage in sports that are unsuitable for their age. All rules of sporting activities
						should be followed. Appropriate clothing for a sporting activity should also always be worn while engaging in the activity and it should never interfere with your vision.
					</Paragraph>
					<Paragraph>
						If you or your child are ill or tired you should not participate in a sporting activity as it can lead to injury. Damaged protective gear or sporting equipment should be
						discarded and replaced. Coaches and PE teachers may be held accountable and liable if they do not stress to their athletes the importance of wearing protective gear.
					</Paragraph>
				</Col>
			</LayoutSection>
			{/* *********************************** */}
			{/* *********************************** */}
			<HoverServices />
		</>
	);
}

export default SportsRelatedInjuryPage;
