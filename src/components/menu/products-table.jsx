/** @format */

import {Component} from 'react'
import FoodProperties from '../food-properties/food-properties'

export default class ProductsTable extends Component {
	render() {
		const {foods, amount} = this.props
		if (!amount) return <p className="not-food"> Not found products 😔</p>
		return (
			<div class="products">
				{foods.map(
					({imgURL, price, title, description, isRecomended, size, _id}) => (
						<FoodProperties
							key={_id}
							imgURL={imgURL}
							title={title}
							description={description}
							price={price}
							size={size}
							isRecomended={isRecomended}
						/>
					),
				)}
			</div>
		)
	}
}
