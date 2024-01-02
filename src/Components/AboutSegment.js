import React from 'react'
import Captioned from '../SubComponents/Captioned'
import '../Styles/components.css'
import paragraphy from '../CustomHooks/paragraphy'

const AboutSegment = ({img, caption, title, text, extra}) => {
  let id = caption.toLowerCase().includes('chairman') ? "chairman" : ""
  return (
    <div className='about-segment' id={id}>
        <Captioned src={img} caption={caption} />
        <div className='details'>
            <h1>{title}</h1>
            <p>{paragraphy(text)}</p>
            {extra}
        </div>
    </div>
  )
}

export default AboutSegment