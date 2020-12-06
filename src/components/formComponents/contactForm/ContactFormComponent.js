import React, { Component } from 'react';

import { Button, Row, Label, Col } from 'reactstrap';
import './contactForm.css';
import { Control, Form, Errors } from 'react-redux-form';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { required, maxLength, minLength, isNumber, validEmail } from '../../../constants/validators';

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			email: '',
			feedback: '',
			touched: {
				firstName: false,
				email: false,
				feedback: false,
			},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(values) {
		console.log(`Current state is: ${JSON.stringify(values)}`);
		alert(`Current state is: ${JSON.stringify(values)}`);
		this.props.resetContactForm();
	}
	render() {
		return (
			<>
				<form name='contact' netlify netlify-honeypot='bot-field' hidden>
					<input type='text' name='name' />
					<input type='email' name='email' />
					<textarea name='message'></textarea>
				</form>
				<form method='post' data-netlify='true' name='contact-dougherty'>
					<div className='fields'>
						<div className='field'>
							<input type='hidden' name='form-name' value='contact-dougherty' />
						</div>
						<div className='field'>
							<label htmlFor='name'>Name</label>
							<input type='text' name='name' id='name' />
						</div>
						<div className='field'>
							<label htmlFor='email'>Email</label>
							<input type='email' name='email' id='email' />
						</div>
						<div className='field'>
							<label htmlFor='message'>Message</label>
							<textarea name='message' id='message' rows='4'></textarea>
						</div>
					</div>
					<ul className='actions'>
						<li>
							<input type='submit' value='Send Message' />
						</li>
					</ul>
				</form>
			</>
		);
	}
}
const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = {
	resetContactForm: () => actions.reset('contactForm'),
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// {/* <form name='contact' netlify netlify-honeypot='bot-field' hidden>
// 	<input type='text' name='firstName' />
// 	<input type='email' name='email' />
// 	<textarea name='feedback'></textarea>
// </form>
// <form style={{ width: '100%' }} model='contactForm' method='post' data-netlify='true' netlify name='contact-dougherty'>
// 	<input type='hidden' name='form-name' value='contact-dougherty' />
// 	{/* <Form style={{ width: '100%' }} model='contactForm' onSubmit={(values) => this.handleSubmit(values)} method='post' data-netlify='true' netlify name='contact-dougherty'> */}
// 	{/* <Form style={{ width: '100%' }} model='contactForm' onSubmit={(values) => this.handleSubmit(values)} method='post' data-netlify='true' netlify name='contact-dougherty'> */}
// 	<Row className='form-group'>
// 		<Col className='col-12 col-lg-6'>
// 			<Label htmlFor='firstName' className='d-none'>
// 				Name
// 			</Label>
// 			<Control.text
// 				validators={{ required, minLength: minLength(2), maxLength: maxLength(15) }}
// 				model='.firstName'
// 				id='firstName'
// 				name='firstName'
// 				placeholder='First Name'
// 				className='form-control'
// 			/>
// 			<Errors
// 				className='text-danger'
// 				model='.firstName'
// 				show='touched'
// 				component='div'
// 				messages={{
// 					required: 'Required',
// 					minLength: 'Must be at least 2 characters',
// 					maxLength: 'Must be 15 characters or less',
// 				}}
// 			/>
// 		</Col>
// 		<Col className='col-12 col-lg-6'>
// 			<Label htmlFor='email' className='d-none'>
// 				Email
// 			</Label>
// 			<Control.text validators={{ required, validEmail }} model='.email' id='email' name='email' placeholder='Email' className='form-control' />
// 			<Errors
// 				className='text-danger'
// 				show='touched'
// 				model='.email'
// 				component='div'
// 				messages={{
// 					required: 'Required',
// 					validEmail: 'Must enter a valid email address',
// 				}}
// 			/>
// 		</Col>
// 	</Row>
// 	<Row className='form-group'>
// 		<Label htmlFor='feedback' className='d-none'>
// 			Your Feedback
// 		</Label>
// 		<Col>
// 			<Control.textarea placeholder='How can we help you?' validators={{ required }} model='.feedback' id='feedback' name='feedback' rows='12' className='form-control' />
// 			<Errors
// 				className='text-danger'
// 				show='touched'
// 				model='.feedback'
// 				component='div'
// 				messages={{
// 					required: 'Please include a message',
// 				}}
// 			/>
// 		</Col>
// 	</Row>
// 	<Row className='form-group'>
// 		<Col className='d-flex'>
// 			<Button type='submit' className='btn form-submit mx-auto'>
// 				Submit
// 			</Button>
// 		</Col>
// 	</Row>
// </form> */}
