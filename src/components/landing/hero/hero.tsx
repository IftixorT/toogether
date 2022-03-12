import {FC, useState} from 'react'
import {IFood} from './hero.t'
import NavBar from '../../common/navbar/navbar'
import prev from '../../../assets/images/hero/prev.svg'
import next from '../../../assets/images/hero/next.svg'
import yellowCircle from '../../../assets/images/hero/yellow-circle.svg'
import burger from '../../../assets/images/hero/burger.png'
import pizza from '../../../assets/images/hero/pizza.png'
import sandwich from '../../../assets/images/hero/sandwich.png'
import {Img, Container} from './hero.e'

const foods: IFood[] = [
	{
		imgURL: burger,
		content: (
			<>
				CHEESE <br /> BIG BURGER
			</>
		),
		price: 12,
	},
	{
		imgURL: pizza,
		content: (
			<>
				SICILIAN <br /> PIZZA
			</>
		),
		price: 32,
	},
	{
		imgURL: sandwich,
		content: (
			<>
				BREAKFAST <br /> SANDWICH
			</>
		),
		price: 22,
	},
]

const Hero: FC<{}> = () => {
	const [idx, setIdx] = useState<number>(0)
	const {content, imgURL, price} = foods[idx]

	const handleNext = () => {
		setIdx(idx => (idx + 1 === foods.length ? 0 : idx + 1))
	}
	const handlePrev = () => {
		setIdx(idx => (idx === 0 ? foods.length - 1 : idx - 1))
	}

	return (
		<Container className="hero-main">
			<div className="flex-item-50">
				<p>
					New in Menu
					<hr />
				</p>
				<h1 key={idx} className="hero__title animate__bounceIn">
					{content}
				</h1>
				<div id="hero-slider-title">
					<a key={idx} href="#in" className="hero__btn animate__bounceIn">
						View Menu
					</a>
					<div className="hero__control-slider flex ">
						<Img onClick={handlePrev} src={prev} alt="" />
						<p>
							<span id="length-slider animate__bounceIn">
								0{idx + 1}
								{'  '}/{'  '}03
							</span>
						</p>
						<Img src={next} onClick={handleNext} alt="" />
					</div>
				</div>
			</div>
			<div className="flex-item-50 hero-img">
				<img className="hero__yellow-circle" src={yellowCircle} alt="circle" />
				<div id="hero-slider-burger">
					<img
						key={idx}
						className="hero__burger animate__bounceIn"
						src={imgURL}
						alt=""
					/>
				</div>
				<div key={idx} className="hero-price animate__bounceIn">
					<div className="hero__price">
						<div id="hero-slider-price">
							<span>${price}</span>
						</div>
						<span className="hero__price-btn">super price</span>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default Hero
