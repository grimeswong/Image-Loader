import React from 'react'
import ProgressiveImage from 'react-progressive-image'

const DisplayImage = (props) => {

  return (
      <figure className="image_wrapper">
        <ProgressiveImage src={props.image.location} placeholder={props.image.thumbnail ? props.image.thumbnail : "Loading..."}>
          {(src, loading) => (
            <img className="" onLoad={loading? null: props.updateStatus} src={src} alt={props.title} style={{opacity: loading ? 0.5 : 1}}  />
          )}
        </ProgressiveImage>
      </figure>
  )
}

export default DisplayImage;
