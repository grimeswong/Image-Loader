import React, {useState, useEffect} from 'react'
import ProgressiveImage from 'react-progressive-image'
import axios from 'axios';
import './DisplayImage.css';
import img from './img/img1-thumbnail.jpg';

const GetExtImage = () => {

  const[images, setImages] = useState([]);

  const URL_address = "https://source.unsplash.com/random";
    axios.get(URL_address)
    .then((response) => {
      console.log(response.request.responseURL);
      setImages(response.request.responseURL);
    })
    .catch((error) => {
      console.log("error to download data");
    })

    const displayExtImg = (image) => {
      return (
          <figure className="image_wrapper">
            <ProgressiveImage src={image} placeholder="Loading...">
              {(src, loading) => (
                <img className="" src={src} alt="" style={{opacity: loading ? 0.5 : 1}} />
              )}
            </ProgressiveImage>
          </figure>
      )
    }

  return (
    <div>
        <h2>This is external image loader</h2>
        <h3>Image Loading Status: </h3>
        <div className="top_wrapper">
          {displayExtImg(images)}
        </div>
    </div>
  )
}

export default GetExtImage;
