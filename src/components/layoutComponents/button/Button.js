import React from 'react';
import './button.css';

function LayoutButton(props) {
	const color = props.dark ? 'dark-btn' : 'light-btn';
	return <button className={`btn ${color}`}>{props.children}</button>;
}

export default LayoutButton;
