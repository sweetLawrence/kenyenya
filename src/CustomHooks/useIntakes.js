import { useEffect, useMemo, useState } from 'react'

const useIntakes = () => {
    const [today, setToday] = useState(new Date(Date.now()))
    const [courses, setCourses] = useState([])
    const intakes = [
        // month - day - year
        {opens: new Date('5-10-2023'), closes: new Date('5-20-2023')},
        {opens: new Date('8-10-2023'), closes: new Date('8-20-2023')}
    ]
    const levels = ["New Intake", "Upgrading Intake"]

    const courses_ = useMemo(()=>[
        {course: 'Diploma in Early Childhood Teacher Education (DECTE)', level: "New Intake", mins: ['C', '-', '-', '-', '-']},
        {course: 'Diploma in Primary Teacher Education(DPTE)', level: "New Intake", mins: ['C', 'C', 'C', 'C', 'C']}
        ,
        {course: "Diploma in Early Childhood Teacher Education", level: "Upgrading Intake", req: ['ECDE CERTIFICATE'], mins: ["ECDE CERTIFICATE", "PASS"]},
        {course: "Diploma in Primary Teacher Education", level: "Upgrading Intake", req: ['PTE CERTIFICATE'], mins: ["PTE CERTIFICATE","PASS"]}
    ], [])

    useEffect(()=>{
        if(!today)setToday(new Date(Date.now()))
        if(courses.length < 1)setCourses(courses_)
    }, [courses_, courses, today])

    const read = (date) => {
        return date.toGMTString().split(" ").splice(0, 4).join(" ")
    }

    const intake = () =>{
        for(let {opens, closes} of intakes){
            if((opens <= today) && (closes >= today)){
                return {open: true, dates: {opens: read(opens), closes: read(closes)}}
            }
            return {open: false, dates: {}}
        }
    }

    return { intake: intake(), levels, courses }
}

export default useIntakes