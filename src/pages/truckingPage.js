import React from 'react';

// components
import { PageHeader, LayoutSection, HeaderImage, AccordionDrop, BulletList, BulletItem, Paragraph, HeaderText, HoverServices, ImgReel } from '../components';
import { Col } from 'reactstrap';

function TruckingPage(props) {
	const ccDir = `/assets/images/pageAssets/truck-crashes/cc`;
	const ctDir = `/assets/images/pageAssets/truck-crashes/ct/`;
	return (
		<>
			<PageHeader>truck crashes</PageHeader>
			<LayoutSection>
				<HeaderImage image='/assets/images/pageAssets/truck-crashes/hdr.png' alt='truck crashes header' />

				<Col>
					<HeaderText>trucking crashes are not like car crashes</HeaderText>
					<Paragraph>
						There are special laws put in place by Federal and State Governments which regulate these large trucks and commercial vehicles and a thorough understanding of the complex laws
						and regulations relating to the trucking industry gives us a valuable edge. Our team will aggressively pursue the party at fault to make sure you, your family, or loved one
						gets the compensation they deserve for the injuries and losses that were suffered. To find out how the DOUGHERTY LAW FIRM can help you recover, contact us today for a free
						in-depth case evaluation.
					</Paragraph>

					{/* ************************************************* */}
					{/* 	COMMON TYPES OF CRASHES						  */}
					{/* ************************************************* */}
					<HeaderText>common causes of crashes</HeaderText>
					<AccordionDrop.Container>
						{/* Negligent Driving */}
						<AccordionDrop title='negligent driving'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ccDir}/negligent-driving-1.png`} alt='' />
								<AccordionDrop.Image src={`${ccDir}/negligent-driving-2.png`} alt='' />
							</Col>
							<Col md={6}>
								<BulletList>
									<BulletItem>Alcohol or Drugs</BulletItem>
									<BulletItem>Driving too closely</BulletItem>
									<BulletItem>Distracted driving, using a phone, GPS or other device</BulletItem>
								</BulletList>
							</Col>
						</AccordionDrop>

						{/* Improper Or Inadequate Training */}
						<AccordionDrop title='improper or inadequate training'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ccDir}/improper-training-1.png`} alt='' />
								<AccordionDrop.Image src={`${ccDir}/improper-training-2.png`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									An improperly trained truck driver lacking skills in defensive driving, handling the vehicle and other safety elements, is always a high risk to other motorists on
									the road.
								</Paragraph>
							</Col>
						</AccordionDrop>

						{/* Improper Maintenance Of Equipment */}
						<AccordionDrop title='improper maintenance of equipment'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ccDir}/improper-maint-1.png`} alt='' />
								<AccordionDrop.Image src={`${ccDir}/improper-maint-2.png`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									Badly worn or missing reflective tape, improper or damaged lighting, badly worn or cut tires and braking systems can cause drivers to lose control and cause
									horrific accidents. All truck maintenance checks must be documented, which means a truck company can be held responsible for an accident/crash if poorly maintained
									equipment is found to blame.
								</Paragraph>
							</Col>
						</AccordionDrop>

						{/* Improper Load Securements= */}
						<AccordionDrop title='improper load securement'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ccDir}/improper-load-1.jpg`} alt='' />
								<AccordionDrop.Image src={`${ccDir}/improper-load-2.jpg`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									Trucking companies and their drivers are responsible for securing their loads and properly tying down any freight that is being hauled. These are typically but not
									always hauled, on flatbed trucks. They can carry anything from concrete medians to automobiles, but they are required to secure those loads properly so that the
									load doesn’t break free and/or fall off injuring or killing others.
								</Paragraph>
							</Col>
						</AccordionDrop>

						{/* Blind Spots */}
						<AccordionDrop title='blind spots'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ccDir}/blind-spot-1.png`} alt='' />
								<AccordionDrop.Image src={`${ccDir}/blind-spot-2.jpg`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									If you’ve driven behind a large truck before you may have seen a sticker that says, “If you can’t see my mirrors, I can’t see you.” This should ALWAYS be taken
									seriously. If you’re in a truck driver’s blind spot, they may have limited or zero visibility of your vehicle. It is NEVER a good idea to closely follow any
									vehicle, but tailgating a truck can be deadly!
								</Paragraph>
							</Col>
						</AccordionDrop>

						{/* poor road conditions */}
						<AccordionDrop title='poor road conditions'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ccDir}/poor-road-1.png`} alt='' />
								<AccordionDrop.Image src={`${ccDir}/poor-road-2.png`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>Unpaved or pothole-ridden roads, and narrow lanes and/or highways without shoulders can make truck driving especially hazardous on our roadways.</Paragraph>
							</Col>
						</AccordionDrop>

						{/* Severe Weather */}
						<AccordionDrop title='severe weather'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ccDir}/severe-weather-1.png`} alt='' />
								<AccordionDrop.Image src={`${ccDir}/severe-weather-2.png`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									Snow, ice, rain, fog and extreme wind require truck drivers to be more cautious, to drive slower and or stop. Drivers that don’t can lose control and cause
									catastrophic and deadly multi-car pileups.
								</Paragraph>
							</Col>
						</AccordionDrop>

						{/* Road Construction */}
						<AccordionDrop title='road construction'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ccDir}/construction-1.png`} alt='' />
								<AccordionDrop.Image src={`${ccDir}/construction-2.png`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									Truck drivers forced to maneuver around construction sites by driving too close or on the shoulder of the roadway or in the median can easily lead to collisions
									with other vehicles or pedestrians being struck.
								</Paragraph>
							</Col>
						</AccordionDrop>

						{/* driver inexperience & unfamiliar with roads */}
						<AccordionDrop title='driver inexperience & unfamiliar with roads'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ccDir}/unfamiliar-1.png`} alt='' />
								<AccordionDrop.Image styles={{ backgroundPosition: 'bottom' }} src={`${ccDir}/unfamiliar-2.png`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									Not all truck drivers are experienced. New truck drivers have not yet mastered the skills necessary for safe driving. Combine that with truck drivers who aren’t
									familiar with certain roads are not prepared when they encounter narrow, curvy or rough roads and they can quickly lose control of their trucks causing them to
									collide with anything in their path.
								</Paragraph>
							</Col>
						</AccordionDrop>

						{/* overloading cargo & cargo securement */}
						<AccordionDrop title='overloading cargo & cargo securement'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ccDir}/overloading-1.png`} alt='' />
								<AccordionDrop.Image src={`${ccDir}/overloading-2.png`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									An oversized load can create tire blowouts, cause the load to shift (causing uneven weight distribution) trucks to jackknife or otherwise tip over due to too much
									weight. This can cause loads to topple, send debris flying over the roadway causing other vehicles to swerve and collide.
								</Paragraph>
							</Col>
						</AccordionDrop>

						{/* Other Vehicles */}
						<AccordionDrop title='other vehicles'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ccDir}/other-cars-1.png`} alt='' />
								<AccordionDrop.Image src={`${ccDir}/other-cars-2.png`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									Truck drivers not only have to worry about their own driving abilities, but must keep a careful eye on other vehicles on our roadways. Often times, other vehicles
									cut in front of trucks who need much more time and distance to stop than a car.
								</Paragraph>
							</Col>
						</AccordionDrop>

						{/* Unsafe Passing */}
						<AccordionDrop title='unsafe passing'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ccDir}/unsafe-pass-1.png`} alt='' />
								<AccordionDrop.Image src={`${ccDir}/unsafe-pass-2.png`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									On highways, it may be tough to gauge how much room there is when trying to pass a large truck. Drivers should always avoid passing on hills or curves, and avoid
									doing so unless there is plenty of room to pass without causing the truck driver to brake or swerve.
								</Paragraph>
							</Col>
						</AccordionDrop>

						{/* Wide Turns */}
						<AccordionDrop title='wide turns'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ccDir}/wide-turns-1.png`} alt='' />
								<AccordionDrop.Image styles={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} src={`${ccDir}/wide-turns-2.jpg`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									Truck drivers can have a tough time making sharp turns on busy city streets. A motorist should never race by a truck in order to turn first, especially making a
									right hand turn which puts the car in the truck driver’s blind spot.
								</Paragraph>
							</Col>
						</AccordionDrop>
					</AccordionDrop.Container>
					{/* ************************************************* */}
					{/* 	COMMON TYPES OF TRUCKS						  */}
					{/* ************************************************* */}
					<HeaderText>common types of trucks</HeaderText>
					<AccordionDrop.Container>
						{/* Tractor Trailers & Semi Trucks */}
						<AccordionDrop title='tractor trailers / semi trucks'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ctDir}/semi-truck.jpg`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									These are the cargo-hauling trucks known to many as “semi-trucks,” “big rigs,” or “18-wheelers.” They have considerable blind spots and a high center of gravity
									that makes them prone to roll overs. This combined with the fact that many big rig drivers are behind the wheel for long hours, tractor-trailers can be extremely
									dangerous to other drivers.
								</Paragraph>
							</Col>
						</AccordionDrop>

						{/* Tanker Trucks */}
						<AccordionDrop title='tanker trucks'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ctDir}/tanker-trucks.png`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									A tanker truck hauls liquids or gases, many of which are classified hazardous materials. Due to their size and shape, large tankers are prone to rollovers. This can
									be extremely dangerous if the hauled liquid or gas is flammable, or if toxic substance fumes are released.
								</Paragraph>
							</Col>
						</AccordionDrop>

						{/* Flatbed Trucks */}
						<AccordionDrop title='flatbed trucks'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ctDir}/flatbed-trucks.png`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									Flatbeds have a long open trailer to accommodate loading and unloading cargo. Flatbed trucking accidents often involve improperly secured cargo that becomes
									dislodged from the truck, hitting other vehicles which can cause massive accidents.
								</Paragraph>
							</Col>
						</AccordionDrop>

						{/* School Busses */}
						<AccordionDrop title='school busses'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ctDir}/school-busses.png`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									These vehicles carry our children and oftentimes unqualified drivers are hired, with a track record of moving violations, and these drivers should never be put in a
									position of trust and protecting our children.
								</Paragraph>
							</Col>
						</AccordionDrop>

						{/* Dump & Garbage Trucks */}
						<AccordionDrop title='dump & garbage trucks'>
							<Col md={6} className='d-flex flex-column'>
								<AccordionDrop.Image src={`${ctDir}/dump-trucks.png`} alt='' />
							</Col>
							<Col md={6}>
								<Paragraph>
									Garbage, trash, and other work vehicles such as dump trucks, can be extremely hazardous to those sharing the road with these vehicles, such as other drivers,
									bicyclist or pedestrians walking in close proximately. These vehicles are often in residential areas and carry large loads of waste, dry materials, dirt, demolition
									debris, gravel, sand and other construction materials. The loads are often top-heavy causing a risk of large blind spots, tip-over, or falling or flying debris.
								</Paragraph>
							</Col>
						</AccordionDrop>
					</AccordionDrop.Container>
				</Col>
			</LayoutSection>
			{/* *********************************** */}
			{/* 	Hover Services			        */}
			{/* *********************************** */}
			<HoverServices />
			<ImgReel />
		</>
	);
}

export default TruckingPage;
