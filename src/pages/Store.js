import React, { Component } from 'react';
import Cart from '../components/Cart.js';
import { productos } from '../products.json';
// lista de productos exportada de un JSON
import Producto from '../components/Producto.js';

class Store extends Component {
	constructor(props) {
		super(props);
		this.state = {
			countItems: 0,
			cart: [],
			showCart: false,
		};
		this.addToCart = this.addToCart.bind(this);
		this.showCart = this.showCart.bind(this);
		this.remove = this.remove.bind(this);
	}
	addToCart(productSelected) {
		this.setState((prevState) => {
			return {
				...prevState,
				countItems: prevState.countItems + 1,
				cart: [...this.state.cart, productSelected],
			};
		});
	}

	remove(position) {
		let { cart } = this.state;
		let newData = [...cart.slice(0, position), ...cart.slice(position + 1)];
		this.setState({ cart: newData, countItems: newData.length });
	}

	showCart() {
		this.setState((prevState) => {
			return {
				...prevState,
				showCart: !prevState.showCart,
			};
		});
	}
	render() {
		const showCart = this.state.showCart;
		let contenido;
		if (showCart) {
			contenido = (
				<Cart buyList={this.state.cart} onRemove={this.remove}></Cart>
			);
		} else {
			const items = [];
			for (let key in productos) {
				items.push(
					<div className="container" key={key}>
						<h4>{key}</h4>
						<hr />
						<div className="row justify-content-center">
							{productos[key].map((item, index) => (
								<Producto producto={item} key={index} add={this.addToCart} />
							))}
						</div>
					</div>
				);
			}
			contenido = items;
		}

		return (
			<div>
				<h1 className="text-center display-3">Store</h1>
				<h4 className="text-center">#LoveAtFirstBite</h4>
				<div className="container">
					<div className="d-flex justify-content-end align-items-center">
						<h5 className="mr-2">
							<span>
								<i className="fas fa-shopping-cart"></i>
							</span>
							({this.state.countItems})
						</h5>
						<button className="btn btn-light" onClick={this.showCart}>
							{this.state.showCart ? 'Cerrar carrito' : 'Ver carrito'}
						</button>
					</div>
				</div>
				<div>{contenido}</div>
			</div>
		);
	}
}
export default Store;
