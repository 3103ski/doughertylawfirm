import React from 'react';
import './styles.css';
import { Animated } from 'react-animated-css';
import { Col } from 'reactstrap';
import { LayoutSection } from '../../../components';

function PageHeader(props) {
	const toggleTitleStick = () => {
		const title = document.getElementById('page-header');
		if (title) {
			if (window.pageYOffset > 30) {
				title.classList.add('stick-title');
			} else {
				title.classList.remove('stick-title');
			}
		}
	};

	window.addEventListener('scroll', () => toggleTitleStick());
	return (
		<div id='page-header' className='title-container'>
			<Animated animationInDuration={1500} animationIn='flipInX' isVisible={true}>
				<h1 className='title-text flipInX'>{props.children}</h1>
			</Animated>
		</div>
	);
}

PageHeader.Text = function (props) {
	return (
		<Animated animationInDuration={1500} animationIn='flipInX' isVisible={true}>
			<h1 className='title-text flipInX'>{props.children}</h1>
		</Animated>
	);
};

export default PageHeader;
