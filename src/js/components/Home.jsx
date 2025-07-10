import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounter from "./SimpleCounter";
//create your first component
const Home = ({ counter }) => {

	const cuatro = Math.floor(counter / 1000) % 10
	const tres = Math.floor(counter / 100) % 10
	const dos = Math.floor(counter / 10) % 10
	const uno = Math.floor(counter) % 10


	return (
		<>

			<div id='bigCounter' className="d-flex fs-1 bg-black text-white p-3 justify-content-center">
				<div id='reloj' className="p-2 m-1 bg-dark"><i class="far fa-clock"></i></div>
				<SimpleCounter number={cuatro} />
				<SimpleCounter number={tres} />
				<SimpleCounter number={dos} />
				<SimpleCounter number={uno} />
			</div>

		</>
	)
}
export default Home;