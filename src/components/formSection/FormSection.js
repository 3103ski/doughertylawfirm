import React from 'react';
import './formSection.css';
import { Col } from 'reactstrap';
import { LayoutSection, Paragraph, HeaderText } from '../../components';
// import ContactForm from '../formComponents/contactForm/ContactFormComponent';
import ContactForm from '../formComponents/contactTwo/contactForm';
import { SubHeaderText } from '../layoutComponents/textComponents/TextComponents';

export default function FormSection(props) {
	return (
		<LayoutSection containerClass='form-section-container' rowStyle={{ maxWidth: 'var(--container-width)', margin: 'auto' }} fullWidth filterColor='rgba(0,0,0,0.5)'>
			<Col className='col-12 col-md-10 mx-auto'>
				<p className='form-text'>HAVE A QUESTION?</p>
				<h2 className='form-title'>Send us a message. We can Help!</h2>
				<p className='form-text'>
					When you experience an injury, everything can change- we know that at the <strong>Dougherty Law Firm</strong>
				</p>
				<div className='form-divider' />
				<ContactForm />
			</Col>
		</LayoutSection>
	);
}
