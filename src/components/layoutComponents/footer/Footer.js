import React from 'react';
import './footer.css';
import { Col } from 'reactstrap';
import { LayoutSection } from '../../../components';

export default function Footer(props) {
	return (
		<>
			<LayoutSection fullWidth containerClass='footer-container' rowClass='footer-row'>
				<Col className='col-10 pb-5 pb-md-0 col-md-7 col-lg-5 d-flex justify-content-center align-items-center footer-logo'>
					<img src='/assets/images/logo.png' />
				</Col>
				<Col className='call-now-col col-12 col-md-4 col-lg-6 d-flex justify-content-center'>
					<span className='fas fa-phone' />
					<a href='tel:+18002310323'>Call Now (800)231-0323</a>
				</Col>
			</LayoutSection>
		</>
	);
}
