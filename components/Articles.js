//	components
import Card from './Card';

const Articles = ({ articles, featuredArticles }) => {

	return (
		<>
			{featuredArticles ?  
				
				<div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-3 md:grid-cols-[repeat(auto-fill,minmax(460px,1fr))] md:gap-6">
					{articles.map((article) => {
						return (
							<Card article={article} key={article.slug} />
						)
					})}
				</div>
				
				:

				<div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-3 md:grid-cols-[repeat(auto-fill,minmax(310px,1fr))] md:gap-6">
					{articles.map((article) => {
						return (
							<Card article={article} key={article.slug} />
						)
					})}
				</div>
			}
			
			
		</>
	)
}

export default Articles
