import React, {useState, useEffect} from 'react'
import ProgressiveImage from 'react-progressive-image'
import './DisplayImage.css'

const { images } = require('./img/ImageList.js') // Import the module of images


const ImageStore = (props) => {

    const [imgStatus, setImgStatus] = useState(false);
    let imageLoaded = 0;
    let totalImage = 0;

    useEffect(() => {

    }, []);

    const updateStatus = () => {
        imageLoaded +=1;
        if(totalImage === imageLoaded) {
          setImgStatus(true)
        }
    }

    totalImage = images.length;
    console.log(images)
    const displayLocalImg = images.map((element, index) => {
      return (
          <figure key={index} className="image_wrapper">
            <ProgressiveImage src={element.location} placeholder={element.thumbnail}>
              {(src, loading) => (
                <img className={{}} src={src} alt={index} onLoad={loading?null: updateStatus} style={{opacity: loading ? 0.5 : 1}} />
              )}
            </ProgressiveImage>
          </figure>
      )
    })

    return (
      <div>
          <h2>This is local image loader</h2>
          <h3>Image Loading Status: {imgStatus===true ? "All image is Loaded" : "Image Loading..."}</h3>
          <div className="top_wrapper">
            {displayLocalImg}
          </div>
      </div>
    )
}

export default ImageStore;
