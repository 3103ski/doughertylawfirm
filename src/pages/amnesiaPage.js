import React from 'react';
import * as ROUTES from '../constants/routes';
import { Col } from 'reactstrap';
import { HeaderImage, LayoutSection, PageHeader, HeaderText, Paragraph, BulletItem, BulletList, SubHeaderText } from '../components';

function AmnesiaPage(props) {
	return (
		<>
			<PageHeader>amnesia</PageHeader>
			<LayoutSection>
				<HeaderImage image={`${ROUTES.ASSETS}/amnesia/hdr.jpg`} alt='amnesia header image' styles={{ maxHeight: '200px' }} />
				<Col>
					{/* ****************************************** */}
					<HeaderText>what is amnesia?</HeaderText>
					<Paragraph>
						Amnesia is a neurological disorder that involves the loss of memory. Generally, the loss of memory is information, experiences, and facts. Movies and television shows portray
						amnesia as a disorder that causes a person to lose their sense of identity, but this is not common to amnesia and rarely occurs.
					</Paragraph>
					<Paragraph>
						Most often, an individual experiencing amnesia knows who they are and are alert, however, they may have difficulties forming new memories, learning new information, and/or
						recalling information and experiences from the past.
					</Paragraph>

					<HeaderText>what causes amnesia</HeaderText>
					<Paragraph>
						A normally functioning memory depends on several parts of the brain. Generally, any injury or disease that may affect the brain can disrupt a normally functioning memory. The
						limbic system of the brain includes the thalamus and the hippocampal formations. These areas of the brain control emotion and the storage, retrieval, and encoding of memories.
						The thalamus and hippocampus formations are located in the center and temporal lobes of the brain.
					</Paragraph>
					<Paragraph>
						Amnesia is typically caused by a neurological disease or lesions to the brain caused by a traumatic accident such as a slip and fall, auto accident, or a sports brain injury.
					</Paragraph>
					{/* *********************************** */}
					<SubHeaderText>Amnesia may also result from other incidents such as:</SubHeaderText>
					<BulletList>
						<BulletItem>Being involved in a traumatic crash or incident</BulletItem>
						<BulletItem>Witnessing a loved one getting seriously injured or killed</BulletItem>
						<BulletItem>Loss of blood flow to the brain</BulletItem>
						<BulletItem>Loss of oxygen</BulletItem>
						<BulletItem>Alcohol abuse</BulletItem>
						<BulletItem>Drug abuse</BulletItem>
						<BulletItem>Other environmental factors</BulletItem>
					</BulletList>
					{/* ************************************ */}
					<HeaderText>how long does amnesia last?</HeaderText>
					<Paragraph>
						Most cases of amnesia are temporary and last between a few seconds and a few hours. The duration generally depends on the severity of trauma the brain was subjected to. With
						moderate and severe traumatic brain injuries, amnesia may persist for week or even months.
					</Paragraph>
					<Paragraph>
						It is extremely rare, however, that a person experiences permanent or total amnesia. In cases of amnesia, procedural memory or memories of habit are typically more preserved
						than long-term and short-term memories such as facts and perceptions of events. When memories are restored, long-term memories usually come back first, then shorter term
						memories return until all of most memories are restored.
					</Paragraph>
					{/* **************************************** */}
					<HeaderText>what is event amnesia</HeaderText>
					<Paragraph>
						Event amnesia refers to a loss of memory surrounding an event or chain of events. When a person suffers a traumatic brain injury in a slip and fall accident, a traumatic car
						wreck, or suffers a sports related brain injury there is a chance that they may be unable to recall the facts and circumstances surrounding the event or chain of events that
						lead to a traumatic brain injury. A person that has witnessed a loved one suffer these types of injury or lose their life in a tragic manner, they too, may experience event
						amnesia.
					</Paragraph>
					{/* **************************************** */}
					<HeaderText>how does amnesia affect a traumatic brain injury lawsuit?</HeaderText>
					<Paragraph>
						When a traumatic brain injury lawsuit is filed and pursued in court, witnesses will be deposed and may eventually testify at trial. The recalling of events by witnesses is
						presented as evidence in personal injury lawsuits. If the plaintiff is unable to be deposed and testify in trial due to event amnesia, a skilled traumatic brain injury lawyer
						will utilize the services of an expert witness to provide a report of findings and testify in court as to the memory of the plaintiff.
					</Paragraph>
					<Paragraph>
						The report and testimony of an expert will also help substantiate the damages of the plaintiff. Although a plaintiff who is experiencing event amnesia could find it a challenge
						to overcome, a knowledgeable and experienced brain injury lawyer will use medical records and expert testimony to prove to the court that the plaintiff, in fact, suffers from
						event amnesia.
					</Paragraph>
				</Col>
			</LayoutSection>
		</>
	);
}

export default AmnesiaPage;
