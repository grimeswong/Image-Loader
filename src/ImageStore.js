import React, {useState, useEffect} from 'react'
const images = require('./img/ImageList.js')

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

    const values = Object.values(images) // get the value of objects
    console.log(values);
    totalImage = values.length;
    const displayImg = values.map((location, index) => {
      return (
          <img key={index} src={location} alt={index}onLoad={updateStatus} style={{width: "200px", display: "none"}} />
      )
    })

    return (
        <div>
            <h2>This is Image component</h2>
            <h3>{imgStatus===true ? "All image is Loaded" : "Image Loading..."}</h3>
            {displayImg}
        </div>
    )
}

export default ImageStore;
