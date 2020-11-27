import React from 'react';
import * as ROUTES from '../constants/routes';
import { Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { LayoutSection, PageHeader, HeaderText, Paragraph, SubHeaderText, HeaderImage, BulletItem, BulletList, HoverServices, RouteAnimation } from '../components';

function SkullFracturesPage(props) {
	return (
		<>
			<PageHeader>skull fractures</PageHeader>
			<RouteAnimation>
				<LayoutSection>
					<HeaderImage image={`${ROUTES.ASSETS}/skull-fractures/hdr.jpeg`} alt='skull fractures header image' />
					<Col>
						{/* ************************************************ */}
						<HeaderText>skull fractures generally fall into one of the following categories</HeaderText>
						<Col md={11} className='mx-auto'>
							<SubHeaderText>Simple Fractures</SubHeaderText>
							<Paragraph>A simple skull fracture involves a break in the skull without damage to the skin surrounding the fracture.</Paragraph>

							<SubHeaderText>Linear Skull Fractures</SubHeaderText>
							<Paragraph>
								Linear skull fractures are breaks in the skull that closely resemble a thin line. Distortion, splintering, or depression of the bone matter is not present in linear
								skulls fractures.
							</Paragraph>

							<SubHeaderText>Depressed Skull Fractures</SubHeaderText>
							<Paragraph>
								When a skull is crushed or subjected to blunt force it can result in an inward breaking of the bone. This is referred to as a depressed skull fracture.
							</Paragraph>

							<SubHeaderText>Compound Fractures</SubHeaderText>
							<Paragraph>
								A compound skull fracture refers to a skull fracture that includes a loss of skin or a break in the skin accompanied by splintering of the skull beneath.
							</Paragraph>

							<SubHeaderText>Fractures at the Base of the Skull</SubHeaderText>
							<Paragraph>Fractures at the base of the skull involve leaking of the cerebrospinal fluid.</Paragraph>
						</Col>

						{/* ********************************************** */}
						<HeaderText>diagnosis and treatment of a skull fracture</HeaderText>
						<Paragraph>
							Generally, skull fractures are diagnosed when a patient undergoes computed tomography (CT) testing. A CT scan is more reliable for diagnosing a skull fracture than is
							magnetic resonance imaging (MRI). An MRI is better suited to diagnose traumatic brain injuries. Some skull fractures do not require the assistance of imaging for a
							diagnosis as the fracture is quite evident by visual and physical examination.
						</Paragraph>
						<Paragraph>
							Skull fractures by their very nature accompany traumatic brain injuries. The skulls is the structure that houses and protects the brain from injury. Therefore, fracturing
							of the skull can be a very serious medical condition. In many circumstances a person that experiences a skull fracture may undergo brain surgery.
						</Paragraph>

						{/* ************************ */}
						<SubHeaderText>Symptoms of a Skull Fracture:</SubHeaderText>
						<BulletList>
							<BulletItem>Bleeding from the wound</BulletItem>
							<BulletItem>Bruising under the eyes or behind the ears</BulletItem>
							<BulletItem>Changes in the pupils of the eyes</BulletItem>
							<BulletItem>Slurred speech / balancing issues </BulletItem>
							<BulletItem>Bloody or clear fluid draining from the ears or nose.</BulletItem>
							<BulletItem>Swelling of the head or site of injury.</BulletItem>
						</BulletList>
						{/* ************************* */}
						<HeaderText>brain injury attorneys</HeaderText>
						<Paragraph>
							The <strong>DOUGHERTY LAW FIRM</strong> has handled numerous personal injury cases involving skull fractures. When an individual suffers a skull fracture in a slip and
							fall,
							<NavLink to={ROUTES.TRUCKING}> truck crash</NavLink>, <NavLink to={ROUTES.MOTOR_VEHICLE_CRASH}>motor vehicle crash</NavLink>, or while{' '}
							<NavLink to={ROUTES.SPORTS_RELATED_INJURY}>participating in sports</NavLink>, they may be entitled to monetary compensation if it can be shown that another person’s
							negligent conduct or intentional act caused the skull fracture. If you or a loved one have suffered a skull fracture and you believe that another person is to blame, call
							our experienced brain injury attorneys today to schedule a consultation.
						</Paragraph>
					</Col>
				</LayoutSection>
				{/* *********************************** */}
				{/* *********************************** */}
				<HoverServices />
			</RouteAnimation>
		</>
	);
}

export default SkullFracturesPage;
