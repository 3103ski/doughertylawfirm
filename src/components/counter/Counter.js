import React from 'react';
import { Col, Card, CardBody, CardHeader } from 'reactstrap';
import './counter.css';

export default function Counter(props) {
	return (
		<h1>
			{props.isCurrency ? '$' : null}
			{props.num}
			{props.after ? props.after : null}
		</h1>
	);
}

Counter.Card = function (props) {
	return (
		<Card className='counter-card'>
			<CardHeader className='counter-header'>{props.title}</CardHeader>
			<CardBody className='counter-body'>{props.children}</CardBody>
		</Card>
	);
};
