import {FC} from 'react'
import styled from 'styled-components'

import burger1 from '../../../assets/svg-png/burger 1.svg'
import bgburger from './../../../assets/svg-png/bg-burger.svg'
import location from './../../../assets/svg-png/location.svg'
import location_img from './../../../assets/images/image 40.png'
import Video from './Video/Video'

export interface BranchesProps {}

const Branches: FC<BranchesProps> = () => {
	return (
		<ViewMenuStyle bgColor="white">
			<div className="container-fluid">
				<div className="container">
					<div className="row mb-3">
						<div className="col-md-6">
							<div className="container bg-or">
								<div className="row p-4">
									<div className="col-7 py-5">
										<p className="text-white">this month's special</p>
										<h1 className="text-white">The Japanese Oishii Burger</h1>
									</div>
									<div className="col-5 bg-or2 img-con">
										<p className="food_price">$12</p>
										<img src={burger1} alt="csa" className="img-fluid" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="container bg-or2">
								<div className="row p-4">
									<div className="col-7 py-5">
										<p>festive special</p>
										<h1 className="text-white">Burger with benefits</h1>
									</div>
									<div className="col-5 img-con bg-or">
										<p className="food_price">$12</p>
										<img src={burger1} alt="csa" className="img-fluid" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row second-row p-2  ">
						<div className="col-md-4 p-5 food-ad">
							<div className="row">
								<div className="col-md-6">
									<h1>Fatboy Combo</h1>
								</div>
								<div className="col-md-6">
									<div className="img-con2 bg-or2">
										<p className="food_price-2">$12</p>
										<img src={burger1} alt="csa" className="img-fluid" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 p-5 food-ad">
							<div className="row">
								<div className="col-md-6">
									<h1>Fatboy Combo</h1>
								</div>
								<div className="col-md-6">
									<div className="img-con2 bg-or2">
										<p className="food_price-2">$12</p>
										<img src={burger1} alt="csa" className="img-fluid" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 p-5 food-ad bg-burger">
							<div className="row"></div>
						</div>
					</div>
				</div>
			</div>
			<h1 className="text-center my-5">Our Branch</h1>
			<div className="container">
				<div className="row locations-container">
					<div className="locations mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
						<div className="location">
							<div className="row">
								<div className="col-3 pb-4">
									<img className="loc-svg" src={location} alt="location" />
								</div>
								<div className="col-9">
									<h3>London</h3>
									<p>Charles II, street 47</p>
								</div>
							</div>
						</div>
						<div className="location">
							<div className="row">
								<div className="col-3 pb-4">
									<img className="loc-svg" src={location} alt="location" />
								</div>
								<div className="col-9">
									<h3>London</h3>
									<p>Charles II, street 47</p>
								</div>
							</div>
						</div>
						<div className="location">
							<div className="row">
								<div className="col-3 pb-4">
									<img className="loc-svg" src={location} alt="location" />
								</div>
								<div className="col-9">
									<h3>London</h3>
									<p>Charles II, street 47</p>
								</div>
							</div>
						</div>
						<div className="location">
							<div className="row">
								<div className="col-3 pb-4">
									<img className="loc-svg" src={location} alt="location" />
								</div>
								<div className="col-9">
									<h3>London</h3>
									<p>Charles II, street 47</p>
								</div>
							</div>
						</div>
						<div className="location">
							<div className="row">
								<div className="col-3 pb-4">
									<img className="loc-svg" src={location} alt="location" />
								</div>
								<div className="col-9">
									<h3>London</h3>
									<p>Charles II, street 47</p>
								</div>
							</div>
						</div>
					</div>
					<div className="locations mx-auto col-xl-4 col-lg-6 col-md-6 col-sm-12">
						<div className="location">
							<div className="row">
								<div className="col-3 pb-4">
									<img className="loc-svg" src={location} alt="location" />
								</div>
								<div className="col-9">
									<h3>London</h3>
									<p>Charles II, street 47</p>
								</div>
							</div>
						</div>
						<div className="location">
							<div className="row">
								<div className="col-3 pb-4">
									<img className="loc-svg" src={location} alt="location" />
								</div>
								<div className="col-9">
									<h3>London</h3>
									<p>Charles II, street 47</p>
								</div>
							</div>
						</div>
						<div className="location">
							<div className="row">
								<div className="col-3 pb-4">
									<img className="loc-svg" src={location} alt="location" />
								</div>
								<div className="col-9">
									<h3>London</h3>
									<p>Charles II, street 47</p>
								</div>
							</div>
						</div>
						<div className="location">
							<div className="row">
								<div className="col-3 pb-4">
									<img className="loc-svg" src={location} alt="location" />
								</div>
								<div className="col-9">
									<h3>London</h3>
									<p>Charles II, street 47</p>
								</div>
							</div>
						</div>
						<div className="location">
							<div className="row">
								<div className="col-3 pb-4">
									<img className="loc-svg" src={location} alt="location" />
								</div>
								<div className="col-9">
									<h3>London</h3>
									<p>Charles II, street 47</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6 mx-auto col-xl-4 col-lg-6 col-sm-12 about-location">
						<div className="location-image">
							<img src={location_img} alt="loc" className="img-fluid" />
						</div>
						<div className="pt-4">
							<p className="text-gray">Address</p>
							<h3>Vulvergempton, Charles II, Street 47</h3>
						</div>
						<div className="py-1">
							<p className="text-gray">Call</p>
							<h3>+4424 401 19 76</h3>
						</div>
						<div className="btn btn-warning mt-4">
							<h4>View in map</h4>
						</div>
					</div>
				</div>
			</div>
			<Video/>
		</ViewMenuStyle>
	)
}

export default Branches

const ViewMenuStyle = styled.div<{bgColor: string}>`
	background-color: ${props => props.bgColor};
	.bg-or {
		background-color: #fe7a15;
		border-radius: 1rem;
	}
	.bg-or2 {
		background-color: #f8bd43;
		border-radius: 1rem;
	}
	.img-con {
		border-radius: 50%;
		width: 190px;
		height: 190px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}
	.img-con2 {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		border-radius: 50%;
	}
	.food_price {
		position: absolute;
		top: 0;
		left: 0;
		background-color: #e7272d;
		padding: 10px;
		color: white;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
	}
	.second-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.second-row .col-md-4 {
		border-radius: 1rem;
		color: white;
		width: 350px;
		margin-top: 1rem;
	}
	.second-row .col-md-4:first-child {
		background-color: #e7272d;
	}
	.second-row .col-md-4:nth-child(2) {
		background-color: #e7272d;
	}
	.second-row .col-md-4:nth-child(3) {
		background-color: #e7272d;
	}
	.second-row .food {
		position: absolute;
	}
	.foods {
		position: relative;
	}
	.food1 {
		width: 100px;
		top: 0;
	}
	.food2 {
		width: 100px;
		top: 10px;
	}
	.food3 {
		width: 100px;
		right: 0;
	}

	.food_price-2 {
		position: absolute;
		background-color: #222;
		bottom: -20px;
		right: 0;
		padding: 10px;
		border-radius: 50%;
	}
	.location > div {
		border: solid #888888 1.5px;
		border-radius: 18px;
		padding: 1rem 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 340px;
		height: 100px;
		margin: auto;
		margin-bottom: 1.5rem;
	}
	.location > div:hover {
		background-color: #fe7a15;
		color: #eaeaea;
		cursor: pointer;
		.loc-svg {
			color: white;
		}
	}
	.about-location {
		background-color: #eaeaea;
		border-radius: 2rem;
		padding: 2rem;
	}

	.location-image > img {
		border-radius: 1rem;
	}
	.food-ad {
		margin: auto;
	}
	.bg-burger {
		height: 213px;
		background-image: url('${bgburger}');
		background-repeat: no-repeat;
		background-size: cover;
	}
`
