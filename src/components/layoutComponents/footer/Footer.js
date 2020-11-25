import React from 'react';
import './footer.css';
import { Col } from 'reactstrap';
import { LayoutSection } from '../../../components';

export default function Footer(props) {
	return (
		<>
			<LayoutSection fullWidth containerClass='footer-container' rowClass='footer-row'>
				<Col md={4}>
					<img src='/assets/images/logo.png' style={{ width: '100%' }} />
				</Col>
				<Col md={6} className='call-now-col'>
					<span className='fas fa-phone' />
					<a href='tel:+18002310323'>Call Now (800)231-0323</a>
				</Col>
			</LayoutSection>
		</>
	);
}
