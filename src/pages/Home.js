import React from 'react';
import Banner from '../components/Banner';
import MainProducts from '../components/MainProducts';

const homeProducts = [
	{
		title: 'Pasteles',
		img:
			'https://images.unsplash.com/photo-1566121933407-3c7ccdd26763?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80',
		content:
			'Facere magni, perferendis tempore reiciendis cum dolorem enim quibusdam optio eius illo eveniet? Omnis, dolore. Quibusdam, voluptatum. Unde et laboriosam veritatis quo.',
	},
	{
		title: 'Postres',
		img:
			'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
		content:
			'Facere magni, perferendis tempore reiciendis cum dolorem enim quibusdam optio eius illo eveniet? Omnis, dolore. Quibusdam, voluptatum. Unde et laboriosam veritatis quo.',
	},
	{
		title: 'Postres',
		img:
			'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
		content:
			'Facere magni, perferendis tempore reiciendis cum dolorem enim quibusdam optio eius illo eveniet? Omnis, dolore. Quibusdam, voluptatum. Unde et laboriosam veritatis quo.',
	},
	{
		title: 'Panaderia',
		img:
			'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
		content:
			'Facere magni, perferendis tempore reiciendis cum dolorem enim quibusdam optio eius illo eveniet? Omnis, dolore. Quibusdam, voluptatum. Unde et laboriosam veritatis quo.',
	},
];

function Home() {
	let main = homeProducts.map((section, index) => (
		<div className="col-xs-12 col-md-6" key={index}>
			<MainProducts
				title={section.title}
				img={section.img}
				content={section.content}
			/>
		</div>
	));
	return (
		<div>
			<Banner />
			<h2 className="text-center"> #LoveAtFirstBite</h2>
			<div className="container">
				<h2>Nuestros productos</h2>
				<hr />
				<div className="row">{main}</div>
			</div>
		</div>
	);
}
export default Home;
