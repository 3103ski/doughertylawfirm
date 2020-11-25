import React from 'react';
import { Container, Row } from 'reactstrap';
import './layoutSection.css';

export default function LayoutSection({ children, rowStyle, containerStyle, fullWidth, containerClass, rowClass, filterColor, ...restProps }) {
	const addedContainerClasses = containerClass ? containerClass : null;
	const addedRowClasses = rowClass ? rowClass : null;
	const filter = filterColor ? <div className='bg-filter' style={{ backgroundColor: filterColor }} /> : null;
	return (
		<Container fluid={fullWidth ? true : false} className={`${addedContainerClasses}`} style={{ ...containerStyle }}>
			{filter}
			<Row className={`layoutRow ${addedRowClasses}`} style={{ ...rowStyle }} {...restProps}>
				{children}
			</Row>
		</Container>
	);
}
