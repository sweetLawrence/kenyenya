import React, { useEffect, useState } from "react";
import SignUpInfo from "./Signupinfo";
import Family from "./Family";
import '../../../Styles/application.css'
import School from "./School";
import Spouse from "./Spouse";
import Cocurricular from "./Cocurricular";
import Profilephoto from "./Profilephoto";
import DocumentUploads from "./DocumentUploads";
import schoolLogo from './Utils/schoolLogo.png'
import { Navdata } from "./Utils/Navdata";

import PersonIcon from '@mui/icons-material/Person';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SchoolIcon from '@mui/icons-material/School';
import WcIcon from '@mui/icons-material/Wc';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import ArticleIcon from '@mui/icons-material/Article';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HighlightAltIcon from '@mui/icons-material/HighlightAlt';
import SelectCourse from "./SelectCourse";
import LogoutIcon from '@mui/icons-material/Logout';

import axios from 'axios'
import { useNavigate } from "react-router-dom";
import basePath from "../../../Utilities/axios";
import CourseDocuments from "./CourseDocuments";


function Application2() {
  const navigation = useNavigate();
  const [page, setPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightIndex, setHighlightIndex] = useState(0);

  const [formData, setFormData] = useState({
    //course data
    level: "",//
    course: "",//

    // currentpage
    currentpage: "",

    //personal data
    surname: "",
    name: "",
    national_id: "",
    birthcertnumber: "",
    box: "",
    town: "",
    towncode: "",
    phone: "",
    email: "",
    country: "",
    dateofbirth: "",
    sex: "",
    village: "",
    location: "",
    division: "",
    birthtown: "",
    region: "",
    county: "",
    asschief: "",
    chief: "",
    disabled: "",
    kcseIndex: "",

    //family
    guardianName: "",
    guardianSurname: "",
    guardianOccupation: "",
    guardianId: "",
    guardianBox: "",
    guardianTown: "",
    guardianTownCode: "",
    guardianPhone: "",
    guardianEmail: "",

    kinFirstName: "",
    kinSurName: "",
    kinRelation: "",
    kinOccupation: "",
    kinId: "",
    kinBox: "",
    kinTown: "",
    kinTownCode: "",
    kinPhone: "",
    kinEmail: "",

    emergencyAFirstName: "",
    emergencyASurName: "",
    emergencyAPhone: "",
    emergencyAOccupation: "",
    emergencyAId: "",
    emergencyABox: "",
    emergencyATown: "",
    emergencyATownCode: "",
    emergencyAEmail: "",

    emergencyBFirstName: "",
    emergencyBSurName: "",
    emergencyBPhone: "",
    emergencyBOccupation: "",
    emergencyBId: "",
    emergencyBBox: "",
    emergencyBTown: "",
    emergencyBTownCode: "",
    emergencyBEmail: "",

    // school
    schoolname: "",
    schoolBox: "",
    schoolTown: "",
    schooljoinyear: "",
    schoolfinishyear: "",
    exambody: "",
    schoolresults: "",
    overallgrade: "",

    otherschoolname: "",
    otherschoolBox: "",
    otherschoolTown: "",
    otherschooljoinyear: "",
    otherschoolfinishyear: "",
    otherschoolexambody: "",
    otherschoolresults: "",
    qualifications: "",

    // spouse
    maritalstatus: "",
    spousesurname: "",
    spouseothername: "",
    spousebox: "",
    spousetown: "",
    spousetowncode: "",
    spousephone: "",
    spouseemail: "",

    // Co-curricular
    club: "",
    sport: "",

    // Profilephoto
    profilephoto: "",
    // DocumentUploads
    nationalid: "",
    passportphoto: "",
    birthcertificate: "",
    kcsecertificate: "",
    kcpecertificate: "",
    kcseleavingcertificate: "",
    recommendation: "",
    nhifcard: "",
    ecdecertificate: "",
    ptecertificate: "",
    admissionletter: "",
    resultslip: "",
    // CourseDocuments
    // Completeprocess

  });
  const FormTitles = ["Select Course", "Bio Details", "Family Details", "School Details", "Spouse Details", "Co-curricular Activities", "Profile Photo", "Document Uploads","Course Documents","Complete Process"]
  const icons = [<HighlightAltIcon style={{ color: '#007bff' }} />, <PersonIcon style={{ color: '#007bff' }} />, <Diversity3Icon style={{ color: '#007bff' }} />, <SchoolIcon style={{ color: '#007bff' }} />, <WcIcon style={{ color: '#007bff' }} />, <SportsBasketballIcon style={{ color: '#007bff' }} />, <PhotoCameraIcon style={{ color: '#007bff' }} />, <FileUploadIcon style={{ color: '#007bff' }} />, <ArticleIcon style={{ color: '#007bff' }} />, <DoneAllIcon style={{ color: '#007bff' }} />]
  // const FormTitles = ["Bio Details  ", "Family Details", "School Details", "Spouse Details", "Sports and Clubs Details", "Profile Photo", "Document Uploads", "Course Documents", "Complete Process"];

  const leftActiveStyle = {
    background: 'red'
  }

  const PageDisplay = () => {
    if (page == 0) {
      return <SelectCourse formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Family formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <School formData={formData} setFormData={setFormData} />;
    } else if (page === 4) {
      return <Spouse formData={formData} setFormData={setFormData} />;
    } else if (page === 5) {
      return <Cocurricular formData={formData} setFormData={setFormData} />;
    } else if (page === 6) {
      return <Profilephoto formData={formData} setFormData={setFormData} />;
    } else if (page === 7) {
      return <DocumentUploads formData={formData} setFormData={setFormData} />;
    } else if (page === 8) {
      return <CourseDocuments formData={formData} setFormData={setFormData} />;
    }
  };

  const handleLeftNavItemClick = (pageIndex) => {
    setPage(pageIndex);
    setIsexpanded(false);
    setActiveIndex(pageIndex);
    setHighlightIndex(pageIndex);

  };
  const [isExpanded, setIsexpanded] = useState(false);

  function handleBack() {
    setHighlightIndex((curr) => curr - 1)
    setActiveIndex((curr) => curr - 1)
  }

  function handleClick() {
    setFormData((prevData) => ({
      ...prevData,
      currentpage: String(page + 1),
    }));
    sendDataToBackend();
    setHighlightIndex((curr) => curr + 1)
    setActiveIndex((curr) => curr + 1)
  }


  function handleLogout() {
    localStorage.removeItem('accessToken')
    navigation('/application')
  }

  const sendDataToBackend = async () => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      if (accessToken) {
        const response = await axios.patch(`${basePath}/api/update-applicant`, formData, {
          headers: {
            accessToken: accessToken,
          },
        });//http://localhost:3001
        console.log("3456789rdtfuhj", response);
      }

    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const ngrokSkipBrowserWarningValue = 'anyValue';
      if (accessToken) {
        try {
          const response = await axios.get(`${basePath}/api/applicant`, {
            headers: {
              accessToken: accessToken,
              // 'ngrok-skip-browser-warning': ngrokSkipBrowserWarningValue,
            },
          });
          const server_data = response.data[0];
          console.log("responseData", server_data);
          setFormData(server_data);
          setPage(Number(server_data.currentpage));
          setActiveIndex(Number(server_data.currentpage));
          setHighlightIndex(Number(server_data.currentpage));
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      } else if (!accessToken) {
        navigation('/loginpage');
      }

    };

    fetchData();
  }, []);
  console.log("formData", formData)
  console.log(activeIndex)

  return (
    <div className="form">

      <div className={`mobileleft ${isExpanded ? "width-expand" : ""}`}>
        <div className="hambuger" onClick={() => setIsexpanded(!isExpanded)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo">
          <img src={schoolLogo} alt="school logo" onClick={() => {
            setIsexpanded(false)
            setPage(0)
          }} />
        </div>

        <div className="section-navigation">
          {Navdata.map((val, index) => (
            <div className={`row`} key={index}
              style={{ backgroundColor: activeIndex === index ? 'rgba(0, 123, 255, 0.9)' : 'rgb(246, 244, 244)' }}
              onClick={() => handleLeftNavItemClick(index)}>
              {icons[index]}

              {isExpanded && <div className={"childrow animate__animated animate__slideInDown"}>
                {val}
              </div>}

            </div>
          ))}
          <div className="logout"
            onClick={handleLogout}
          >
            <LogoutIcon style={{ color: '#007bff' }} />
          </div>

        </div>
      </div>
      <div className="left">
        <div>
          <div className="logo">
            <img src={schoolLogo} alt="school logo" onClick={() => setPage(0)} />
          </div>
          <div className="section-navigation">
            {Navdata.map((val, index) => (
              <div className="row"
                style={{ backgroundColor: highlightIndex === index ? 'rgba(0, 123, 255, 0.9)' : 'rgb(246, 244, 244)', color: activeIndex === index ? '#fff' : 'black' }}
                // style={{ backgroundColor: activeIndex === index ? 'rgba(0, 123, 255, 0.9)' : 'rgb(246, 244, 244)',color:activeIndex === index ?'#fff':'black' }}
                key={index} onClick={() => handleLeftNavItemClick(index)}>
                {icons[index]}

                <div className="childrow">
                  {val}
                </div>
              </div>

            ))}
            <div className="logout"
              onClick={handleLogout}
            >
              <LogoutIcon style={{ color: '#007bff' }} />
              <p>Log Out</p>
            </div>

          </div>
        </div>

      </div>
      <div className="right-side">
        <div className="progressbar">
          <div
            style={{ width: page === 0 ? "10%" : page == 1 ? "20%" : page == 2 ? "30%" : page == 3 ? "40%" : page == 4 ? "50%" : page == 5 ? "60%" : page == 6 ? "70%" : page == 7 ? "80%" : page == 8 ? "90%" : "100%" }}
          ></div>
        </div>
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                handleBack()
                setPage((currPage) => currPage - 1);

              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                handleClick();
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Save / Next"}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Application2;
