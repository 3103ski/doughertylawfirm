// React
import React from 'react';
import { Col, Row } from 'reactstrap';

// Components
import { LayoutSection, CounterSection, ImgReel, PageHeader, Paragraph, HeaderText } from '../components';

// Styling
import './styles/bioPages.css';

function AdamBioPage(props) {
	const imgDir = '/assets/images/pageAssets/about-us/AD';
	return (
		<div>
			<PageHeader>Adam Dougherty</PageHeader>
			<LayoutSection>
				<Col className='col-12 col-md-4 col-xl-3'>
					<Col className='col-12 my-5  mt-md-5 mb-md-2'>
						<img src={`${imgDir}/ad.jpeg`} alt='Adam' style={{ width: '100%' }} className='rounded' />
					</Col>
					<Col className='col-12 d-flex align-items-center d-md-flex flex-md-column '>
						<Col className='col-6 col-md-12 d-flex'>
							<Col className='col-6 mx-md-auto'>
								<img src={`${imgDir}/kti.jpg`} alt='Giancarlo' style={{ width: '100%' }} className='rounded' />
							</Col>
							<Col className='col-6 mx-md-auto'>
								<img src={`${imgDir}/kti-2.jpg`} alt='Giancarlo' style={{ width: '100%' }} className='rounded' />
							</Col>
						</Col>
						<Col className='col-6 col-md-12 '>
							<img src={`${imgDir}/tlc.jpg`} alt='Giancarlo' style={{ width: '100%', marginBottom: '20px' }} className='rounded' />
							<img src={`${imgDir}/av.png`} alt='Giancarlo' style={{ width: '100%' }} className='rounded' />
						</Col>
					</Col>
					<Col className='col-12 my-5'>
						<HeaderText className='creds-title'>bar memberships</HeaderText>
						<Paragraph className='creds-li'>State of Arizona</Paragraph>
						<Paragraph className='creds-li'>Dist. of Arizona</Paragraph>
						<Paragraph className='creds-li'>State of Florida</Paragraph>
						<Paragraph className='creds-li '>Southern Dist. of Florida</Paragraph>
						<Paragraph className='creds-li '>Middle Dist. of Florida</Paragraph>
						<Paragraph className='creds-li '>Northern Dist. of Florida</Paragraph>
						<Paragraph className='creds-li final'>U.S. Supreme Court</Paragraph>
						<HeaderText className='creds-title'>education</HeaderText>
						<Paragraph className='creds-li'>Pima Community College = AAS(2)</Paragraph>
						<Paragraph className='creds-li'>Arizona State Univ. - BS</Paragraph>
						<Paragraph className='creds-li'>Univ. of Akron School of Law - JD</Paragraph>
						<Paragraph className='creds-li'>Trial Lawyer's College - Graduate</Paragraph>
						<Paragraph className='creds-li final'>Keenan Trial Institude - Graduate / Masters</Paragraph>
					</Col>
				</Col>
				<Col className='col-12 col-md-8 col-xl-7 mb-5 mt-2 my-md-5'>
					<Paragraph>
						Mr. Dougherty’s experience with the justice system started back in 1993 when he was hired as a corrections officer for the Arizona Department of Juvenile Corrections. Mr.
						Dougherty would go on to become a Parole Officer III covering all of Pinal County approximately 5,300 sq. miles (Between Maricopa – Phoenix and Pima – Tucson) by himself. Mr.
						Dougherty also had worked for the Maricopa County Adult Probation Department, Maricopa County Sheriff’s Office and the Broward Sheriff’s Office before becoming an attorney.
					</Paragraph>
					<Paragraph>
						Mr. Dougherty began his legal career with the Broward County Public Defender’s Office where he gained valuable trial experience. Mr. Dougherty worked his way up to major crimes
						and has tried multiple first degree murder cases.
					</Paragraph>
					<Paragraph>
						In 2006, Mr. Dougherty was one of 55 attorneys in the United States selected to attend Gerry Spence’s famed Trial Lawyers College at Thunderhead Ranch in Wyoming. There he
						spent approximately one month on the ranch learning from this country’s premier trial lawyers, including: Gerry Spence, Paul Luvera, Jim Fitzgerald, R. Rex Paris and many more.
					</Paragraph>
					<Paragraph>
						In 2010, Mr. Dougherty met famed trial attorney, Don Keenan and in 2014 enrolled into the Keenan Ball Trial College in Atlanta, GA. In 2015, Mr. Dougherty had the honor of
						becoming the first person to complete all the requirements for graduation of the newly formed Keenan Trial Institute and was part of the first graduation class in May of that
						year. Later that year, Mr. Dougherty was invited to join the faculty of the then Keenan Ball Trial College.
					</Paragraph>
					<Paragraph>
						In 2016, Mr. Dougherty was made a co-dean of the Keenan Trial Institute by Mr. Keenan. Mr. Dougherty has taught the following courses: Rules, Opening, Witness Preparation,
						MIST, Admitted Liability and the graduate course, Cross Examination (a course he was made the assistant dean of).
					</Paragraph>
					<Paragraph>
						Mr. Dougherty has taught CLEs to other attorneys from around the country and has spoken both Nationally and Internationally on topics ranging from trucking cases, expert
						witness preparation to anatomy and physiology for attorneys.
					</Paragraph>
					<Paragraph>
						Mr. Dougherty has been AV rated by Martindale Hubbell since 2012, a distinction earned by less than 1% of attorneys. In 2015, Mr. Dougherty was honored by Top Lawyers of South
						Florida, as published by the Daily Business Review, a designation he has earned every year since 2016. Mr. Dougherty has been rated 10.0 by AVVO since 2014 and in 2017, the
						DOUGHERTY LAW FIRM was awarded Best Trial Law Firm in Broward County by the Legal Elite Awards.
					</Paragraph>
					<Paragraph>In 2016, Mr. Dougherty co-authored an Amazon Bestselling Book titled, A Cup of Coffee With 10 Leading Attorneys in the United States.</Paragraph>
					<Paragraph>
						Mr. Dougherty is a proud member of the National Trial Lawyers Association Top 100 Plaintiff Civil Trial Lawyers and in 2017 obtained a State of Florida Top 50 personal injury
						verdict, coming in at number 31 with a verdict of $2,500,000.87, in the case of Rojas v. Wolfson a hotly disputed liability case where the insurance company made a $25,000.00
						pre-suit offer. He is also a member of the Million Dollar Advocates Forum.
					</Paragraph>
				</Col>
				<Col className='col-12 col-xl-2 my-5 d-flex flex-xl-column justify-content-around align-items-center'>
					<Col className='col-3 col-xl-12'>
						<img src={`${imgDir}/leaders.jpg`} alt="south florida's leaders in law" style={{ width: '100%' }} className='rounded' />
					</Col>
					<Col className='col-3 col-xl-12'>
						<img src={`${imgDir}/coc.png`} alt='Cup of coffee book front' style={{ width: '100%' }} className='rounded' />
					</Col>
					<Col className='col-3 col-xl-12'>
						<img src={`${imgDir}/coc-back.jpg`} alt='Cup of coffee book back' style={{ width: '100%' }} className='rounded' />
					</Col>
				</Col>
			</LayoutSection>
			<CounterSection />
			<ImgReel />
		</div>
	);
}

export default AdamBioPage;
