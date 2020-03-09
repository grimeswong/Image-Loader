import React, {useState, useEffect} from 'react'
import DisplayImage from './DisplayImage.js'

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
    // console.log(images)
    const displayLocalImg = images.map((element, index) => {
      return <DisplayImage key={index} image={element} updateStatus={updateStatus} />
    })

    return (
      <div>
          <h2>This is a local image loader</h2>
          <h3>Image Loading Status: {imgStatus===true ? "All image is Loaded" : "Image Loading..."}</h3>
          <div className="top_wrapper">
            {displayLocalImg}
          </div>
      </div>
    )
}

export default ImageStore;
