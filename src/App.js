import React from 'react'
import ImageStore from './ImageStore.js'
import './App.css'
import './DisplayImage.css'

const App = () => {

  return (
    <div className="App">
      <h1>Image Loader</h1>
      <ImageStore />
    </div>
  );
}

export default App;
