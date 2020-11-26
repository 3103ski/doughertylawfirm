import React from 'react';
// import * as ROUTES from '../constants/routes';
import { LayoutSection, Button, Paragraph, SubHeaderText, HeaderText, CounterSection, HoverServices, ImgReel, Vimeo, RouteAnimation } from '../components';
import { Col } from 'reactstrap';
import './styles/home.css';
import { Animated } from 'react-animated-css';

export default function HomePage(props) {
	return (
		<RouteAnimation animation={props.animation}>
			{/* ***************** */}
			{/* 	Landing       */}
			{/* ***************** */}
			<LayoutSection fullWidth rowStyle={{ maxWidth: 'var(--container-width)', margin: 'auto' }} containerClass='landing-container' filterColor='#ffffff9e'>
				<div className='bg-filter' />
				<Col md={4} className='ml-auto d-flex flex-column align-items-center'>
					<img src='/assets/images/logo.png' style={{ width: '100%' }} />
					<div className='landing-bullet-list'>
						<div className='landing-bullet'>
							<span className='fas fa-check' />
							<p>Trucking, Brain Trauma, Wrongful Death, Motor Vehicle Crash? We can help.</p>
						</div>
						<div className='landing-bullet'>
							<span className='fas fa-check' />
							<p>FREE Consultations</p>
						</div>
						<div className='landing-bullet'>
							<span className='fas fa-check' />
							<p>CALL NOW (800)231-0323</p>
						</div>
					</div>
					<Button btnStyle={{ border: 'solid 3px var(--primary-dark)', textTransform: 'uppercase' }}>cases we handle</Button>
				</Col>
				<Col md={6}>
					<Vimeo vimeoLink='https://vimeo.com/438353350' />
				</Col>
			</LayoutSection>

			{/* ***************** */}
			{/* 	BANNER        */}
			{/* ***************** */}
			<LayoutSection fullWidth containerStyle={{ backgroundColor: 'var(--primary-dark)' }}>
				<Col md={10} className='banner-1 mx-auto d-flex flex-column align-items-center'>
					<h1>We are the attorneys that try other attorneys' cases</h1>
					<Button>LEARN MORE!</Button>
				</Col>
			</LayoutSection>

			{/* ***************** */}
			{/* 	BIO BANNER    */}
			{/* ***************** */}
			<LayoutSection>
				<Col md={6}>
					<Paragraph>
						The <strong>DOUGHERTY LAW FIRM</strong> is dedicated to helping people who have been injured by others’ carelessness, bad choices, and those who chose to violate the safety
						systems that are designed to protect people.
					</Paragraph>
					<Paragraph>
						If you or a loved one have been injured or killed and someone else is at fault, we can help you. Call us today for a FREE consultation. There is NEVER ANY COST to you if we
						don’t recover in your case!
					</Paragraph>
					<Paragraph>Let us fight for you in this terrible time.</Paragraph>
				</Col>
				<Col md={6} className='d-flex align-items-center justify-content-center'>
					<img src='/assets/images/homePage/office.jpeg' alt='office' style={{ width: '80%', borderRadius: '10px' }} />
				</Col>
			</LayoutSection>

			{/* ***************** */}
			{/* 	3 Traits      */}
			{/* ***************** */}
			<LayoutSection fullWidth containerStyle={{ backgroundColor: 'var(--primary-light)' }} rowStyle={{ maxWidth: 'var(--container-width)', margin: 'auto' }}>
				<Col className='trait-col' md={4}>
					<div className='trait-icon'>
						<i class='fas fa-user-alt'></i>
					</div>
					<SubHeaderText>INDEPENDANT</SubHeaderText>
					<Paragraph>
						The DOUGHERTY LAW FIRM, P.A. does not represent any insurance companies and we are solely dedicated to fighting and representing the rights of the injured and/or deceased!
					</Paragraph>
				</Col>
				<Col className='trait-col' md={4}>
					<div className='trait-icon'>
						<i class='fas fa-gavel'></i>
					</div>
					<SubHeaderText>HERE FOR YOU</SubHeaderText>
					<Paragraph>
						The DOUGHERTY LAW FIRM, P.A. is honest and no nonsense when it comes to our relationship with our clients! We believe that TRUST is the cornerstone of the Attorney – Client
						relationship.
					</Paragraph>
				</Col>
				<Col className='trait-col' md={4}>
					<div className='trait-icon'>
						<i class='fas fa-handshake'></i>
					</div>
					<SubHeaderText>INTEGRITY</SubHeaderText>
					<Paragraph>
						The DOUGHERTY LAW FIRM, P.A. will not fabricate, lie or take on representation UNLESS THE POTENTIAL CLIENT IS ACTUALLY INJURED. Being in an accident alone doesn’t entitle
						someone to a monetary recovery, there must be an injury.
					</Paragraph>
				</Col>
			</LayoutSection>

			{/* ***************** */}
			{/* 	Counters      */}
			{/* ***************** */}
			<CounterSection />

			{/* ***************** */}
			{/* 	Banner 2      */}
			{/* ***************** */}
			<LayoutSection fullWidth className='banner-2' rowStyle={{ maxWidth: 'var(--container-width)', margin: 'auto' }} containerStyle={{ backgroundColor: 'var(--primary-dark)' }}>
				<Col md={10} className='mx-auto d-flex flex-column justify-content-center align-items-center py-5'>
					<HeaderText>overwhelmed? we can help</HeaderText>
					<Paragraph>
						Starting in the 1990’s, insurance companies began to change the way they do business. The insurance companies made an economical decision to place the interest of their stock
						holders over the interest of their policy holders. This became known as PROFITS OVER PEOPLE. In order to boost company profits insurance companies had to limit their number one
						overall expense: claims payouts. Using computer software to devalue claims, the insurance companies have seen record profits while hard working injured folks are left holding
						an empty bag.
					</Paragraph>
					<Paragraph>
						Often times people are left with life long injuries and are inadequately compensated or worse, their claim is denied. We are highly experienced in dealing with insurance
						companies and the games they play. We know how to respond and counter both their arguments and evaluations so that you are fairly compensated!
					</Paragraph>
				</Col>
			</LayoutSection>

			{/* ***************** */}
			{/*  Hover Services   */}
			{/* ***************** */}
			<HoverServices />

			<ImgReel />
		</RouteAnimation>
	);
}
