import React from 'react'
import Page from '../Components/Page'
import useAnnouncements from '../CustomHooks/useAnnouncements'
import brochure from "../images/Brochure1.jpg"

const AnnouncementPage = () => {
    // const { announcements } = useAnnouncements()
  return (
    <Page id="announcement-page">
        <div className='list'>
            <img src={brochure} alt="brochure" />
        </div>
    </Page>
  )
}

export default AnnouncementPage