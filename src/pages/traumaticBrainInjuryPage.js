// React
import React from 'react';
import { NavLink } from 'react-router-dom';
// Components
import { PageHeader, HeaderImage, LayoutSection, HeaderText, Paragraph, SubHeaderText, BulletItem, BulletList, HoverServices, ImgReel, RouteAnimation } from '../components';
import { Col } from 'reactstrap';
// static
import * as ROUTES from '../constants/routes';

function TraumaticBrainInjuryPage(props) {
	return (
		<>
			<PageHeader>traumatic brain injury</PageHeader>
			<RouteAnimation animation={props.animation ? props.animation : ''}>
				<LayoutSection>
					<HeaderImage image='/assets/images/pageAssets/traumatic-brain-injury/hdr.jpeg' alt='traumatic brain injury' />

					<Col>
						{/* ************************************ */}
						{/* ************************************ */}
						<HeaderText>traumatic brain injury</HeaderText>
						<Paragraph>
							A traumatic brain injury (TBI) is a type of catastrophic injury that can impair its victims for years, possibly even the rest of their lives. Oftentimes these injuries are
							missed by primary care physicians and chiropractors that don’t recognize or otherwise miss symptoms. This leaves patients struggling to find answers for their memory
							issues, decision making and lack of planning that used to be rock solid.
						</Paragraph>
						<Paragraph>
							Sometimes victims of a TBI may not be capable of pursuing action, their families have become frustrated on their behalf, and the defendant will deny they played any role in
							this tragedy. You will need an attorney that is well-versed in identifying these issues, as well as have familiarity with these proceedings. Making sure you hire an
							attorney that is capable of handling all aspects of these types of cases is critical so that you and your family can focus your energy on recovering.
						</Paragraph>
						<Paragraph>
							For many years, the <strong>DOUGHERTY LAW FIRM</strong> has been litigating traumatic brain injury cases with successful results. We have the knowledge and skills necessary
							to sort through the complicated details and build a solid argument. More importantly, we have worked with doctors that have extensive experience in this area and can help
							you or your loved one start putting the pieces of their life back together.
						</Paragraph>
						<Paragraph>If you or someone you love has suffered a brain injury, call us today and schedule a free consultation.</Paragraph>
						{/* Section Two */}
						<HeaderText>building a case</HeaderText>
						<Paragraph>
							As our firm focuses on traumatic injuries, we have handled numerous lawsuits from accidents that resulted in brain injuries to our clients, including truck collisions and
							falls. You need an experienced attorney who is familiar with these numerous areas of law in order to successfully litigate these claims from all angles.
						</Paragraph>
						{/* ************************************ */}
						{/* ************************************ */}
						<SubHeaderText>Many of our brain injury cases have involved:</SubHeaderText>
						<BulletList>
							<BulletItem>
								<NavLink to={ROUTES.AMNESIA}>Amnesia</NavLink>
							</BulletItem>
							<BulletItem>
								<NavLink to={ROUTES.CONCUSSION}>Concussions</NavLink>
							</BulletItem>
							<BulletItem>
								<NavLink to={ROUTES.LOSS_OF_CONSCIOUSNESS}>Loss Of Consciousness</NavLink>
							</BulletItem>
							<BulletItem>
								<NavLink to={ROUTES.MILD_TRAUMATIC_BRAIN_INJURY}>Mild Traumatic Brain Injury</NavLink>
							</BulletItem>
							<BulletItem>
								<NavLink to={ROUTES.SKULL_FRACTURES}>Skull Fractures</NavLink>
							</BulletItem>
							<BulletItem>
								<NavLink to={ROUTES.SPORTS_RELATED_INJURY}>Sports Related Brain Injuries</NavLink>
							</BulletItem>
						</BulletList>
						{/* ************************************ */}
						{/* ************************************ */}
						<HeaderText>resources for traumatic brain injuries</HeaderText>
						<BulletList>
							<BulletItem>
								<a href='https://www.brainline.org/'>https://www.brainline.org/</a>
							</BulletItem>
							<BulletItem>
								<a href='https://www.cdc.gov/traumaticbraininjury/'>https://www.cdc.gov/traumaticbraininjury/</a>
							</BulletItem>
							<BulletItem>
								<a href='https://www.ninds.nih.gov/Disorders/All-Disorders/Traumatic-Brain-Injury-Information-Page'>
									https://www.ninds.nih.gov/Disorders/All-Disorders/Traumatic-Brain-Injury-Information-Page
								</a>
							</BulletItem>
							<BulletItem>
								<a href='http://www.tbinrc.com/'>http://www.tbinrc.com/</a>
							</BulletItem>
							<BulletItem>
								<a href='https://www.neuroskills.com/brain-injury/'>https://www.neuroskills.com/brain-injury/</a>
							</BulletItem>
							<BulletItem>
								<a href='https://www.caregiver.org/traumatic-brain-injury'>https://www.caregiver.org/traumatic-brain-injury</a>
							</BulletItem>
						</BulletList>
						<Paragraph>
							We have built relationships with a large network of medical and legal professionals whom we can call upon as expert witnesses. Our familiarity with medical terminology and
							the science of brain injury treatment allow us to explain to a jury how the trauma occurred and why the defendant is at fault.
						</Paragraph>
						{/* ************************************ */}
						{/* ************************************ */}
						<HeaderText>get help during this difficult time</HeaderText>
						<Paragraph>
							Above all else, DOUGHERTY LAW FIRM is here to help. We understand that this is a sensitive and troubling issue. We maintain strict confidentiality out of respect to our
							clients’ privacy and pursue the case with their desires and concerns in mind.
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

export default TraumaticBrainInjuryPage;
