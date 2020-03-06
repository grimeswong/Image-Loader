import React, {useState, useEffect} from 'react'
import ProgressiveImage from 'react-progressive-image'
import img1ThumbNail from './img/img1-thumbnail.jpg'
import styles from './ImageStore.module.css'

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
          <figure key={index} className={styles.image_wrapper}>
            <ProgressiveImage src={location} placeholder={img1ThumbNail}>
              {(src, loading) => (
                <img src={src} alt={index} onLoad={updateStatus} style={{opacity: loading ? 0.5 : 1}} />
              )}
            </ProgressiveImage>
          </figure>
      )
    })

    return (
        <div>
            <h2>This is Image component</h2>
            <h3>{imgStatus===true ? "All image is Loaded" : "Image Loading..."}</h3>
            <div className={styles.top_wrapper}>
              {displayImg}
            </div>
        </div>
    )
}

export default ImageStore;
