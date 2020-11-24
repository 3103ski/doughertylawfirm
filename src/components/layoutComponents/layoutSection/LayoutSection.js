import React from 'react';
import { Container, Row } from 'reactstrap';
import './layoutSection.css';

export default function LayoutSection({ children, rowStyle, containerStyle, fullWidth, ...restProps }) {
	return (
		<Container fluid={fullWidth ? true : false} style={{ ...containerStyle }}>
			<Row className='layoutRow ' style={{ ...rowStyle }} {...restProps}>
				{children}
			</Row>
		</Container>
	);
}
