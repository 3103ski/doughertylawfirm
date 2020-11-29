import React from 'react';
import './infiniteCarousel.css';
import { Col } from 'reactstrap';
import { LayoutSection } from '../../../components';

export default function InfiniteCarousel(props) {
	const badge = `/assets/images/badges`;
	return (
		<LayoutSection className='carousel-layout-container' rowStyle={{ padding: '30px' }}>
			<Col>
				<div className='infinite-carousel-container'>
					<div className='infinite-carousel-inner'>
						<div className='box first'>
							<img src={`${badge}/b-1.png`} alt='' />
						</div>
						<div className='box'>
							<img src={`${badge}/b-2.png`} alt='' />
						</div>
						<div className='box'>
							<img src={`${badge}/b-3.jpg`} alt='' />
						</div>
						<div className='box'>
							<img src={`${badge}/b-4.png`} alt='' />
						</div>
						<div className='box'>
							<img src={`${badge}/b-5.jpg`} alt='' />
						</div>
						<div className='box'>
							<img src={`${badge}/b-6.png`} alt='' />
						</div>
						<div className='box'>
							<img src={`${badge}/b-7.png`} alt='' />
						</div>
						<div className='box'>
							<img src={`${badge}/b-8.jpg`} alt='' style={{ width: '85%' }} />
						</div>
						<div className='box'>
							<img src={`${badge}/b-9.jpg`} alt='' style={{ width: '85%' }} />
						</div>
						<div className='box'>
							<img src={`${badge}/b-10.jpg`} alt='' style={{ width: '85%' }} />
						</div>
						<div className='box'>
							<img src={`${badge}/b-11.png`} alt='' />
						</div>
						<div className='box'>
							<img src={`${badge}/b-1.png`} alt='' />
						</div>
						<div className='box'>
							<img src={`${badge}/b-2.png`} alt='' />
						</div>
						<div className='box'>
							<img src={`${badge}/b-3.jpg`} alt='' />
						</div>
						<div className='box'>
							<img src={`${badge}/b-4.png`} alt='' />
						</div>
						<div className='box'>
							<img src={`${badge}/b-5.jpg`} alt='' />
						</div>
						<div className='box'>
							<img src={`${badge}/b-6.png`} alt='' />
						</div>
						<div className='box'>
							<img src={`${badge}/b-7.png`} alt='' />
						</div>
						<div className='box'>
							<img src={`${badge}/b-8.jpg`} alt='' style={{ width: '85%' }} />
						</div>
						<div className='box'>
							<img src={`${badge}/b-9.jpg`} alt='' style={{ width: '85%' }} />
						</div>
						<div className='box'>
							<img src={`${badge}/b-10.jpg`} alt='' style={{ width: '85%' }} />
						</div>
						<div className='box'>
							<img src={`${badge}/b-11.png`} alt='' />
						</div>
					</div>
				</div>
			</Col>
		</LayoutSection>
	);
}
