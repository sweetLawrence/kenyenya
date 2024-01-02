import React from 'react'
import Page from '../Components/Page'
import useImages from '../CustomHooks/useImages'
import Captioned from '../SubComponents/Captioned'

const GalleryPage = () => {
    const {adminImages, otherImages} = useImages()
  return (
    <Page id="gallery-page" >
        <h1>Administrators</h1>
        <div>
            {adminImages.map((img, i)=><Captioned 
              animation="zoom-out"
              key={i}
              src={img}
              caption={img.slice(10, -1)}
            />)}
        </div>
        <h1>Staff and the School</h1>
        <div>
            {otherImages.map((img, i)=><Captioned 
              animation="zoom-in"
              key={i}
              src={img} 
            />)}
        </div>
    </Page>
  )
}

export default GalleryPage