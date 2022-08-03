import React from 'react';
import Menu from '../menu/Menu';
import Slider from './slider/Slider';
import Servicios from './servicios/Servicios';
import Footer from '../footer/Footer'; 

class Home extends React.Component {
	render() {
		return(
			<>
			<Menu /> 
			<main role="main" >
					<div className="container">
					<Slider /> 
					<Servicios /> 
					<hr className="featurette-divider" />
					</div>
			</main>
			<Footer />
			</>
		)
	}
}

export default Home;
