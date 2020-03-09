/***
  * This module is for getting Image from external link
  */
import axios from 'axios';

export const getImageURL = async () => {
  const URL_address = "https://source.unsplash.com/random";
  const Limit = 5;
  let images = [];
  for(let i=0; i<Limit; i++) {
    await axios.get(URL_address) // wait until get all the images URL
    .then((response) => {
      console.log(response.request);
      images.push(addImagedetails(response.request));
    })
    .catch((error) => {
      console.log("error to download data");
    })
  }
  console.log(images);
  return images;
}

const addImagedetails = (object) => {
  return {
    title: "",
    location: object.responseURL,
    thumbnail: "",
  }
}
