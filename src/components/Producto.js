import React from 'react';

function Producto(props) {
	const productSelected = props.producto;
	return (
		<div className="card text-white bg-secondary mb-3 mr-1 col-xs-12 col-md-3">
			<div className="card-header">{props.producto.title}</div>
			<img className="card-img-top" src={props.producto.img} alt="Card cap" />
			<div className="card-body">
				<button
					className="col-12 btn btn-light"
					onClick={() => props.add(productSelected)}
				>
					Agregar a carrito
				</button>
			</div>
		</div>
	);
}
export default Producto;
