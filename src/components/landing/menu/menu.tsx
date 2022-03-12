import {FC} from 'react'
import Categories from './categories/categories'
import FoodListGroup from './food-list-group'
import './style.css'
export interface MenuProps {}

const Menu: FC<MenuProps> = () => {
	return (
		<div className="menu">
			<Categories />
			<FoodListGroup />
			<button className="view">View Menu</button>
		</div>
	)
}

export default Menu
