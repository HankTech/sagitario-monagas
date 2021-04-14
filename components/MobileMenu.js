import { useState, useEffect } from 'react';
import Link from 'next/link';

const MobileMenu = ({ categories }) => {

	const [menuOpen, setMenuOpen] = useState(false)

	const handleMenuOpen = () => {
		const menuBtn = document.querySelector('.burger-button');
		const sideMenu = document.querySelector('.side-menu')

		if(!menuOpen) {
			menuBtn.classList.add('open');
			sideMenu.classList.add('menu-open', 'overflow-hidden');

			//	block body overflow
			document.body.classList.add('overflow-hidden');

			setMenuOpen(!menuOpen)

		} else {
			menuBtn.classList.remove('open');
			sideMenu.classList.remove('menu-open', 'overflow-hidden');

			//	block body overflow
			document.body.classList.remove('overflow-hidden');

			setMenuOpen(!menuOpen)
		}
	}

	const handleResize = () => {
		const intViewportWidth = window.innerWidth;
		if (intViewportWidth > 630) {
			document.body.classList.remove('overflow-hidden');

		} else {
			const menuBtn = document.querySelector('.burger-button');
			const sideMenu = document.querySelector('.side-menu')

			menuBtn.classList.remove('open');
			sideMenu.classList.remove('menu-open', 'overflow-hidden');
		}
	}

	useEffect(() => {

		window.addEventListener('resize', () => handleResize());

		return window.removeEventListener('resize', () => handleResize());

	}, [])


	return (
		<>
			{/* Button */}
			<button onClick={handleMenuOpen} type="button" className="burger-button col-start-2 justify-self-end"/>

			{/* Menu aside */}
			<aside className="side-menu text-gray-50 font-staatliches">
				<ul>
					{categories.map((category) => {
						return (
							<li key={category.id} className={`py-5 text-2xl tracking-[5px]`}>
								<Link href={`/categoria/${category.slug}`}>
									<a>{category.name}</a>
								</Link>
							</li>
						)
					})}
				</ul>
			</aside>
		</>
	)
}

export default MobileMenu
