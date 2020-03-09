import React from 'react';
import DisplayImage from './DisplayImage.js';

const GetExtImage = (props) => {

  const displayExtImg = props.image.map((element, index) => {
    return <img key={index} src={element.location} alt=""/>
  })

  return (
    <div>
        <h2>This is external image loader</h2>
        <h3>Image Loading Status: </h3>
        <div className="top_wrapper">
          {displayExtImg}
        </div>
    </div>
  )
}

export default GetExtImage;
