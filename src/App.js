import React from 'react'
import ImageStore from './ImageStore.js'
import './App.css'
import GetURLAddress from './util/GetURLAddress.js'

function App() {
  return (
    <div className="App" style={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 6%, rgba(0,212,255,1) 100%)"}}>
      <h1>Image Loader</h1>
      <ImageStore />
      <GetURLAddress />
    </div>
  );
}

export default App;
