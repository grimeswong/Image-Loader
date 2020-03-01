import React, {useState, useEffect} from 'react'
const images = require('./img/ImageList.js')

const ImageStore = (props) => {

    const [imgStatus, setImgStatus] = useState(false);

    useEffect(() => {

    }, []);

    const updateStatus = () => {
        setImgStatus(true);
    }

    const entries = Object.entries(images) // get the content of modules
    console.log(entries);
    const displayImg = entries.map((image, index) =>
        <img key={index} src={image[1]} />
    )

    return (
        <div>
            <h2>This is Image component</h2>
            <h3>{imgStatus===true ? "Loaded" : "Loading..."}</h3>
            {displayImg}
        </div>
    )
}

export default ImageStore;
