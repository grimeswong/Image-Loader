import React, {useState, useEffect } from 'react'
import axios from 'axios';


const GetURLAddress = () => {

  const [imageURL, setImageURL] = useState("");

    const URL_address = "https://source.unsplash.com/random";

    axios.get(URL_address)
      .then((response)=> {
        console.log(response.request);
        console.log(response.request.responseURL);
        let responseImg = response.request.responseURL
        return responseImg !== "" ? setImageURL(response.request.responseURL) : null;
      })
      .catch((error) => {
        console.log(error);
      })

  return (
    <img src={imageURL} alt="Image URL" style={{width: "300px", height: "auto"}}/>
  )
}

export default GetURLAddress;
