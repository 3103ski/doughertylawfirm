import React from 'react';
import { Col } from 'reactstrap';

import './headerImage.css';
import { Animated } from 'react-animated-css';
import CardImgOverlay from 'reactstrap/lib/CardImgOverlay';

function HeaderImage(props) {
	const imgProps = props.styles ? props.styles : {};
	const img = props.image ? `url(${props.image})` : '';
	const imgStyles = {
		backgroundImage: img,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		...imgProps,
	};
	return (
		<Col className='d-flex col-12'>
			<Animated animationIn='fadeIn' style={{ display: 'flex', width: '100%' }}>
				<div className='header-image' style={imgStyles} />
			</Animated>
		</Col>
	);
}

export default HeaderImage;
