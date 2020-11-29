import React, { useState } from 'react';
import './imageSlider.css';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';

const ImageSlider = (props) => {
	const items = props.slides ? props.slides : [];
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item, index) => {
		const img = `url(${item.imageURL})`;
		const slideClass = `slide-${index}`;
		return (
			<CarouselItem className={`slide-item ${slideClass}`} tag='div' key={index} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)}>
				<style>
					{`.${slideClass} {
                        background-image: ${img};
                    }`}
				</style>
				{/* <CarouselCaption className='text-danger' captionText={item.caption} captionHeader={item.caption} /> */}
			</CarouselItem>
		);
	});

	const controls = props.showControls ? (
		<div>
			<CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
			<CarouselControl direction='next' directionText='Next' onClickHandler={next} />
		</div>
	) : null;
	return (
		<div>
			<Carousel className='mt-5' interval={props.interval ? props.interval : '4000'} activeIndex={activeIndex} next={next} previous={previous}>
				<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
				{slides}
				{controls}
			</Carousel>
		</div>
	);
};

export default ImageSlider;
