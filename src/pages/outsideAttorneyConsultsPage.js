// React
import React from 'react';
import { Col, Row } from 'reactstrap';
// Components
import { LayoutSection, PageHeader, Paragraph, HeaderText, CounterSection, ImgReel, RouteAnimation } from '../components';

function OutsideAttorneyConsultsPage(props) {
	const imgDir = 'assets/images/pageAssets/outside-attorney-consults/';
	return (
		<>
			<PageHeader>Outside{window.innerWidth < 576 ? <br /> : ' '}Attorney Consults</PageHeader>
			<RouteAnimation>
				<LayoutSection>
					<HeaderText>how we can help</HeaderText>
					<Col className='col-12 col-md-9'>
						<Paragraph>
							The <strong>DOUGHERTY LAW FIRM</strong> through their lead trial attorney, Adam T. Dougherty, Esq. is happy to help with case consults, case planning, discovery planning,
							deposition planning, focus groups, trial strategy, witness preparation, etc. We can help you get your case prepared for trial and if necessary we can help you try it.
						</Paragraph>
						<HeaderText>why dougherty law firm?</HeaderText>
						<Paragraph>
							Mr. Dougherty has had the honor and privilege of working with and learning from some of the greatest trial lawyers in this country. As a young lawyer in 2006, he was
							invited to attend Gerry Spence’s Trial Lawyers College in Dubois, Wyoming. Spending over a month at Thunderhead Ranch, for both the regular college (three weeks) and
							graduate college, Mr. Dougherty formed a special bond with the one and only Gerry Spence. During his time on the ranch, the legendary trial lawyer shared with Mr. Dougherty
							some personal and valuable insights into what being a “trial lawyer” really means.
						</Paragraph>
						<Paragraph>
							While in Wyoming, Mr. Dougherty had the opportunity to learn from other legendary trial lawyers such as Paul Luvera, R. Rex Parris and Jim Fitzgerald, just to name a few.
						</Paragraph>
						<Paragraph>
							In 2015, Mr. Dougherty became one of the first graduates of the then Keenan Ball Trial College, now Keenan Trial Institute. Soon thereafter Mr. Dougherty was tapped to
							become a faculty member with the Keenan Trial Institute. In 2016, Mr. Dougherty was made an Asst. Dean of the Kennan Trial Institute. In his five years on faculty teaching
							lawyers from around the country trial skills, Mr. Dougherty has taught: Rules, Openings & Order of Proof, Admitted Liability, MIST, Witness Prep and Cross Examination.
						</Paragraph>
						<Paragraph>
							This journey has led Mr. Dougherty to becoming mentored by another one of this country’s most decorated and respected attorneys, Don Keenan. As a former president of the
							Inner Circle of Advocates, Mr. Keenan has earned the respect of both his peers and adversaries across the country. Having access to Mr. Keenan and learning from him, in his
							home, is an honor and privilege that Mr. Dougherty does not take likely. He attributes his case preparation, organization, and execution to Mr. Keenan and his mentoring.
						</Paragraph>
						<HeaderText>what we do for you</HeaderText>
						<Paragraph>
							The <strong>DOUGHERTY LAW FIRM</strong> is available to assist you no matter what your needs may be. We can be involved in as little or as much as you would like. For some
							law firms we run focus groups on their cases and give them feedback that they then use to put their case together. For other law firms we consult on their cases, this
							consists of running multiple focus groups on various different parts of the case; helping them to strategize and form a game plan for discovery, help with the selection of
							experts and help prepare you for depositions. On cases we come in as co-counsel we will work doing all the things mentioned above including preparing and presenting a
							mediation presentation and trying the case if necessary.
						</Paragraph>
					</Col>
					<Col className='col-12 col-md-3 sideImages'>
						<Row>
							<Col className='col-6 col-md-12 mb-4'>
								<img src={`${imgDir}img-1.jpeg`} alt='crashes not accidents' style={{ width: '100%', borderRadius: '10px' }} />
							</Col>
							<Col className='col-6 col-md-12 mb-4'>
								<img src={`${imgDir}img-2.jpeg`} alt='crashes not accidents' style={{ width: '100%', borderRadius: '10px' }} />
							</Col>
							<Col className='col-6 col-md-12 mb-4'>
								<img src={`${imgDir}img-3.jpg`} alt='crashes not accidents' style={{ width: '100%', borderRadius: '10px' }} />
							</Col>
							<Col className='col-6 col-md-12 mb-4'>
								<img src={`${imgDir}img-4.jpeg`} alt='crashes not accidents' style={{ width: '100%', borderRadius: '10px' }} />
							</Col>
						</Row>
					</Col>
				</LayoutSection>
				<CounterSection />
				<ImgReel />
			</RouteAnimation>
		</>
	);
}

export default OutsideAttorneyConsultsPage;
