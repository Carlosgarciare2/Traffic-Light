import React from "react";
import Semaforo from "./semaforo";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="total">
			<Semaforo />
		</div>
	);
};

export default Home;
