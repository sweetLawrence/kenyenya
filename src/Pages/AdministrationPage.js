import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Page from '../Components/Page'
import useSchoolData from '../CustomHooks/useSchoolData'
import '../Styles/pages.css'
import Menu from '../Components/Menu'
import Parent from '../Components/navComponents/Parent'
import ApplicationDetail from './ApplicationDetail'
const AdministrationPage = () => {
  const { schoolManagementStructure } = useSchoolData()
  return (
    
        <Page id='administration-page admin-page'>
          <div className='container'>

            <Parent />
            {/* <Route exact path="/" component={MyComponent} /> */}
         
          </div>
        </Page>
     

  )
}

export default AdministrationPage