import {FC} from 'react'
import './main.css'
import './media.css'

export interface ProductProps {
	img: string
	title: string
	value: string
}

const Product: FC<ProductProps> = ({img, title, value}) => {
	return (
		<div className="_product">
			<div className="circle">
				<div className="outCircle">
					<img src={img} alt="123" />
				</div>
			</div>
			<div className="text">
				<h2 className="inputs">{value}</h2>
				<h3 className="itemText">{title}</h3>
			</div>
		</div>
	)
}

export default Product
