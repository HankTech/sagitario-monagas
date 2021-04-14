const Footer = () => {

	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();

	return (
		<footer className="max-w-[1320px] mt-0 mx-auto px-3 py-14">
			<div className="pt-8 flex justify-center text-center border-t border-[#d1d1d1] text-[#767676]">
				<span>Copyright &copy; {currentYear} El Sagitario de Monagas Todos los derechos reservados.</span>
			</div>
		</footer>
	)
}

export default Footer;
