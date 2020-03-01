import React, {useState, useEffect} from 'react'
const images = require('./img/ImageList.js')

const ImageStore = (props) => {

    const [imgStatus, setImgStatus] = useState(false);

    useEffect(() => {

    }, []);

    const updateStatus = () => {
        setImgStatus(true);
    }

    const values = Object.values(images) // get the value of objects
    console.log(values);
    const displayImg = values.map((location, index) =>
        <img key={index} src={location} />
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
