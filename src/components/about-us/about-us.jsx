import React, {Component} from 'react'
import {img1, img2, back} from '../../utils/imgExport'
import {AboutAs as About} from './style'

export default class AboutUs extends Component {
	render() {
		return (
			<About>
				<h1>About Us</h1>
				<div className="grid">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elitaa. Augue
						vivamus sit aliquam in velit volutpat scelerisque at id. Orci cursus
						egestas adipiscing quis id tempus donecc amet. Facilisi malesuada
						curabitur vulputate nulla tortor. vulputate adipiscing diam
						malesuada proin morbi mattiscc vel. Lorem ipsum dolor sit amet,
						consectetur adipiscing elitaa. Augue vivamus sit aliquam in velit
						volutpat scelerisque at id. Orci cursus egestas adipiscing quis id
						tempus donecc amet. vivamus sit aliquam in velit volutpat
						scelerisque at id. Orci cursus egestas adipiscing quis id tempus
						donecc amet.
					</p>
					<div className="imgs">
						<img src={img1} alt="photo" />
						<img src={img2} alt="photo" />
					</div>
					<img className="absolute" src={back} alt="" />
				</div>
			</About>
		)
	}
}
