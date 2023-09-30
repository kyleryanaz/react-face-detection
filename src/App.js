import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import Navigation from './components/Navigation/Navigation';
import FaceDetection from './components/FaceDetection/FaceDetection';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import './App.css';

// test image: https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_.jpg

const returnClarifaiRequestOptions = (imageUrl) => {
  const PAT = 'PAT';
  const USER_ID = 'USER_ID';
  const APP_ID = 'APP_ID';
  const IMAGE_URL = imageUrl;

  const raw = JSON.stringify({
    "user_app_id": {
      "user_id": USER_ID,
      "app_id": APP_ID
    },
    "inputs": [
      {
        "data": {
          "image": {
            "url": IMAGE_URL
          }
        }
      }
    ]
  });

  const requestOptions = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Key ' + PAT
    },
    body: raw
  };

  return requestOptions;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    fetch('https://api.clarifai.com/v2/models/face-detection/outputs', returnClarifaiRequestOptions(this.state.input))
      .then(response => response.json())
      .then(result => console.log(result.outputs[0].data.regions[0].region_info.bounding_box))
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceDetection imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
