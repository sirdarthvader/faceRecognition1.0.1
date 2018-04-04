import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation.js';
import Inputimage from './Components/Inputimage/Inputimage.js';
import Logo from './Components/Logo/Logo.js';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.js';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import Rank from './Components/Rank/Rank';

const particlesOptions = {
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
    super();
    this.state = {
      input: '',
      imgurl: '',
      box: {},
      route: '',
      isSignedIn: '',
      user: {
        id: '',
        name: '',
        email: '',
        entries: '',
        joined: ''
      }
    }
  }


  componentDidMount() {
    fetch('http://localhost:3001')
      .then(response => response.json())
      .then(console.log);
      console.log('component did mount');
      console.log(this.state.user.name)
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


  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
    console.log(data);
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
    console.log('inside the refresh function');
    this.setState({input: ''});
    console.log('inside the refresh function');
  }



  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({isSignedIn: false})
    } else if(route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({ route: route });
  }


  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>
              <Logo />
              <Rank
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
              <Inputimage box={box} imageUrl={imageUrl} />
            </div>
          : (
             route === 'signin'
             ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;