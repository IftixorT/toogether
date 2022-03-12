import styled from 'styled-components'

const Container = styled.div`
	padding: 66px 106px;
	.title {
		border-bottom: 1px solid #dedede;
		margin-bottom: 60px;
	}
	.title h2 {
		font-weight: 800;
		font-size: 36px;
		line-height: 43px;
		text-transform: uppercase;
	}
	.productPlase {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.Mcategories {
		width: 140px;
		margin-right: 80px;
	}
	.Mcategory {
		font-weight: 600;
		font-size: 24px;
		line-height: 29px;
		color: #9b9b9b;
		margin-bottom: 33px;
		cursor: pointer;
		list-style: none;
	}
	.Mcategory img {
		display: none;
	}
	.Mcategory img:hover {
		transform: scale(1.1);
	}
	.Mcategory:hover {
		color: #ffc339;
	}
	.active {
		color: #ffc339;
	}
	.active img {
		transform: scale(1.4);
	}
	.active img:hover {
		transform: scale(1.4);
	}

	.products {
		width: 900px;
		max-height: 1115px;
		overflow-y: auto;
		padding: 0 60px 60px 20px;
	}
	.products::-webkit-scrollbar {
		width: 6px;
		background: #efefef;
		border-radius: 20px;
	}
	.products::-webkit-scrollbar-thumb {
		background: #ffc339;
		border-radius: 20px;
	}

	.not-food {
		width: 100%;
		font-size: 30px;
		text-align: center;
		text-transform: uppercase;
		color: #ffc339;
		margin: 30px auto;
	}

	/**
  *   @media
  */

	@media (max-width: 992px) {
		.title {
			margin-bottom: 30px;
		}
		.productPlase {
			flex-direction: column;
			justify-content: flex-start;
		}

		.Mcategories {
			margin-right: 0;
			display: flex;
			justify-content: space-between;
			width: 100%;
			overflow-x: auto;
		}
		.Mcategories::-webkit-scrollbar {
			height: 0px;
		}

		.Mcategory {
			font-size: 22px;
			margin: 10px 30px 30px 0;
		}
		.Mcategory:last-child {
			margin-right: 0;
		}

		.products {
			width: auto;
			padding: 0 20px;
			margin: 0;
		}
	}
	@media (max-width: 760px) {
		.Mcategory img {
			display: block;
		}
		.Mcategory span {
			display: none;
		}
		& {
			padding: 20px 10px;
		}
		.productPlase {
			padding: 0;
		}
		.Mcategories {
			padding: 0 20px;
		}
		.Mcategory {
			margin-right: 15px;
			margin-left: 15px;
		}
		.products {
			overflow: visible;
		}
	}
	@media (max-width: 500px) {
		.Mcategory img {
			transform: scale(0.7);
		}
		.Mcategory img:hover {
			transform: scale(0.8);
		}
		.active img {
			transform: scale(1);
		}
		.active img:hover {
			transform: scale(1);
		}
		.Mcategory {
			margin-right: 5px;
			margin-left: 5px;
		}
	}
`

export default Container
