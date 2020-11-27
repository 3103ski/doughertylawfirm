// React
import React from 'react';
import { Col, Row } from 'reactstrap';
// Components
import { LayoutSection, PageHeader, Paragraph, HeaderText, CounterSection, ImgReel, RouteAnimation } from '../components';

function CrashesNotAccidentsPage(props) {
	const imgDir = 'assets/images/pageAssets/crashes-not-accidents/';
	return (
		<>
			<PageHeader>crashes not accidents</PageHeader>
			<RouteAnimation>
				<LayoutSection>
					<HeaderText>why words matter</HeaderText>
					<Col className='col-12 col-md-9'>
						<Paragraph>
							In both Arizona and Florida, when the police show up to a motor vehicle crash they fill out a “crash report” not an accident report. “Accident” is a DEFENSE word embraced
							by the insurance industry that strengthens their case. The word “accident” adds the element of “intent” which is not an element of negligence (more on that below). Personal
							injury attorneys do a great disservice to their clients when they buy into the idea that their client had an accident.
						</Paragraph>
						<Paragraph>
							Accidents don’t just happen… unless by a true act of God. As personal Injury attorneys are not “accident” attorneys we are “negligence” attorneys. What’s negligence? That’s
							a funny word that’s not used in everyday conversation, but it means someone was not “reasonably safe” or “careful.”
						</Paragraph>
						<Paragraph>
							Here is why calling your crash or injury an “accident” is bad for you. Accidents are no one’s fault… they just happened. Act of God types of things, i.e. lightning strike.
						</Paragraph>
						<Paragraph>
							The legal standard for prevailing in an injury case is that the Defendant was “negligent”, i.e. they were not reasonably safe or careful, that the tortfeasor (person
							causing the injury) did something wrong or failed to do something that a reasonable person in a similar circumstance would have done.
						</Paragraph>
						<Paragraph>
							Reasonable people stop at red lights and stop signs. When someone chooses to run a stop sign or red light and crash into someone or something they are negligent!
						</Paragraph>
						<Paragraph>A reasonable driver doesn’t text on his phone while driving. When someone texts on their phone while driving and causes a crash they are negligent!</Paragraph>
						<Paragraph>
							A reasonable property owner makes sure his property is safe and there are no dangerous conditions. Property owners that never inspect their property and don’t fix easily
							identifiable and dangerous conditions are negligent.
						</Paragraph>
						<Paragraph>Just ask Siri or Google what an accident is.</Paragraph>
						<Paragraph>“An unfortunate incident that happens unexpectedly an unintentionally typically resulting in damage and injury.”</Paragraph>
						<Paragraph>“An event that happens by chance and that is without apparent or deliberate cause?”</Paragraph>
						<Paragraph>Do either of those definitions line up with people speeding, running red lights or stop signs, or failing to keep their property safe? Of course not.</Paragraph>
						<Paragraph>
							We handle cases where it was “foreseeable” that the defendant’s conduct would lead to someone getting injured. In other words, the defendants acted in such a way that it
							was foreseeable they were going to cause injury and hurt someone through their actions or inactions.
						</Paragraph>
						<Paragraph>
							The insurance industry loves the word “accident” because “accident” means, unintentional, i.e. lacking “intent.” “I’m sorry I didn’t mean to hurt you.” Every school yard
							kid by the age of 4-5 knows that if they tell their teacher, mom or dad it was an “accident” that they didn’t mean to do it, it is more likely to result in reduced
							consequences or no consequences at all, MUSIC TO THE INSURANCE COMPANIES EARS.
						</Paragraph>
					</Col>
					<Col className='col-12 col-md-3 sideImages'>
						<Row>
							<Col className='col-6 col-md-12 mb-4'>
								<img src={`${imgDir}img-1.png`} alt='crashes not accidents' style={{ width: '100%', borderRadius: '10px' }} />
							</Col>
							<Col className='col-6 col-md-12 mb-4'>
								<img src={`${imgDir}img-2.jpg`} alt='crashes not accidents' style={{ width: '100%', borderRadius: '10px' }} />
							</Col>
							<Col className='col-6 col-md-12 mb-4'>
								<img src={`${imgDir}img-3.png`} alt='crashes not accidents' style={{ width: '100%', borderRadius: '10px' }} />
							</Col>
							<Col className='col-6 col-md-12 mb-4'>
								<img src={`${imgDir}img-4.png`} alt='crashes not accidents' style={{ width: '100%', borderRadius: '10px' }} />
							</Col>
						</Row>
					</Col>
					<Col className='col-12'>
						<HeaderText>why do we use the term "car accident"?</HeaderText>
						<Paragraph>
							When a plane crash occurs, we don’t call it a “plane accident.” So why then do we use the term “accident” to describe a car crash? The answer is more sinister and
							premeditated than you might guess…
						</Paragraph>
						<Paragraph>
							According to Vox, “Using the word ‘accident’ to describe car crashes might seem natural. At the early turn of the 20th Century, automobiles began sharing the roads with
							pedestrians and horse drawn buggies and well… there were collisions. But the early coverage of crashes in the 1910s and 1920s depicted automobiles as dangerous killing
							machines — and their violent collisions were seldom called accidents.
						</Paragraph>
						<Paragraph>
							Prior to formal traffic laws, judges most always ruled that the vehicle (and thus the driver) was to blame for any collision. If a pedestrian was hit, it was always the
							fault of the car. This legal pressure led various industry groups and automakers to lobby for law changes which forced pedestrians off the streets and onto designated
							crosswalks.
						</Paragraph>
						<Paragraph>
							The auto industry’s next move was to regulate how the public heard about vehicle collisions. To accomplish this, the National Automobile Chamber of Commerce created an open
							wire service for newspapers wherein reporters could get an entire article printed if they sent in basics regarding a car collision. These articles would largely shift the
							blame for the crash onto pedestrians rather than the car. It was here where the term “accident” first began to be widely used.
						</Paragraph>
						<Paragraph>
							The phrase “car accident” took off for years, but in the 1960’s the first director of the National Highway Traffic Safety Administration, William Haddon, made anyone who
							used the word “accident” in one of their meetings to put a dime in the jar. Haddon must have been a firm believer of power in words.
						</Paragraph>
						<Paragraph>
							In 1994, the same administration asked that people stop using the word “accident,” and in 2013 the police departments of New York City and San Francisco quit using the term
							altogether in their collision reports.
						</Paragraph>
						<HeaderText>avoiding the "accident" word</HeaderText>
						<Paragraph>
							Despite the efforts of Haddon and many advocacy groups, the phrase “car accident” continues to be widely used today and why certain organizations are trying to spread
							awareness. One group has even launched the Crash Not Accident campaign asking people to pledge that they will stop using the word “accident” and replace it with “crash.”
							Supporters have been using the hashtag #crashnotaccident to remind reporters and the public of the importance of the word change.
						</Paragraph>
						<Paragraph>
							If you or a loved one has been involved in a motor vehicle crash or were injured on someone’s property by a dangerous condition then you know it was no “accident.” When a
							semi-truck driver decides to drive fatigued and over the federally mandated hours of service, falsifies his/her log books to stay on the road and consequently
							catastrophically injures or kills someone, that’s no “accident.” The major role that negligence plays in most car crashes is a point that our lawyers have been aggressively
							fighting for and defending for years.
						</Paragraph>
					</Col>
				</LayoutSection>
				<CounterSection />
				<ImgReel />
			</RouteAnimation>
		</>
	);
}

export default CrashesNotAccidentsPage;
