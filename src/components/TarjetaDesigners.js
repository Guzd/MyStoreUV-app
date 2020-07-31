import React from 'react';

function TarjetaDesigners(props) {
	const designers = props.designers.map((designer, i) => {
		return (
			<div className=" col-sm-4 col-md-4 col-lg-3" key={i}>
				<div className="card mt-4">
					<div className="card-title text-center">
						<h5 className="my-4">{designer.name}</h5>
						<img
							src={require(`../images/${designer.profile}`)}
							alt=""
							className="rounded col-12"
						/>
						<span className="badge badge-pill badge-secondary ml-2">
							{designer.position}
						</span>
					</div>
					<div className="card-body">{designer.description}</div>
				</div>
			</div>
		);
	});
	return <div className="row justify-content-center">{designers}</div>;
}
export default TarjetaDesigners;
