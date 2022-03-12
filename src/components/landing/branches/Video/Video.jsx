import React from 'react'
import VideoPlayer from 'react-video-js-player'
import About from './../../../../assets/video/video_2022-03-04_18-20-17.mp4'
import './Video.css'
const Video = () => {
	const videoSrc = About;
	return (
		<div>
			<div className="video">
				<VideoPlayer
					src={videoSrc}
					className="videoPlayer"
				/>
			</div>

		</div>
	)
}

export default Video