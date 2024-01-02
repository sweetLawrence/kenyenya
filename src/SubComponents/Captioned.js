

import React from 'react'
import '../Styles/sub_comp.css'

const Captioned = ({src, caption, animation}) => {
  return (
    <div className='caption-img' data-aos={animation? animation : ""}>
        <img src={src} alt={caption}  />
        <p>{caption}</p>
    </div>
  )
}

export default Captioned

