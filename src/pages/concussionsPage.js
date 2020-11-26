import React from 'react';
import * as ROUTES from '../constants/routes';
import { Col } from 'reactstrap';
import { LayoutSection, HeaderImage, PageHeader, Paragraph, HeaderText, HoverServices, RouteAnimation } from '../components';

function ConcussionsPage(props) {
	return (
		<>
			<PageHeader>concussions</PageHeader>
			<RouteAnimation animation={props.animation ? props.animation : ''}>
				<LayoutSection>
					<HeaderImage image={`${ROUTES.ASSETS}/concussions/hdr.png`} alt='concussions header image' />

					{/* ************************************ */}
					<HeaderText>what is a concussion?</HeaderText>
					<Paragraph>
						A concussion is a mild traumatic brain injury that results from a blow to the head or violent shaking of the head. Concussions are not uncommon and are often sustained in car
						crashes and slip, trip, and fall accidents.
					</Paragraph>
					<HeaderImage
						image={`${ROUTES.ASSETS}/concussions/banner.png`}
						alt='concussions signs'
						styles={{ maxWidth: '650px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}
					/>
					<Paragraph>
						Concussions are generally mild and most people diagnosed with a concussion fully recover. Most people do not experience a loss of consciousness when a concussion injury occurs.
					</Paragraph>
					<Paragraph>
						Roughly 10% of concussion victims experience post-concussion syndrome which can last more than a year after the onset of the concussion. The symptoms of post-concussion
						syndrome include those of a mild concussion and new symptoms such as behavioral changes, emotional changes, light and noise sensitivity, irritability, anxiety, insomnia,
						fatigue, and dizziness. Symptoms vary in victims.
					</Paragraph>

					{/* ********************************** */}
					<HeaderText>can i bring a claim or lawsuit after sustaining a concussion</HeaderText>
					<Paragraph>
						Have you or a loved one suffered a concussion in a car wreck, crash, or a slip, trip, or fall? If you were diagnosed with a concussion after an accident that was not your fault
						or while on someone else’s property, you should seek justice for the community, holding the wrongdoers accountable.
					</Paragraph>
					<Paragraph>
						After seeking medical attention for your injuries it is crucial that you speak with a brain injury attorney that will investigate the facts and circumstances surrounding the
						incident that led to your concussion and deal with the insurance company on your behalf so that you can focus on your recovery.
					</Paragraph>
					<Paragraph>
						In order to make a claim for damages after sustaining a concussion you must be diagnosed by a medical doctor that believes the concussion was a result of the incident for which
						you want to file a lawsuit. Further, in order to file a personal injury lawsuit after being diagnosed with a concussion, you must have been injured as the result of another’s
						negligent or intentional conduct and be able to prove it. If you were diagnosed with a concussion and you feel that justice has not yet been done, contact a an experienced
						concussion attorney today to discuss your options, including filing a lawsuit.
					</Paragraph>

					{/* ********************************** */}
					<HeaderText>what type of attorney do i need if i suffer a concussion?</HeaderText>
					<Paragraph>
						Generally, you will want to retain an experienced attorney who focuses on personal injury, specifically brain injuries. Personal injury lawsuits involving concussions are
						typically complex and the most difficult issue with claiming damages for a concussion injury is that the symptoms of a concussion can be vague and reasonable physicians can
						differ in their opinion as to whether a patient, in fact, has sustained a concussion. A sophisticated concussion attorney will know how to present the evidence in a clear and
						convincing manner which will give you the greatest chance of justice for your claim.
					</Paragraph>

					{/* ********************************** */}
					<HeaderText>our concussion personal injury practice</HeaderText>
					<Paragraph>
						The <strong>DOUGHERTY LAW FIRM</strong> has extensive, in depth knowledge and practical experience handling even the most complex of concussion injury cases. We would be happy
						to meet with you to discuss your case and explore your options for recovering that you may be entitled to recover in a settlement or jury verdict.
					</Paragraph>
				</LayoutSection>
				{/* *********************************** */}
				{/* *********************************** */}
				<HoverServices />
			</RouteAnimation>
		</>
	);
}

export default ConcussionsPage;
