import React from 'react'
import ImageStore from './ImageStore.js'
import './App.css'
import { GetImageURL } from './util/GetImageURL.js'

function App() {
  GetImageURL();
  return (
    <div className="App">
      <h1>Image Loader</h1>
      <ImageStore />
    </div>
  );
}

export default App;
