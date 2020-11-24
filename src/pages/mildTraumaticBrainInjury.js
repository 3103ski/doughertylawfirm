import React from 'react';
import * as ROUTES from '../constants/routes';
import { Col } from 'reactstrap';
import { LayoutSection, PageHeader, HeaderText, Paragraph, SubHeaderText, HeaderImage, BulletItem, BulletList } from '../components';

function MildTraumaticBrainInjuryPage(props) {
	return (
		<>
			<PageHeader>mild traumatic brain injuries</PageHeader>
			<LayoutSection>
				<HeaderImage image={`${ROUTES.ASSETS}/mild-traumatic-brain-injuries/hdr.jpeg`} src='mtb injuries header image' />
				<Col>
					<Paragraph>
						According to the CDC, in 2014 there were approximately 2.87 million TBI emergency department visits in the United States, including 837,000 occurring among children. In 2014,
						falls were the leading cause of traumatic brain injuries accounting for almost half (48%). Being struck by or against an object was second at 17%.
					</Paragraph>
					<Paragraph>
						Mild traumatic brain injuries are generally classified as concussions by physicians. They are described as “mild” for one main reason, they are not life threatening. Mild
						traumatic brain injuries are still serious and medical attention should be sought immediately. A jolt, bump or blow to the head can all cause a concussion, just as falls and
						blows to the body can. The CDC reports that there has been an increase of approximately 50% in the concussion rate per 100,000 people from 2001 to 2010.
					</Paragraph>

					{/* ****************************** */}
					<HeaderText>signs and symptoms of a mild traumatic brain injury</HeaderText>
					<Paragraph>
						Those who experience a concussion or mild traumatic brain injury typically fully recover quickly. For some individuals, the signs and symptoms can last for days, weeks, and
						even longer. In some patients, the symptoms never resolve. Recovery tends to be slower for young children, teens, and the elderly.
					</Paragraph>

					{/* ****************************** */}
					<HeaderText>the signs and symptoms of a mild traumatic brain injury generally fall into 4 categories</HeaderText>
					<Col md={11} className='mx-auto'>
						<SubHeaderText>Memory and Thinking</SubHeaderText>
						<Paragraph>
							Those who have experienced a mild traumatic brain injury may have difficulty remembering new information and difficulty concentrating. They also may feel slowed down and
							have difficulties thinking clearly.
						</Paragraph>
						<SubHeaderText>Emotions and Mood</SubHeaderText>
						<Paragraph>
							Those who have recently suffered a mild traumatic brain injury may be more emotional than they normally are. They may also experience irritability and anxiety as well as
							feelings of sadness and nervousness.
						</Paragraph>
						<SubHeaderText>Physical</SubHeaderText>
						<Paragraph>
							A mild traumatic brain injury may have physical symptoms such as headache, dizziness, fuzzy and/or blurred vision, and nausea. Physical symptoms may also include trouble
							balancing, lack of energy, and sensitivity to light and noise.
						</Paragraph>
						<SubHeaderText>Sleep</SubHeaderText>
						<Paragraph>Those suffering from a mild traumatic brain injury may sleep less than normal, more than normal, or have difficulty falling asleep.</Paragraph>
					</Col>
					{/* ******************************** */}
					<HeaderText>recovering from a mild traumatic brain injury</HeaderText>
					<Paragraph>
						Individuals who have experienced a mild traumatic brain injury are at greater risk of experiencing a similar injury in the future. It is important to take the time to fully
						recover before carrying on with your life. Without the proper time to heal, the injury may become worse over time. If you feel that you have recovered and return to your daily
						activities only to find that the symptoms return, you have not fully recovered and you should rest and consult with your doctor.
					</Paragraph>
					{/* ************** */}
					<SubHeaderText>Tips to Help You Recover</SubHeaderText>
					<BulletList>
						<BulletItem>It is important to make sure you get polenty of rest during the day and extra sleep at night.</BulletItem>
						<BulletItem>Avoid activities that require high levels of focus and concentration.</BulletItem>
						<BulletItem>Avoid physical activity.</BulletItem>
						<BulletItem>Do not operate heavy machinery, drive a vehicle, or ride a bike until approved by your doctor.</BulletItem>
						<BulletItem>
							Do not take drugs or drink alcohol. Taking drugs no prescribed to you or drinking alcohol may actually further injur you, so it's important to speak with your doctor and
							follow their advices.
						</BulletItem>
					</BulletList>
					<HeaderImage
						image={`${ROUTES.ASSETS}/mild-traumatic-brain-injuries/banner.jpg`}
						alt='concussions signs'
						styles={{ maxWidth: '650px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', borderRadius: '10px' }}
					/>
				</Col>
			</LayoutSection>
		</>
	);
}

export default MildTraumaticBrainInjuryPage;
