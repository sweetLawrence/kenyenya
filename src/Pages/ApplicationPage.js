import React, {useState, useEffect, useRef} from 'react'
import Page from '../Components/Page'
import useIntakes from '../CustomHooks/useIntakes'
import '../Styles/pages.css'
import Button1 from '../SubComponents/Button1'
import FormProgressBar from "../Components/FormProgressBar";
import {Route, Routes} from "react-router-dom";
import ApplicationPersonal from "../Components/ApplicationPersonal";

const ApplicationPage = () => {
    const loadCount = useRef(0)
    const {intake, courses, levels} = useIntakes()
    const [level, setLevel] = useState("")
    const [selected, setSelected] = useState('')
    const [label, setLabel] = useState("")
    const [formDataState, setFormDataState] = useState({
        name: '',
        email: '',
        phone: '',
        emergencyContact: '',
        idBirthCertificate: '',
        nextOfKinName: '',
        nextOfKinPhone: '',
        level: "",
        course: "",
        intake: "",
        kcpeCertificate: null,
        kcseCertificate: null,
        otherCertificate: null,
        passportPhoto: null,
    })


    useEffect(() => {
        // runs when component is mounted
        if (!level) setLevel(levels[0])
        try {
            if (!selected) setSelected(courses.filter(p => p.level === level)[0].course)
            let cert = courses.filter(c => c.course === selected)[0].req[0]
            setLabel(cert)
        } catch (error) {
        }
        loadCount.current += 1
    }, [level, levels, selected, courses])


    useEffect(() => {
        try {
            setSelected(courses.filter(p => p.level === level)[0].course)
        } catch (error) {

        }
    }, [level, courses])

    // console.log("Done", formDataState)
    return (
        <Page id="application-page" className={" flex justify-center !bg-gray-800 "}>
            <div className={"w-full h-max max-w-[95%] bg-white drop-shadow-lg translate-y-1/4 grid gap-2 m-auto p-2"}>
                <h1 className={"text-[4ch] font-bold"}>Application Form</h1>
                <FormProgressBar/>
                <div className={"h-max"}>
                    <Routes>
                        <Route index={true} element={<ApplicationPersonal/>}/>
                    </Routes>
                </div>
                <span className={"w-full flex gap-2 justify-between m-auto"}>
                    <Button1 text={"Personal"}/>
                    <Button1 text={"Family"}/>
                    <Button1 text={"Education"}/>
                    <Button1 text={"Uploads"}/>
                </span>
            </div>
        </Page>
    )
}

export default ApplicationPage

// "other-config",