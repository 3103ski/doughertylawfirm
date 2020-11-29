import React from 'react';
import { LayoutSection, Counter } from '..';
import './counterSection.css';
import { Col } from 'reactstrap';

export default function CounterSection(props) {
	return (
		<LayoutSection
			filterColor='rgba(55,63,69,0.6)'
			fullWidth
			containerStyle={{ backgroundImage: 'url(/assets/images/homePage/justice-bg-1.jpg)', position: 'relative' }}
			rowStyle={{ maxWidth: 'var(--container-width)', display: 'flex', justifyContent: 'center', margin: 'auto' }}>
			<Col className='counter-col col-6 col-md-4 col-lg-2'>
				<Counter.Card title='scooter crash'>
					<Counter isCurrency num='2.5' after='m' />
				</Counter.Card>
			</Col>
			<Col className='counter-col col-6 col-md-4 col-lg-2'>
				<Counter.Card title='car crash'>
					<Counter isCurrency num='850' after='k' />
				</Counter.Card>
			</Col>
			<Col className='counter-col col-6 col-md-4 col-lg-2'>
				<Counter.Card title='car crash'>
					<Counter isCurrency num='600' after='k' />
				</Counter.Card>
			</Col>
			<Col className='counter-col col-6 col-md-4 col-lg-2'>
				<Counter.Card title='car crash'>
					<Counter isCurrency num='525' after='k' />
				</Counter.Card>
			</Col>
			<Col className='counter-col col-6 col-md-4 col-lg-2'>
				<Counter.Card title='slip & fall'>
					<Counter isCurrency num='400' after='k' />
				</Counter.Card>
			</Col>
		</LayoutSection>
	);
}
