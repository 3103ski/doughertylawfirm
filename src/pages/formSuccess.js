import React from 'react';
import { LayoutSection, Paragraph } from '../components';
import { NavLink } from 'react-router-dom';
import { Col, Card, CardHeader, CardBody } from 'reactstrap';

const FormSuccess = (props) => {
	const styles = {
		keepBrowsing: {
			backgroundColor: 'var(--primary-dark)',
			color: 'white',
			textTransform: 'uppercase',
			marginBottom: '10px',
		},
		callNow: {
			backgroundColor: 'rgb(99, 181, 129)',
			color: 'white',
			textTransform: 'uppercase',
		},
		containerStyle: {
			backgroundColor: 'rgba(130, 130, 130, 0.66)',
			minHeight: '400px',
			height: '70vh',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
		p: {
			textAlign: 'center',
		},
		card: {
			border: 'none',
		},
		cardHeader: { textAlign: 'center', fontSize: '1.7rem', backgroundColor: 'var(--primary-dark)', color: 'white' },
		cardBody: { justifyContent: 'center', display: 'flex', flexDirection: 'column' },
	};

	return (
		<>
			<LayoutSection fullWidth containerStyle={styles.containerStyle}>
				<Col className='col-10 col-md-6 mx-auto'>
					<Card style={styles.card}>
						<CardHeader style={styles.cardHeader}>SENT!</CardHeader>
						<CardBody style={styles.cardBody}>
							<Paragraph style={styles.p}>We got your message and our team will reach out as soon as we can.</Paragraph>
							<NavLink to='/' className='btn ' style={styles.keepBrowsing}>
								Keep Browsing The Site
							</NavLink>
							<a href='tel:=18002310323' className='btn ' style={styles.callNow}>
								<i class='fas fa-phone-volume' style={{ marginRight: '30px', fontSize: '1.2rem' }}></i>
								Or Try Calling
							</a>
						</CardBody>
					</Card>
				</Col>
			</LayoutSection>
		</>
	);
};

export default FormSuccess;
