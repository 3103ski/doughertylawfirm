import React from 'react';
import { Container, Row } from 'reactstrap';
import './layoutSection.css';

export default function LayoutSection({ children, rowStyle, containerStyle, fullWidth, containerClass, rowClass, ...restProps }) {
	const addedContainerClasses = containerClass ? containerClass : null;
	const addedRowClasses = rowClass ? rowClass : null;
	return (
		<Container fluid={fullWidth ? true : false} className={`${addedContainerClasses}`} style={{ ...containerStyle }}>
			<Row className={`layoutRow ${addedRowClasses}`} style={{ ...rowStyle }} {...restProps}>
				{children}
			</Row>
		</Container>
	);
}
