import React from 'react';
import './vimeo.css';

const VimeoEmbed = (props) => {
	return (
		<div className='frame-container'>
			<iframe
				src={props.vimeoLink}
				frameBorder='0'
				allow='accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture'
				styles='--aspect-ratio: 333 / 640; width: 100%'></iframe>
		</div>
	);
};

export default VimeoEmbed;
