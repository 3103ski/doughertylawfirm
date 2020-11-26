import React from 'react';
import './contactCard.css';
import { Col, Row } from 'reactstrap';
import { SubHeaderText, Paragraph } from '../../components';

export default function ContactCard(props) {
	const imgDir = '/assets/images/pageAssets/contact-us';
	const bgImg = props.florida ? `url('${imgDir}/florida.jpg')` : `url('${imgDir}/arizona.jpg')`;

	const mapURL = props.florida
		? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.2900095496307!2d-80.19601558389583!3d26.18724268344545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d90405cd43b5bf%3A0x607a21a2d912baf8!2s3333%20W%20Commercial%20Blvd%2C%20Oakland%20Park%2C%20FL%2033309!5e0!3m2!1sen!2sus!4v1606424781588!5m2!1sen!2sus'
		: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.98209439683!2d-111.92728338380093!3d33.50184298075938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0bbd1d8d2423%3A0x44373a751a511c6c!2s7201%20E%20Camelback%20Rd%2C%20Scottsdale%2C%20AZ%2085251!5e0!3m2!1sen!2sus!4v1606425547975!5m2!1sen!2sus';
	return (
		<>
			<Col className='col-12 col-md-6 contact-col' style={{ backgroundImage: bgImg }}>
				<div className='contact-info-container'>
					<div className='contact-card-overlay' />
					<Row className='contact-card-info'>
						<h2>{props.florida ? 'Florida' : 'Arizona'} Office - By Appointment Only</h2>
						<Col className='col-12 col-xl-6'>
							<Paragraph>
								DOUGHERTY <br />
								LAW FIRM, P.A.
							</Paragraph>
							<Paragraph>{props.florida ? '3333 W. Commercial Blvd., Ste. 115' : '7201 E. Camelback Rd., Ste 290'}</Paragraph>
							<Paragraph>{props.florida ? 'Fort Lauderdale, FL 33309' : 'Scottsdale, AZ 85251'}</Paragraph>
						</Col>
						<Col className='col-12 col-xl-6'>
							<Paragraph>team@wetrycases.com</Paragraph>
							<Paragraph>Mon - Fri: 9am - 5pm</Paragraph>
							<Paragraph>
								<a href={props.florida ? 'tel:+19545311821' : 'tel:+14807022277'}>{props.florida ? '954.531.1821' : '480.702.2277'}</a>
							</Paragraph>
						</Col>
					</Row>

					<Col className='col-12'>
						<iframe src={mapURL} width='100%' height='350' frameborder='0' allowfullscreen='' aria-hidden='false' tabindex='0'></iframe>
					</Col>
				</div>
			</Col>
		</>
	);
}
