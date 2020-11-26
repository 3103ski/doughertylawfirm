import React from 'react';
import { Animated } from 'react-animated-css';

export default function RouteAnimation({ children, animation, ...restProps }) {
	return (
		<Animated animationIn={animation ? animation : ''} style={{ display: 'flex', width: '100%' }} {...restProps}>
			<div style={{ display: 'block', width: '100%' }}>{children}</div>
		</Animated>
	);
}
