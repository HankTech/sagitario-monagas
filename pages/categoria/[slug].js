import { fetchApi } from '../../libs/api';
import Link from 'next/link'

//	components
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import MoreArticles from '../../components/MoreArticles';

const Category = ({ category, categories }) => {
	const seo = {
		metaTitle: category.name,
    	metaDescription: `Todos los articulos de ${category.name}`,
	};

	return (
		<>
			<Layout categories={categories}>
				{/* Seo */}
				<Seo seo={seo} />

				{/* categories title */}
				<div className="pt-[104px] px-3 pb-14 text-center">
					<h1 className="font-extrabold text-5xl leading-tight text-black mb-6 sm:text-[56px] md:text-7xl">{category.name}</h1>
				</div>

				<main>
					{/* articles list */}
					<div className="pt-16 pb-20">
						<div className="max-w-[1320px] my-0 mx-auto px-3">
							<MoreArticles skipIndex={0} limit={9} articles={category.articles} />
						</div>
					</div>
				</main>
			</Layout>
		</>
	) 
}


export async function getStaticPaths() {
	const categories = await fetchApi("/categories");

	const paths = categories.map((category) => ({
		params: {
			slug: category.slug
		},
	}));

	return { paths: paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const category_array = await fetchApi(`/categories?slug=${params.slug}`);

	const category = await category_array[0]

	const categories = await fetchApi("/categories");

	return {
		props: { category, categories },
		revalidate: 1
	}
}

export default Category
