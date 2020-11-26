import React from 'react';
import { NavLink } from 'react-router-dom';
import './button.css';

function LayoutButton(props) {
	const color = props.dark ? 'dark-btn' : 'light-btn';
	const addedStyles = props.btnStyle ? props.btnStyle : {};

	const button = props.isNavLink ? (
		<NavLink to={props.to ? props.to : '/'}>
			<button className={`btn ${color}`} style={addedStyles}>
				{props.children}
			</button>
		</NavLink>
	) : (
		<button className={`btn ${color}`} style={addedStyles}>
			{props.children}
		</button>
	);
	return <>{button}</>;
}

export default LayoutButton;
