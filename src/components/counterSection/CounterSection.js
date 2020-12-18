import React from 'react';
import { LayoutSection, Counter } from '..';
import './counterSection.css';
import { Col } from 'reactstrap';

export default function CounterSection(props) {
	return (
		<LayoutSection
			filterColor='rgba(55,63,69,0.6)'
			fullWidth
			containerStyle={{
				backgroundImage:
					'url(/assets/images/homePage/justice-bg-1.jpg)',
				position: 'relative',
			}}
			rowStyle={{
				maxWidth: 'var(--container-width)',
				display: 'flex',
				justifyContent: 'center',
				margin: 'auto',
				padding: '60px 0',
			}}>
			<Col className='counter-col col-6 col-md-4 col-lg-2'>
				<Counter.Card title='scooter' line2='crash'>
					<Counter
						isCurrency
						num='2.5'
						after='m'
						speed={200}
						incr={0.5}
					/>
				</Counter.Card>
			</Col>
			<Col className='counter-col col-6 col-md-4 col-lg-2'>
				<Counter.Card title='car' line2='crash'>
					<Counter isCurrency num='850' after='k' speed={8} />
				</Counter.Card>
			</Col>
			<Col className='counter-col col-6 col-md-4 col-lg-2'>
				<Counter.Card title='car' line2='crash'>
					<Counter
						isCurrency
						num='600'
						after='k'
						speed={9}
						incr={5}
					/>
				</Counter.Card>
			</Col>
			<Col className='counter-col col-6 col-md-4 col-lg-2'>
				<Counter.Card title='car' line2='crash'>
					<Counter
						isCurrency
						num='525'
						after='k'
						speed={10}
						incr={5}
					/>
				</Counter.Card>
			</Col>
			<Col className='counter-col col-6 col-md-4 col-lg-2'>
				<Counter.Card title='slip &' line2='fall'>
					<Counter isCurrency num='400' after='k' speed={15} />
				</Counter.Card>
			</Col>
		</LayoutSection>
	);
}
