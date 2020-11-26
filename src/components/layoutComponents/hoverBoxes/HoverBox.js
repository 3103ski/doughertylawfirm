import React from 'react';
import { NavLink } from 'react-router-dom';
import './hoverBox.css';

export default function HoverBox(props) {
	const bgImg = `url(${props.image})`;
	const addedStyles = props.addStyle ? props.addStyle : {};
	const inLineStyles = {
		backgroundImage: bgImg,
		...addedStyles,
	};
	return (
		<div className='hover-box-container' style={inLineStyles}>
			<NavLink to={props.link ? props.link : '/'}>
				<div className='hover-box-inner'>
					<i className={props.icon} />
					<p>{props.title}</p>
				</div>
			</NavLink>
		</div>
	);
}
