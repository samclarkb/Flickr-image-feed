import React from 'react'

const ImageComponent = props => {
	return (
		<div>
			<ul>
				{props.photos.map(photo => (
					<li>
						<h2 key={photo.id}>{photo.title}</h2>

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
