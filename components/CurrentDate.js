const CurrentDate = () => {

	const options = {
		year: "numeric",
		month: "short",
		day: "numeric"
	}

	const currentDate = new Date().toLocaleDateString('es-VE', options)

	return (
		<span className="font-medium capitalize text-lg text-[#767676] p-3">{currentDate}</span>
	)
}

export default CurrentDate;
