import React from 'react';
import { LayoutSection } from '../components';
import { Col } from 'reactstrap';

export default function (props) {
	return (
		<>
			<LayoutSection>
				<Col>
					<p className='default-p'>Start here</p>
				</Col>
			</LayoutSection>
		</>
	);
}
