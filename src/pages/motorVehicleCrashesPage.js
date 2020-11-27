// React
import React from 'react';
// Components
import { PageHeader, LayoutSection, HeaderImage, HeaderText, Paragraph, HoverServices, RouteAnimation } from '../components';
import { Col } from 'reactstrap';

function MotorVehicleCrashesPage(props) {
	return (
		<>
			<PageHeader>motor vehicle crashes</PageHeader>
			<RouteAnimation>
				<LayoutSection>
					<Col>
						<HeaderImage image='/assets/images/pageAssets/motor-vehicle-crashes/hdr.jpg' alt='motor vehicle crash header' />
						<HeaderText>motor vehicle crash attorneys</HeaderText>
						<Paragraph>
							Being involved in a car crash can be an extremely upsetting, emotional and painful time. In most non-catastrophic car crashes people don’t even feel the real affects, i.e.
							pain and discomfort for a couple days. It is important if you have been injured in a car crashes to seek medical treatment right away.
						</Paragraph>
						<Paragraph>
							Insurance companies will often call you the same day you were involved in an crash and some of the more unscrupulous insurance companies will send someone to you house or
							work and offer you a check on the spot if you will just sign a release! DON’T DO IT!!! They want you to sign away your rights to be FULLY compensated BEFORE you know the
							full extent of your injuries.
						</Paragraph>
						<Paragraph>
							The insurance companies hope that you won’t contact an attorney because they know if you do, they are going to have pay more for your claim. A study by the Insurance
							Research Council revealed that injured parties that hired a lawyer to represent them received 3.5 times as much as injured folks who represented themselves.
						</Paragraph>
						<Paragraph>
							Personal Injury attorneys know the games that insurance companies play in order to keep claim settlements low. They are in no rush to resolve a claim unless it can be done
							so quickly and cheaply. That’s why it is important to hire an experienced car crash attorney to represent you. What’s even more important is that the attorney you hire,
							actually tries cases in front of juries.
						</Paragraph>
						<Paragraph>
							It is also important to pick an attorney who is familiar with the courtroom and has tried cases. The insurance companies know which law firms and which lawyers actually try
							cases and put them at risk. The DOUGHERTY LAW FIRM tries its own cases. In addition to that,{' '}
							<strong>the DOUGHERTY LAW FIRM tries cases with other law firms and the insurance companies know this.</strong>
						</Paragraph>
					</Col>
				</LayoutSection>
				{/* *********************************** */}
				{/* *********************************** */}
				<HoverServices />
			</RouteAnimation>
		</>
	);
}

export default MotorVehicleCrashesPage;
