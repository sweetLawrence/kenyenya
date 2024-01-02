import React from 'react'
import '../Styles/components.css';

const Page = ({children, id}) => {

  return (
    <div data-aos="zoom-in" className='page' id={id} >
        {children}
    </div>
  )
}

export default Page

