import { fetchApi } from '../libs/api';

//	components
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Articles from '../components/Articles';
import MoreArticles from '../components/MoreArticles';


const HomePage = ({ articles, categories, homepage }) => {
	return (
		<Layout categories={categories}>
			<Seo seo={homepage.seo} />

			<div className="pt-[104px] px-3 pb-14 text-center">
				<h1 className="font-extrabold text-5xl leading-tight text-black mb-6 sm:text-[56px] md:text-7xl">{homepage.hero.title}</h1>
			</div>

			<main>
				<div className="py-16">
					<div className="max-w-[1320px] my-0 mx-auto px-3">
						<h3 className="font-extrabold text-[28px] leading-snug mt-0 my-0 mb-8 text-black sm:text-5xl sm:mb-10">
							Articulos Recientes
						</h3>
						<Articles featuredArticles={true} articles={articles.slice(0, 4)} />
					</div>
				</div>

				{ articles.length > 4 ? 
					(
						<div className="pt-16 pb-20">
							<div className="max-w-[1320px] my-0 mx-auto px-3">
								<h3 className="font-extrabold text-[28px] leading-snug mt-0 my-0 mb-8 text-black sm:text-5xl sm:mb-10">
									Mas Articulos
								</h3>
								<MoreArticles skipIndex={5} limit={4} articles={articles} />
							</div>
						</div>
					)
					:
					null
				}
			</main>
		</Layout>
	)
}

export async function getStaticProps () {
	// Run API calls in parallel
	const [articles, categories, homepage] = await Promise.all([
		fetchApi("/articles?status=published&_sort=id:DESC&_limit=24"),
		fetchApi("/categories"),
		fetchApi("/homepage"),
	]);

	// Pass the data to our page via props
	return {
		props: { articles, categories, homepage},
		revalidate: 1,
	}
}

export default HomePage
