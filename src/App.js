import React, {Component} from 'react'
import ImageStore from './ImageStore.js'
import './App.css'
import './DisplayImage.css'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>Image Loader</h1>
        <ImageStore />
      </div>
    );
  }
}

export default App;
