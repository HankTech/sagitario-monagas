import Link from 'next/link';

//	components
import CurrentDate from './CurrentDate'
import MobileMenu from './MobileMenu';


const Nav = ({categories}) => {

	

	return (
		<nav className="z-20 grid grid-cols-[2fr,1fr] gap-6 py-[10px] px-2 sm:grid-cols-[auto,1fr] lg:grid-cols-[auto,auto,auto]">
			{/* Logo */}
			<div className="navigation__left flex items-center">
				<Link href="/">
					<a className="p-[12px] w-8 h-8 mx-20">
					</a>
				</Link>
			</div>

			{/* nav links */}
			<ul className="navigation__links hidden md:flex md:justify-center md:items-center md:mb-0 md:p-0 md:list-none">
				<li className="cursor-pointer list-item mx-auto">
					<Link href="/">
						<a className="font-medium text-black text-lg no-underline p-3">Inicio</a>
					</Link>
				</li>
				{
					categories.map((category) => {
						return (
							<li key={category.id} className="cursor-pointer list-item mx-auto">
								<Link href={`/categoria/${category.slug}`}>
									<a className="font-medium text-lg text-[#767676] no-underline transition-colors duration-100 ease-in-out hover:text-black p-3">{category.name}</a>
								</Link>
							</li>
						)
					})
				}
			</ul>

			<div className="hidden lg:flex lg:flex-row-reverse">
				<CurrentDate />
			</div>

			{/* burger button */}
			<div className="navigation__right__mobile px-2 py-5 flex justify-end items-center md:hidden">
				<MobileMenu categories={categories} />
			</div>
		</nav>
	)
}

export default Nav
