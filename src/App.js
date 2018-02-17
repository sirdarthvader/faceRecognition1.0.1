






import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';

const particlesOption = {
	particles : {
		number: {
			value: 50, 
			density: {
				enable: true,
				value_area: 800
			},
			inetractivity: {
				detect_on: 'canvas',
				events: {
					onhover: {
						enable: true,
						mode: 'grab'
					},
				modes: {
					grab: {
								distance: 400,
								line_linked: {
								opacity: 1
							}
						}
					}
				}
			}
		}
	}
}	

class App extends Component {

	constructor(){
		super()
		this.state = {
			input: ''
		}
	}

	onInputChange = (event) => {
		console.log(event.target.value);
	}

	onButtonSubmit = () => {
		console.log('click');
	}


  render() {
    return (
      <div className="App">
      	<Particles className='particles'
      		params={particlesOption}
      	 />
        <Navigation />
        <Logo />
        <ImageLinkForm inputchange={this.onInputChange} buttonsubmit={this.onButtonSubmit} />
      </div>
    );
  }
}

export default App;
