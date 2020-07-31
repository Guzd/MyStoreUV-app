import React from 'react';
import { Link } from 'react-router-dom';
function Banner() {
	return (
		<div className="jumbotron ">
			<div className="row">
				<div className="col-md-8">
					<h1 className="display-3">My store</h1>
					<blockquote className="blockquote text-right">
						<p className="mb-0">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
							posuere erat a ante.
						</p>
						<footer className="blockquote-footer">
							Someone famous in <cite title="Source Title">Source Title</cite>
						</footer>
					</blockquote>
					<hr className="my-4" />
				</div>
				<div className="col-md-4 text-center">
					<i className="fas fa-shopping-basket fa-5x"></i>
					<p className="lead">
						<Link
							className="btn btn-secondary btn-lg"
							to="/store"
							role="button"
						>
							Empezar a comprar
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
export default Banner;
