//	dependencies
import { useEffect } from 'react';
import { fetchApi } from '../../libs/api';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';


//	components
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Image from '../../components/Image';
import Date from '../../components/Date';


//	incons
import Facebook from '../../components/Icons/Facebook';
import Twitter from '../../components/Icons/Twitter';
import Whatsapp from '../../components/Icons/Whatsapp';


const Article = ({ article, categories }) => {

	const seo = {
		metaTitle: article.title,
		metaDescription: article.description,
		shareImage: article.image,
		article: true,
	};

	return (
		<Layout categories={categories}>
			{/* Seo */}
			<Seo seo={seo} />

			<article>
				<header className="max-w-[960px] my-[84px] mx-auto text-center py-0 px-3">
					<div className="text-base flex items-center justify-center capitalize sm:text-lg">
						{/* category */}
						<span><Link href={`/categoria/${article.category.slug}`}><a>{article.category.name}</a></Link></span>
						{/* Separador */}
						<span className="px-2">·</span>
						{/* date */}
						<span><Date dateString={article.createdAt} /></span>
					</div>

					{/* article title */}
					<div className="py-8 px-0 sm:py-16">
						<h1 className="font-extrabold leading-tight text-black mb-6 text-5xl sm:text-[56px] md:text-7xl">{article.title}</h1>
					</div>
				</header>

				{/* article body */}
				<div className="max-w-[696px] m-auto py-0 px-3">
					<div className="mb-20">
						{/*  Banner  */}
						<figure className="relative w-screen left-2/4 right-2/4 mx-[-50vw] h-64 sm:h-72 md:h-96 lg:h-[500] xl:h-[540px]">
							<Image image={article.image} />
						</figure>
							
						{/* content */}
						<div className="markdown mt-16 md:mt-[70px] lg:mt-20 xl:mt-24">
							<ReactMarkdown source={article.content} escapeHtml={false} />
						</div>
					</div>
				</div>

				{/* article sharing */}
				<div className="max-w-[1320px] my-0 mx-auto px-3">
					<div className="mt-[60px] mb-20 text-center sm:mt-[120px]">
						<span className="block font-bold text-center text-xl mb-6">Comparte este Articulo</span>
						{/* icons */}
						<div className="flex justify-center">
							{/* Facebook */}
							<Link href={`https://www.facebook.com/sharer/sharer.php?u=https://sagitariodemonagas.vercel.app/articulo/${article.slug}`}>
								<a target="_blank" className="px-3">
									<Facebook />
								</a>
							</Link>

							{/* Twitter */}
							<Link href={`https://twitter.com/intent/tweet?url=https://sagitariodemonagas.vercel.app/articulo/${article.slug}`}>
								<a target="_blank" className="px-3">
									<Twitter />
								</a>
							</Link>

							{/* Whatsapp */}
							<Link href={`https://api.whatsapp.com/send?text=https://sagitariodemonagas.vercel.app/articulo/${article.slug}`}>
								<a target="_blank" className="px-3">
									<Whatsapp />
								</a>
							</Link>
						</div>
					</div>
				</div>

				
			</article>
		</Layout>
	)
}

export async function getStaticPaths() {
	const articles = await fetchApi("/articles");

	const paths = articles.map((article) => ({
		params: {
			slug: article.slug
		},
	}));

	return { paths: paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const articles = await fetchApi(`/articles/?slug=${params.slug}&status=published`);
	const categories = await fetchApi("/categories");

	return {
		props: { article: articles[0], categories },
		revalidate: 1,
	};
}

export default Article
