import React from 'react';
function MainProducts(props) {
	return (
		<div className="card mb-3">
			<img className="card-img-top" src={props.img} alt="Car cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.content}</p>
			</div>
		</div>
	);
}
export default MainProducts;
