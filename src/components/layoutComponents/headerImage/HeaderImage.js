import React from 'react';
import { Col } from 'reactstrap';

import './headerImage.css';

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
		<Col className='d-flex col-12 mt-5'>
			<div className='header-image' style={imgStyles} />
		</Col>
	);
}

export default HeaderImage;
