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
  particles: {
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
  apiKey: 'c1c6229976194ac49cb5820c17e3f6a6'
});

class App extends Component {

  constructor() {
    super()
    this.state = {
      input: '',
      imgurl: '',
      box: {}
    }
  }

  faceDetetctionBox(data) {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox(box) {
    this.setState({ box: box });
    console.log(box);
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
    console.log(this.state.input);
  }

  onButtonSubmit = () => {
    this.setState({ imgurl: this.state.input })
    console.log(this.state.input);
    console.log('click');
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,      
      this.state.input
    )
    .then(response => this.displayFaceBox(this.faceDetetctionBox(response)))
    .catch(err => console.log(err));
  }

  refreshPage = () => {
    this.setState({input: ''});
    
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  }


  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particlesOption}
        />
        <Navigation onRouteChange={this.onRouteChange} />
        <Logo />
        <ImageLinkForm
          inputchange={this.onInputChange}
          buttonsubmit={this.onButtonSubmit}
          refreshPage={this.refreshPage}
        />
        <Inputimage
          box={this.state.box}
          imageurl={this.state.input}
        />
      </div>
    );
  }
}


export default App;
