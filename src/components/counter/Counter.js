import React, { useState } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import './counter.css';

export default function Counter(props) {
	const [num, setNum] = useState(0);
	const [isOnScreen, setIsOnScreen] = useState(false);

	const isInViewport = (element) => {
		if (element) {
			const rect = element.getBoundingClientRect();
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			);
		} else {
			return false;
		}
	};

	const triggerCounter = () => {
		let digit = document.querySelector('.counter-digit');
		setTimeout(
			() => {
				if (num < props.num) {
					if (isInViewport(digit)) {
						setNum(num + (props.incr ? props.incr : 10));
					}
				}
			},
			props.speed ? props.speed : 10
		);
	};

	window.addEventListener('scroll', () => {
		let digit = document.querySelector('.counter-digit');
		if (isInViewport(digit)) {
			setIsOnScreen(true);
		} else {
			setIsOnScreen(false);
			setNum(0);
		}
	});
	return (
		<h1 className='counter-digit'>
			{props.isCurrency ? '$' : null}
			{isOnScreen ? triggerCounter() : null}
			{num}
			{props.after ? props.after : null}
		</h1>
	);
}

Counter.Card = function (props) {
	return (
		<Card className='counter-card'>
			<CardHeader className='counter-header'>
				<p>{props.title}</p>
				{props.line2 ? <p>{props.line2}</p> : null}
			</CardHeader>
			<CardBody className='counter-body'>{props.children}</CardBody>
		</Card>
	);
};
