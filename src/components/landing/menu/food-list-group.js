import FoodProperties from './food-properties/food-properties'
const FoodListGroup = () => {
	return (
		<div className="food-container">
			<FoodProperties imgUrl={0} />
			<FoodProperties imgUrl={0} />
			<FoodProperties imgUrl={0} />
			<FoodProperties imgUrl={0} />
			<FoodProperties imgUrl={1} />
			<FoodProperties imgUrl={1} />
			<FoodProperties imgUrl={1} />
			<FoodProperties imgUrl={1} />
		</div>
	)
}

export default FoodListGroup
