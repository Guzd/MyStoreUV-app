import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Contact() {
	const submit = (event) => {
		event.preventDefault();
	};

	return (
		<div className="container">
			<Row>
				<Col xs={12} md={6}>
					<img
						className="col-12"
						src="https://images.vexels.com/media/users/3/136398/isolated/preview/b682d2f42a8d5d26e484abff38f92e78-flat-message-icon-by-vexels.png"
						alt=""
					/>
				</Col>
				<Col xs={12} md={6}>
					<h2 className="text-center mt-4">¿Alguna duda?</h2>
					<h3 className="text-center mb-4">Escríbenos</h3>
					<form>
						<div className="form-group">
							<label for="name">Nombre</label>
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder="Nombre"
							/>
						</div>
						<div className="form-group">
							<label for="email">Correo</label>
							<input
								type="email"
								className="form-control"
								id="email"
								placeholder="Email"
							/>
						</div>
						<div className="form-group">
							<label for="message">Mensaje</label>
							<textarea
								className="form-control"
								id="message"
								rows="3"
							></textarea>
						</div>
						<button onClick={submit} className="col-12 btn btn-secondary">
							Enviar
						</button>
					</form>
				</Col>
			</Row>
		</div>
	);
}
export default Contact;
