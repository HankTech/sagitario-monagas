import { useState, useEffect } from 'react'


// components
import Articles from './Articles';


const MoreArticles = ({ articles, skipIndex, limit }) => {

	// length max articles
	const LENGTH = articles.length;

	// limit
	const LIMIT = limit;

	//	To check we have more records or not.
	const [showMore, setShowMore] = useState(true);

	//	Initial render list
	const [articlesToShow, setArticlesToShow] = useState([]);

	//	For managing the index.
	const [index, setIndex] = useState(skipIndex);

	const loadMore = () => {
		const newIndex = index + LIMIT;
		const newShowMore =  newIndex < (LENGTH - 1);
		const newArticlesToShow = articlesToShow.concat(articles.slice(index, newIndex));

		setIndex(newIndex);
		setArticlesToShow(newArticlesToShow);
		setShowMore(newShowMore);
	}

	useEffect(() => {
		loadMore()
	},[])

	return (
		<>
		
			{ articlesToShow && <Articles articles={ articlesToShow } /> }
			{ showMore && 
				(	
					<>

						<div className="pt-[72px] pb-14 text-center">
							<button onClick={ loadMore } className="cursor-pointer focus:outline-none border border-[#d1d1d1] rounded-[4px] hover:border-gray-900 shadow-sm bg-white text-[#767676] h-12 px-4 leading-10 text-base sm:text-lg">
								Cargar mas articulos
							</button>
						</div>
					</>
			 	)
				
							
					
				
			}

			{/*  */}

			{/* button load more */}
			
		</>
	)
}

export default MoreArticles;
