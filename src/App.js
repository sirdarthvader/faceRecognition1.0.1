






import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation.js';
import Inputimage from './Components/Inputimage/Inputimage.js';
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
// const Clarifai = require('clarifai')
const app = new Clarifai.App({
	apiKey: 'a39e4ff05b2d4f5a8098a1b6ce20a538'
});

class App extends Component {

	constructor(){
		super()
		this.state = {
			input: ''
			// url: ''
		}
	}

	onInputChange = (event) => {
		console.log(event.target.value);
	}

	onButtonSubmit = () => {
		console.log('click');
		app.models.predict(Clarifai.FACE_DETECT_MODEL, "https://samples.clarifai.com/face-det.jpg")
		.then(
			    function(response) {
			      console.log(response);
			    },
			    function(err) {
			      // there was an error
			    }
  	);
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
        <Inputimage />
      </div>
    );
  }
}

export default App;
