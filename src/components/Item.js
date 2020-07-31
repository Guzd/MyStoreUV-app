import React, { Component } from 'react';
class Item extends Component {
	itemRemove() {
		if (this.props.onRemove) this.props.onRemove();
	}
	render() {
		return (
			<li className="row">
				<div className="col-2">
					<img src={this.props.data.img} alt="product" className="col-12" />
				</div>
				<div className="col-4">{this.props.data.title}</div>
				<div className="col-2">{this.props.data.portion}</div>
				<div className="col-2">
					<h3>${this.props.data.price}</h3>
				</div>
				<div>
					<button
						className="btn btn-secondary"
						onClick={this.itemRemove.bind(this)}
					>
						<i className="col-12 fas fa-times"></i>
					</button>
				</div>
			</li>
		);
	}
}
export default Item;
