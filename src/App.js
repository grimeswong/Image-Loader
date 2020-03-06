import React from 'react'
import ImageStore from './ImageStore.js'
import './App.css'
import bg from "./img/img1.jpg"

function App() {
  return (
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
      <h1>This is App H1</h1>
      <ImageStore />
    </div>
  );
}

export default App;
