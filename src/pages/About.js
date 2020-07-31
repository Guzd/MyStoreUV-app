import React from 'react';
//Datos iniciales almacenados en un json
import { designers } from '../designers.json';
import TarjetaDesigners from '../components/TarjetaDesigners.js';

function About() {
	return (
		<div className="container">
			<h2 className="mt-4">Quiénes somos</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia est
				voluptas consequuntur ipsa dignissimos, voluptatibus sit vel assumenda
				omnis a provident quisquam nesciunt sed? Tempora, eaque amet! Earum,
				optio vel.
			</p>
			<h3 className="text-center">Nuestro equipo</h3>
			<hr />
			<TarjetaDesigners designers={designers}></TarjetaDesigners>
		</div>
	);
}
export default About;
