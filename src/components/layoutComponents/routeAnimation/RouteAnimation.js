import React, { useContext } from 'react';
import { Animated } from 'react-animated-css';
import { AppContext } from '../../../contexts';

export default function RouteAnimation({ children, animationIn, animationOut, ...restProps }) {
	const [appContext] = useContext(AppContext);
	return (
		<Animated
			animationOut={animationOut ? animationOut : appContext.viewLeaveAnimation}
			animationIn={animationIn ? animationIn : appContext.viewEnterAnimation}
			animationInDuration={1000}
			style={{ display: 'flex', width: '100%' }}
			{...restProps}>
			<div style={{ display: 'block', width: '100%' }}>{children}</div>
		</Animated>
	);
}
