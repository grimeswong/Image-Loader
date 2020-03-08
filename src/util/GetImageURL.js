import React from 'react'
import axios from 'axios';

export const GetImageURL = () => {

  let imagesArr = []

    const URL_address = "https://source.unsplash.com/random";
    const Limit = 10; // Limit of request images
    for(let i=0; i<Limit; i++) {
        axios.get(URL_address)
        .then((response)=> {
          // console.log(response.request);
          console.log(response.request.responseURL);
          let imgURL = response.request.responseURL
          return imgURL !== "" ? imagesArr.push(
            { title: URL_address,
              location: imgURL,
              thumbnail: null
            }
          ) :
          null;
        })
        .catch((error) => {
          console.log(error);
        })
    }
    console.log(imagesArr);
  return imagesArr;
}
