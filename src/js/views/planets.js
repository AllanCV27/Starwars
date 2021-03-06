import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export const Planets = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(store.planets[params.id]);
	return (
		<div>
			<div className="jumbotron row">
				<img
					className="cardImg col-6"
					src="https://www.wallpapertip.com/wmimgs/41-415519_desktop-wallpaper-star-wars-planets.jpg"
					width="400px"
					height="200"
					padding="5px"
					alt="..."
				/>
				<div className="lead col-6">
					<h1 className="nombres">{store.planets[params.id].name}</h1>
					<p>
						La nave en la que viaja la princesa Leia es capturada por las tropas imperiales al mando del
						temible Darth Vader. Antes de ser atrapada, Leia consigue introducir un mensaje en su robot
						R2-D2, quien acompañado de su inseparable C-3PO logra escapar. Tras aterrizar en el planeta
						Tattooine son capturados y vendidos al joven Luke Skywalker, quien descubrirá el mensaje oculto
						que va destinado a Obi Wan Kenobi, maestro Jedi a quien Luke debe encontrar para salvar a la
						princesa.
					</p>
				</div>
				<hr className="linea" />
				<div className="caracteristicas">
					<ul className="list row">
						<li className="charaster col-3">Climate: {" " + store.planets[params.id].climate}</li>
						<li className="charaster col-3">Diameter: {" " + store.planets[params.id].diameter}</li>
						<li className="charaster col-3">Gravity: {" " + store.planets[params.id].gravity}</li>
						<li className="charaster col-3">Population: {" " + store.planets[params.id].population}</li>
					</ul>
					<Link to={"/"}>
						<span href="#" className="btn btn-warning btn-lg btn-block" id="back">
							Back
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
