import React, {useState, useEffect} from 'react'
import bg_img from './img/test_bg.png'

const ImageStore = (props) => {

    const [imgStatus, setImgStatus] = useState(false);

    useEffect(() => {
        
    }, []); 

    const updateStatus = () => {
        setImgStatus(true);
    }

    return (    
        <div>
            <h2>This is Image component</h2>
            <h3>{imgStatus===true ? "Loaded" : "Loading..."}</h3>
            <img src={bg_img} alt="Background" onLoad={updateStatus}/>
        </div>       
    )   
}

export default ImageStore;
 