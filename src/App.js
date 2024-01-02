import './App.css';
import NavBar from './Components/NavBar';
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './PageParts/Footer';
import AboutPage from './Pages/AboutPage';
import GalleryPage from './Pages/GalleryPage';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {useEffect} from 'react';
import AnnouncementPage from './Pages/AnnouncementPage';
import AdministrationPage from './Pages/AdministrationPage';
import ApplicationDetail from './Pages/ApplicationDetail';
import AllTenders from './Components/AllTenders';
import TenderAnnouncement from './Components/TenderAnnouncement';
import ConstructionDelivery from './Components/ConstructionDelivery';
import GoodsDelivery from './Components/GoodsDelivery';
import Contractors from './Components/Contractors';
import Application2 from './Pages/Experiment/ApplicationPages/Application2';
import SignupLogin from './Pages/Experiment/Components/SignupLogin';


function App() {

    useEffect(() => {
        AOS.init();
    }, [])

    // reset scroll height 😁
    const lokeshen = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [lokeshen]);


    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<AboutPage/>}/>
                <Route exact path="/gallery" element={<GalleryPage/>}/>
                <Route exact path='/application' element={<ApplicationDetail/>}/>
                <Route exact path="/management" element={<AdministrationPage/>}/>
                <Route exact path="/announcements" element={<AnnouncementPage/>}/>
                {/* <Route exact path='/tenders' element={<TendersPage />} /> */}
                {/* <Route exact path="/" component={ApplicationDetail} /> */}
                {/* <Route path="/oldapp" element={<SelectCourse />}/> */}
                <Route path="/application-page/*" element={<Application2/>}/>
                {/* <Route path="/tenders" element={<AllTenders />} /> */}
                <Route path="/tenders" element={<TenderAnnouncement/>}/>
                <Route path="/downloadtenders" element={<AllTenders/>}/>
                <Route path="/construction" element={<ConstructionDelivery/>}/>
                <Route path="/goods" element={<GoodsDelivery/>}/>
                <Route path="/contractors" element={<Contractors/>}/>
                <Route path="/loginpage" element={<SignupLogin />}/>

            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
