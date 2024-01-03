import React from 'react'
import { Toaster } from 'sonner'

const CourseDocuments = () => {
  return (
    <div className='sign-up-container download'>
      <div className='document-download-container'>
        <label>Admission Letter</label>
        <div className="doc-input">

          <div className="icon_doc">
            
          </div>
          <div className="down">
            {/* <p className=''>{value}</p> */}
            <button className='doc-upload-button'

            // onClick={handleFileSubmit}
            >Download</button>
          </div>

        </div>
        <Toaster richColors position="top-center" style={{ marginTop: '50px', marginLeft: '60px', zIndex: 5, width: '80%' }} />
      </div>
    </div>
  )
}

export default CourseDocuments