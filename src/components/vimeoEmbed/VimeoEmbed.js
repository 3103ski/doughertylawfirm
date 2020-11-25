import React from 'react';

const VimeoEmbed = (props) => {
	return (
		<iframe
			src={props.vimeoLink}
			frameBorder='0'
			allow='accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture'
			allowFullScreen
			styles='--aspect-ratio: 333 / 640; border-radius: 10px;'></iframe>
	);
};

export default VimeoEmbed;
