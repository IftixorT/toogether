import {FC, useEffect, useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../../assets/images/navbar/logo.svg'
import phone from '../../../assets/images/navbar/telephone.svg'
import dropdown from '../../../assets/images/navbar/dropdown.svg'
import {Wrapper} from './navbar.e'
import {Container} from '..'
const link = '#'

const NavBar: FC<{bgColor?: string}> = ({bgColor = '#000'}) => {
	const navbar = useRef<HTMLHeadingElement>(null)

	useEffect(() => {
		let lastScrollTop = 0
		window.addEventListener('scroll', () => {
			let scrollTop = window.pageYOffset || document.documentElement.scrollTop
			const classList = navbar.current && navbar.current.classList

			if (scrollTop === 0) return classList && classList.remove('show')
			if (scrollTop > lastScrollTop) classList && classList.remove('show')
			else classList && classList.add('show')
			lastScrollTop = scrollTop
		})
	}, [])

	const [showNav, setShowNav] = useState(false)
	return (
		<Wrapper ref={navbar} bgColor={bgColor} className="header show">
			<Container className="flex">
				<Link to="/">
					<img src={logo} alt="Logo" className="logo" />
				</Link>
				<nav className={showNav ? 'flex res-nav' : 'flex'}>
					<ul className="nav flex">
						<li className="nav__item">
							<Link to="/" className="nav__link">
								Home
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/menu" className="nav__link">
								Menu
							</Link>
						</li>
						<li className="nav__item">
							<a href={link} className="nav__link">
								Our Brands
							</a>
						</li>
						<li className="nav__item">
							<a href={link} className="nav__link">
								About
							</a>
						</li>
						<li className="nav__item">
							<Link to="/partnership" className="nav__link">
								Partnership
							</Link>
						</li>
						<a href={link} id="nav-closer" onClick={() => setShowNav(false)}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 24 24"
								style={{fill: '#fff'}}
							>
								<path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
							</svg>
						</a>
					</ul>
					<div className="header__panel flex">
						<a href="tel:+998998961348" className="header__number">
							<img src={phone} alt="" /> +4424 401 19 76
						</a>
						<div className="header__language">
							<select name="language" id="language">
								<option value="en">ENG</option>
								<option value="ru">RUS</option>
								<option value="uz">UZB</option>
							</select>
							<img src={dropdown} alt="" />
						</div>
					</div>
				</nav>
				<a href={link} id="opener-nav" onClick={() => setShowNav(true)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="34"
						height="34"
						viewBox="0 0 24 24"
						style={{fill: '#fff;'}}
					>
						<path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
					</svg>
				</a>
			</Container>
		</Wrapper>
	)
}

export default NavBar
