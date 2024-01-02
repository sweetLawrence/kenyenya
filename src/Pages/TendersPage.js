import React from 'react'
import Page from '../Components/Page'
import AdminDropDown from '../Components/AdminDropDown'
import useAnnouncements from '../CustomHooks/useAnnouncements'

const TendersPage = () => {
  const { announcements } = useAnnouncements()
  return (
    <Page id="announcement-page">
      <div className='list'>
            {announcements.length < 1 ? <h1>No new tenders at the moment</h1> :
                announcements.map((announce, i)=>
                    <div>

                    </div>
                )
            }
        </div>
    </Page>
    
  )
}

export default TendersPage