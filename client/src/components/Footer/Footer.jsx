import './Footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='top'>
				<div className='item'>
					<h1>Categories</h1>
					<span>Women</span>
					<span>Men</span>
					<span>Shoes</span>
					<span>Accessories</span>
					<span>New Arrivals</span>
				</div>
				<div className='item'>
					<h1>Links</h1>
					<span>FAQ</span>
					<span>Pages</span>
					<span>Stores</span>
					<span>Compare</span>
					<span>Cookies</span>
				</div>
				<div className='item'>
					<h1>About</h1>
					<span>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
						quaerat maiores dolorem. Rerum ipsum in obcaecati dolorum! Ut,
						voluptate. Minima aperiam eveniet consequuntur rem ullam ea vel
						explicabo asperiores commodi! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quo doloribus provident, libero dolorem laudantium
						ducimus excepturi nesciunt numquam optio unde officia fugit iste
						adipisci neque error deserunt atque aut quam.
					</span>
				</div>
				<div className='item'>
					<h1>Contact</h1>
					<span>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
						quaerat maiores dolorem. Rerum ipsum in obcaecati dolorum! Ut,
						voluptate. Minima aperiam eveniet consequuntur rem ullam ea vel
						explicabo asperiores commodi! Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quo doloribus provident, libero dolorem laudantium
						ducimus excepturi nesciunt numquam optio unde officia fugit iste
						adipisci neque error deserunt atque aut quam.
					</span>
				</div>
			</div>
			<div className='bottom'>
				<div className='left'>
					<span className='logo'>Tuki-Store</span>
					<span className='copyright'>
						© Copyright 2023. All Rights Reserved
					</span>
				</div>
				<div className='right'>
					<img src='../../img/payment.png' alt='payment' />
				</div>
			</div>
		</div>
	);
};

export default Footer;
