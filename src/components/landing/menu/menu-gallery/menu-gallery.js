import './styles.css'
import Img1 from '../../../../assets/images/menu-gallery/menu-gallery-img-1.jpg'
import Img2 from '../../../../assets/images/menu-gallery/menu-gallery-img-2.jpg'
import Img3 from '../../../../assets/images/menu-gallery/menu-gallery-img-3.jpg'
import Img4 from '../../../../assets/images/menu-gallery/menu-gallery-img-4.jpg'
import Img5 from '../../../../assets/images/menu-gallery/menu-gallery-img-5.jpg'
import Img6 from '../../../../assets/burger.png'
import Img7 from '../../../../assets/images/menu-gallery/menu-gallery-img-7.jpg'
import Img8 from '../../../../assets/images/menu-gallery/menu-gallery-img-8.jpg'
import Img9 from '../../../../assets/images/menu-gallery/menu-gallery-img-9.jpg'

const Gallery = () => {
	return (
		<div className="menu-gallery">
			<div className="menu-gallery-card1">
				<div className="menu-gallery-img1">
					<img className="gallery-img" src={Img1} alt="gallery" />
				</div>
				<div className="menu-gallery-img1">
					<img className="gallery-img" src={Img2} alt="gallery" />
				</div>
			</div>
			<div className="menu-gallery-card2">
				<div className="menu-gallery-img2">
					<img className="gallery-img" src={Img3} alt="gallery" />
				</div>
				<div className="menu-gallery-img2">
					<img className="gallery-img" src={Img4} alt="gallery" />
				</div>
				<div className="menu-gallery-img2">
					<img className="gallery-img" src={Img5} alt="gallery" />
				</div>
				{/* <div className="menu-gallery-img2 bg">

					<div class="container">

						<div class="row">
							<div class="col-md-6">
								<p>
								THIS MONTH’S SPECIAL
								</p>
								<h6>The Japanese
									Oishii Burger</h6>

							</div>
							<div class="col-md-6">
								<img className="gallery-img" src={Img6} alt="gallery" />
							</div>

						</div>


					</div>

				</div>
				<div className="menu-gallery-img2">
					<img className="gallery-img" src={Img7} alt="gallery" />
				</div>
				<div className="menu-gallery-img2">
					<img className="gallery-img" src={Img8} alt="gallery" />
				</div> */}
			</div>
		</div>
	)
}
export default Gallery;
