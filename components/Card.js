import Link from 'next/link';

// components
import Image from './Image';
import Date from './Date';


const Card = ({ article }) => {
	
	return (
		<div className="relative flex flex-col bg-white border border-[#e1e1e1] rounded-[4px] transition-all duration-200 ease-in-out hover:shadow-2xl">
			{/* card image */}
			<Link href={`/articulo/${article.slug}`}>
				<a className="article-card__image relative pt-[50%] overflow-hidden">
					<Image className="rounded-t-[4px]" image={article.image} />
				</a>
			</Link>


			{/* card body */}
			<div className="article-card__body flex flex-col pt-4 px-4 pb-[10px] md:pt-6 md:px-6 md:pb-5">
				{/* tag  */}
				<Link href={`/categoria/${article.category.slug}`}>
					<a className="no-underline font-medium text-pink-800 text-base mb-2">
						<span>{article.category.name}</span>
					</a>
				</Link>

				{/* title */}
				<h5 className="font-extrabold text-black leading-snug text-lg mt-0 mb-[10px] p-0 sm:text-2xl sm:leading-tight">
					<Link href={`/articulo/${article.slug}`}>
						<a className="no-underline">
							{article.title}
						</a>
					</Link>
				</h5>

				
				{/* description */}
				<span className="font-medium tracking-wide text-[#767676] text-base mt-auto mb-8">
					{article.description}
				</span>
				

				{/* date */}
				<div className="capitalize text-gray-900 mt-auto">
					<Date dateString={article.createdAt} />
				</div>
			</div>
		</div>
	)
}

export default Card
