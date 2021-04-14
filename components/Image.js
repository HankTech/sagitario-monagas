import Image from 'next/image';
import { getApiMedia } from '../libs/media';


const ImageComponent = ({ image, className }) => {
	const imageUrl = getApiMedia(image)

	return (
		<Image 
			className={className}
			layout="fill"
			src={imageUrl}
			alt={image.alternativeText || image.name}
		/>
	)
}

export default ImageComponent
