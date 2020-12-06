import React from 'react';

const ContactForm = (props) => {
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
};

export default ContactForm;
