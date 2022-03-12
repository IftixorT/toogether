import FoodProperty from './style.jsx'
import Data from './data.js'
const FoodProperties = numberOfImg => {
	const {imgURL, price, title, description, isRecommended, size} = Data
	return (
		<>
			<FoodProperty>
				<img src={imgURL[numberOfImg.imgUrl]} alt="png" />
				<p className="recommend">{isRecommended}</p>
				<span className="line"></span>
				<h3 className="food-name">{title}</h3>
				<p className="data">{description}</p>
				<div className="cost">${price}</div>
			</FoodProperty>
		</>
	)
}

export default FoodProperties
