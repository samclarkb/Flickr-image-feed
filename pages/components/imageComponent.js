import React from 'react'

const ImageComponent = props => {
	return (
		<div>
			<ul>
				{props.photos.map(photo => (
					<li key={'key'}>
						<img
							src={
								'https://farm' +
								photo.farm +
								'.staticflickr.com/' +
								photo.server +
								'/' +
								photo.id +
								'_' +
								photo.secret +
								'.jpg'
							}
						></img>
					</li>
				))}
			</ul>
		</div>
	)
}

export default ImageComponent
