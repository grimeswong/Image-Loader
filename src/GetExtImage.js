import React, { useState} from 'react';
import DisplayImage from './DisplayImage.js';

const GetExtImage = (props) => {

  const [imgStatus, setImgStatus] = useState(false);
  let imageLoaded = 0;
  let totalImage = 0;

  const updateStatus = () => {
      imageLoaded +=1;
      if(totalImage === imageLoaded) {
        setImgStatus(true)
      }
  }

  totalImage = props.image.length;
  const displayExtImg = props.image.map((element, index) => {
    return <DisplayImage key={index} image={element} updateStatus={updateStatus}/>
  })

  return (
    <div>
        <h2>This is an external image loader</h2>
        <h3>Image Loading Status: {imgStatus===true ? "All image is Loaded" : "Image Loading..."}</h3>
        <div className="top_wrapper">
          {displayExtImg}
        </div>
    </div>
  )
}

export default GetExtImage;
