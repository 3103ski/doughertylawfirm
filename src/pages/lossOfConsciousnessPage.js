import React from 'react';
import * as ROUTES from '../constants/routes';
import { Col } from 'reactstrap';
import { LayoutSection, PageHeader, HeaderText, Paragraph, SubHeaderText, HeaderImage, HoverServices } from '../components';

function LossOfConsciousnessPage(props) {
	return (
		<>
			<PageHeader>loss of consciousness</PageHeader>
			<LayoutSection>
				<HeaderImage image={`${ROUTES.ASSETS}/loss-of-consciousness/hdr.png`} />
				<Col>
					{/* ****************************** */}
					<HeaderText>loss of consciousness</HeaderText>
					<Paragraph>
						The consciousness of an individual can change in several ways when an event or injury interferes with brain activity that allows for awareness. One of the most common issues
						seen by doctors is altered levels of consciousness. Up to 5% of admissions to emergency rooms are related to altered levels of consciousness. Consciousness is a spectrum that
						ranges from fully awake and aware to deep coma.
					</Paragraph>

					{/* ****************************** */}
					<HeaderText>the following conditions are included in altered levels of consciousness:</HeaderText>
					<Col md={10} className='mx-auto'>
						<SubHeaderText>Confusion</SubHeaderText>
						<Paragraph>
							When a person is confused, they are unable to properly process what is going on in their surroundings. Drowsiness and apathy are the most noticeable signs of confusion. A
							confused person may be disoriented as to where they are or as to time and duration of events. When confusion is severe, a person will be unable to respond to more than a
							few simple commands.
						</Paragraph>
						<SubHeaderText>Delirium</SubHeaderText>
						<Paragraph>
							Delirium is a complicated problem that is common, especially in elderly individuals. Disorientation is the most common sign of delirium. Individuals experiencing delirium
							may not know who they are or may experience hallucinations and delusions. They may also become drowsy.
						</Paragraph>
						<SubHeaderText>Obtundation</SubHeaderText>
						<Paragraph>
							Lower levels of alertness is a common characteristic of this altered level of consciousness. A person experiencing obtundation sleeps much more than they normally would and
							when they awake, they remain confused and drowsy. It may be difficult to keep the person awake and doing so typically requires continuously talking to them or through the
							application of painful stimulation.
						</Paragraph>
						<SubHeaderText>Stupor</SubHeaderText>
						<Paragraph>A state of consciousness where a person can only be aroused by being subjected to repeated and vigorous painful stimulation.</Paragraph>
						<SubHeaderText>Coma</SubHeaderText>
						<Paragraph>
							A coma is a state of consciousness where a person appears to be asleep but they are unable to be awakened. When a person is in a coma reflexes tend to be absent and the
							person’s arms and legs may be rigid. A slowed respiration rate is also common in those in a coma.
						</Paragraph>
					</Col>
					{/* ****************************** */}
					<HeaderText>causes of altered states of consciousness</HeaderText>
					<Paragraph>
						rauma to the brain is a common cause of loss of consciousness and altered states of consciousness. One of the leading causes of death and disability in young adults in the
						United States is traumatic brain injury. There are many types of head injuries that may result in a traumatic brain injury. The most common occurs when the head is caused to
						rapidly accelerate or decelerate. This causes the brain to move inside of the skull and strike the inside of the skull (coup contrecoup). This frequently happens in car crashes
						and slip and falls when people strike their heads.
					</Paragraph>
					{/* ****************************** */}
					<HeaderText>post-consciousness syndrome</HeaderText>
					<Paragraph>
						When concussion symptoms such as dizziness and headaches last for weeks or months after an incident, the victim is suffering from post-concussion syndrome. Usually, concussion
						symptoms disappear soon after an incident, but post-concussion syndrome causes them to last for far longer—typically 3 months, though some cases have been known to go on for
						years. It is important to wait before resuming normal activities when suffering these symptoms as stress will only exacerbate the problem.
					</Paragraph>
					{/* ****************************** */}
					<HeaderText>pursuing a lawsuit</HeaderText>
					<Paragraph>
						Victims who have fallen unconscious after an accident sometimes have difficulty pursuing a lawsuit since they are unaware of the events afterward and often forget what happened
						leading up to the accident.By working with the <strong>DOUGHERTY LAW FIRM</strong> we will investigate your brain injury case and help uncover details that could prove crucial
						to you receiving compensation. Be sure that your attorney has experience gathering evidence and finding expert witness testimony.
					</Paragraph>
				</Col>
			</LayoutSection>
			{/* *********************************** */}
			{/* *********************************** */}
			<HoverServices />
		</>
	);
}

export default LossOfConsciousnessPage;
