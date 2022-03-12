import img1 from '../../../../assets/images/food/food-category-imgs/001-burger.svg'
import img2 from '../../../../assets/images/food/food-category-imgs/002-pizza.svg'
import img3 from '../../../../assets/images/food/food-category-imgs/003-doughnut.svg'
import img4 from '../../../../assets/images/food/food-category-imgs/004-hot dog.svg'
import img5 from '../../../../assets/images/food/food-category-imgs/007-chicken thigh.svg'

const Categories = () => {
	return (
		<>
			<h1 className="menu_head">Menu</h1>
			<div className="categories ">
				<div className="section">
					<img src={img1} alt="icon" />
					<p>burgers</p>
				</div>
				<div className="section">
					<img src={img2} alt="icon" />
					<p>pizzas</p>
				</div>
				<div className="section">
					<img src={img3} alt="icon" />
					<p>hot dogs</p>
				</div>
				<div className="section">
					<img src={img4} alt="icon" />
					<p>beverages</p>
				</div>
				<div className="section">
					<img src={img5} alt="icon" />
					<p>chicken</p>
				</div>
			</div>
		</>
	)
}

export default Categories
