import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import './FeaturedProducts.scss';

const FeaturedProducts = ({ type }) => {
	const { data, loading, error } = useFetch(
		`/products?populate=*&[filters][type][$eq]=${type}`
	);

	return (
		<div className='featuredProducts'>
			<div className='top'>
				<h1>{type} products</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sit
					veritatis soluta iusto tempora iure accusantium at sequi excepturi cum
					autem, culpa molestias eius voluptatem sint eaque molestiae
					exercitationem pariatur. Lorem, ipsum dolor sit amet consectetur
					adipisicing elit. Architecto ratione aperiam error odio dolor quidem
					eveniet inventore pariatur eos consequatur, repellat blanditiis vitae
					dicta autem. Amet illo non cupiditate voluptatem.
				</p>
			</div>
			<div className='bottom'>
				{error ? 'Something went wrong!' : loading}
				{loading
					? 'loading'
					: data?.map((item) => <Card item={item} key={item.id} />)}
			</div>
		</div>
	);
};

export default FeaturedProducts;
