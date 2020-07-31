import React, { Component } from 'react';
import Item from '../components/Item';
import _ from 'lodash';
class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getTotal() {
		return _.sumBy(this.props.buyList, function (o) {
			return o.price;
		});
	}

	render() {
		return (
			<div>
				<h2>Mis compras</h2>
				<ul className="todo-list">
					{this.props.buyList.map((item, index) => (
						<Item
							data={item}
							key={index}
							onRemove={() => this.props.onRemove(index)}
						/>
					))}
				</ul>
				<div className="container">
					<h3 className="display-3 text-center"> Total$ {this.getTotal()}</h3>
				</div>
			</div>
		);
	}
}
export default Cart;
