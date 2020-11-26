import React from 'react';
import './styles.css';
import { Animated } from 'react-animated-css';

function PageHeader(props) {
	return (
		<div className='title-container'>
			<Animated animationInDuration={1500} animationIn='flipInX' isVisible={true}>
				<h1>{props.children}</h1>
			</Animated>
		</div>
	);
}

export default PageHeader;
