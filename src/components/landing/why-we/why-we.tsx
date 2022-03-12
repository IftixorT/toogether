import {FC} from 'react'
import Product from './product/product'
import img1 from '../../../assets/images/why-we/inCircle.svg'
import img2 from '../../../assets/images/why-we/Group 1238.svg'
import img3 from '../../../assets/images/why-we/Group 1239.svg'

export interface WhyWeProps {}

const WhyWe: FC<WhyWeProps> = () => {
	return (
		<div id="container3">
			<h1 className="title">Why Are We?</h1>
			<div className="content">
				<Product img={img1} value="01" title={'ONLY FRESH PRODUCTS'} />
				<Product img={img2} value="02" title={'QUALIFED PERSONNEL'} />
				<Product img={img3} value="03" title={'CLEANLINES AND TIDINESS'} />
			</div>
		</div>
	)
}

export default WhyWe
