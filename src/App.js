import React from 'react'
import ImageStore from './ImageStore.js'
import GetExtImage from './GetExtImage.js'
import './App.css'

const App = () => {

  return (
    <div className="App">
      <h1>Image Loader</h1>
      <ImageStore />
      <GetExtImage />
    </div>
  );
}

export default App;
