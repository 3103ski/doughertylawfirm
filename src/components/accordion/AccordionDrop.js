import React, { useState } from 'react';
import { LayoutSection } from '../../components';
import { Collapse, Button, Col } from 'reactstrap';
import './accordionDrop.css';

function AccordionDrop(props) {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className='accordion-drop'>
			<Button className='accordion-drop-btn' onClick={toggle}>
				{props.title}
			</Button>
			<Collapse isOpen={isOpen}>
				<LayoutSection fluid rowStyle={{ padding: '30px 0' }}>
					{props.children}
				</LayoutSection>
			</Collapse>
		</div>
	);
}

AccordionDrop.Container = function ({ children }) {
	return <Col className='accordion-container'>{children}</Col>;
};

AccordionDrop.Image = function (props) {
	const img = `url(${props.src})`;
	const styleProps = props.styles ? props.styles : {};
	return <div style={{ backgroundImage: img, ...styleProps }} alt={props.alt} className='accordion-image' />;
};

AccordionDrop.Text = function (children) {
	return <p className='accordion-text'>{children}</p>;
};

export default AccordionDrop;
