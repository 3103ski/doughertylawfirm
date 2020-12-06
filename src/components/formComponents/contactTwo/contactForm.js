import React from 'react';

const ContactForm = (props) => {
	return (
		<>
			<form name='contact' netlify netlify-honeypot='bot-field' hidden>
				<input type='text' name='name' />
				<input type='email' name='email' />
				<textarea name='message'></textarea>
			</form>

			<form name='contact-carirae' method='post' data-netlify='true'>
				<input type='hidden' name='form-name' value='contact-carirae' />
				<div className='field half first'>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' id='name' />
				</div>
				<div className='field half'>
					<label htmlFor='email'>Email</label>
					<input type='text' name='email' id='email' />
				</div>
				<div className='field'>
					<label htmlFor='message'>Message</label>
					<textarea name='message' id='message' rows='4'></textarea>
				</div>
				<ul className='actions'>
					<li>
						<button type='submit' className='special'>
							SUBMIT
						</button>
					</li>
					<li>
						<input name='reset-form' type='reset' value='Reset' />
					</li>
				</ul>
			</form>
		</>
	);
};

export default ContactForm;
