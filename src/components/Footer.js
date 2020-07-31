import React from 'react';
function Footer(props) {
	return (
		<footer className="page-footer font-small ">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-12 py-5">
						<div className="d-flex justify-content-center">
							<i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
							<i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
							<i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
							<i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
							<i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
							<i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-copyright text-center py-3">
				© 2020 Copyright:
				<a href="https://github.com/Guzd"> Dragonfly.com</a>
			</div>
		</footer>
	);
}
export default Footer;
