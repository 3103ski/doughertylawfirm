import React from 'react';
import './button.css';

function LayoutButton(props) {
	const color = props.dark ? 'dark-btn' : 'light-btn';
	const addedStyles = props.btnStyle ? props.btnStyle : {};
	return (
		<button className={`btn ${color}`} style={addedStyles}>
			{props.children}
		</button>
	);
}

export default LayoutButton;
