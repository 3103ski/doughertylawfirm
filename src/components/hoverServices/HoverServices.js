import React from 'react';
import * as ROUTES from '../../constants/routes';
import { Col } from 'reactstrap';
import { LayoutSection, HoverBox } from '../../components';

export default function HoverServices(props) {
	const hovAssets = '/assets/images/siteWide/hovers';
	return (
		<>
			<LayoutSection rowStyle={{ padding: '40px 0' }}>
				<Col className='col-6 col-lg-4'>
					<HoverBox
						image={`${hovAssets}/concussion.jpg`}
						icon='fas fa-brain'
						title='brain injury'
						link={ROUTES.CONCUSSION}
					/>
				</Col>
				<Col className='col-6 col-lg-4'>
					<HoverBox
						image={`${hovAssets}/mvc.jpg`}
						icon='fas fa-car-crash'
						title='motor vehicle crash'
						link={ROUTES.MOTOR_VEHICLE_CRASH}
					/>
				</Col>
				<Col className='col-6 col-lg-4'>
					<HoverBox
						image={`${hovAssets}/truck.jpg`}
						icon='fas fa-truck'
						title='truck crash'
						link={ROUTES.TRUCKING}
					/>
				</Col>
				<Col className='col-6 col-lg-4'>
					<HoverBox
						image={`${hovAssets}/wrongful.jpg`}
						icon='fas fa-exclamation-triangle'
						title='wrongful death'
						link={ROUTES.WRONGFUL_DEATH}
					/>
				</Col>
				<Col className='col-6 col-lg-4'>
					<HoverBox
						image={`${hovAssets}/wet-floor-1.jpg`}
						icon='fas fa-building'
						title='Premise Liability'
						link={ROUTES.PREMISE_LIABILITY}
					/>
				</Col>
				<Col className='col-6 col-lg-4'>
					<HoverBox
						image={`${hovAssets}/partner.jpg`}
						icon='fas fa-handshake'
						title='outside attorney consults'
						link={ROUTES.OUTSIDE_ATTORNEY_CONSULTS}
					/>
				</Col>
			</LayoutSection>
		</>
	);
}
