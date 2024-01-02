import React from 'react'
import Page from '../Components/Page'
import '../Styles/pages.css'
import HomeTitle from '../PageParts/HomeTitle'
import HomeMantras from '../PageParts/HomeMantras'
import HomeAbout from '../PageParts/HomeAbout'
import HomeAcademic from '../PageParts/HomeAcademic'
import HomeExtraCurricular from '../PageParts/HomeExtraCurricular'
import HomeLocation from '../PageParts/HomeLocation'

const Home = () => {
  return (
    <Page id="home-page">
        <HomeTitle />
        <HomeMantras />
        <HomeAbout />
        <HomeAcademic />
        <HomeExtraCurricular />
        <HomeLocation />
    </Page>
  )
}

export default Home