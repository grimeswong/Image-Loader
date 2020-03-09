import React, {Component} from 'react'
import ImageStore from './ImageStore.js'
import GetExtImage from './GetExtImage'
import { getImageURL } from './util/getImageURL.js'
import './App.css'
import './DisplayImage.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      extImages: [],
    })
  }

  componentDidMount() {
    getImageURL().then((result) => {  // get the images URL store in this state
      this.updateImageList(result);
    })
  }

  updateImageList = (result) => {
    this.setState({
      extImages: result,
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Image Loader</h1>
        <ImageStore />
        <GetExtImage image={this.state.extImages}/>
      </div>
    );
  }
}

export default App;
