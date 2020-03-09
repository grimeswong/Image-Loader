import React from 'react'
import ProgressiveImage from 'react-progressive-image'
import loadingThumbnail from './img/loadingThumbnail.jpg';

const DisplayImage = (props) => {

  return props.image.location === ""  ? null : // if image location isn't provided, the image will not be rendered
  (
      <figure className="image_wrapper">
        <ProgressiveImage src={props.image.location} placeholder={props.image.thumbnail ? props.image.thumbnail : loadingThumbnail }>
          {(src, loading) => (
            <img className="" onLoad={loading? null: props.updateStatus} src={src} alt={props.title} style={{opacity: loading ? 0.5 : 1}}  />
          )}
        </ProgressiveImage>
      </figure>
  )
}

export default DisplayImage;
