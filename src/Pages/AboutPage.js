import React from 'react'
import Page from '../Components/Page'
import AboutSegment from '../Components/AboutSegment'
import uhuru from '../images/uhuru.jpg'
import chairman from '../images/staff/chairman.jpg'
import principal from '../images/staff/principal.png'
import useSchoolData from '../CustomHooks/useSchoolData'
import Table from '../Components/Table'

const AboutPage = () => {
  const { background, principals, chair, princi } = useSchoolData();

  return (
    <Page id="about-page">
      <AboutSegment title={"ABOUT THE COLLEGE"} img={uhuru} caption={"President Uhuru Kenyatta Planting Commemorative Tree"} text={background} />
      <AboutSegment title="The Chair, Dr. Moses O. Machuki" img={chairman} caption={"The Chairman BOM"} text={chair} />
      <AboutSegment title="The Ag. Principal, Mr. John E. Nyedia" img={principal} caption ={"The Ag. Principal, Kenyenya TTC"} text={princi} extra={<Table data={principals} ratio={"15% 55% 15% 15%"}
        title="All Principals (Since 2012)"
      />} />
    </Page>
  )
}

export default AboutPage
