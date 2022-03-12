/** @format */

import React, {Component} from 'react'
import _ from 'lodash'
import {getCategories} from '../../services/fakeCategories'
import {getFoods} from '../../services/fakeFoods'
import ProductsTable from '../../components/menu/products-table'
import ListGroup from '../../components/menu/list-group'
import Container from '../../components/menu/style'
import {Footer, NavBar} from '../../components'

class Foods extends Component {
	state = {
		foods: [],
		categories: [],
		currentCategory: '5fe5c183db9b000a30e0774a',
	}

	handleSelect = selectedItem => {
		this.setState({currentCategory: selectedItem})
	}

	componentDidMount() {
		const foods = getFoods()
		const categories = getCategories()
		this.setState({
			foods,
			categories: [...categories],
		})
	}

	render() {
		const {foods, categories, currentCategory} = this.state
		const filtered = foods.filter(food => food.category._id === currentCategory)
		const amount = filtered.length

		return (
			<>
				<NavBar />
				<Container>
					<div className="title">
						<h2>Menu</h2>
					</div>
					<div className="productPlase">
						<ListGroup
							items={categories}
							selectedItem={currentCategory}
							onSelect={this.handleSelect}
						/>
						<ProductsTable amount={amount} foods={filtered} />
					</div>
				</Container>
				<Footer />
			</>
		)
	}
}

export default Foods
