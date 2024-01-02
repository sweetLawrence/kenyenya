import { useMemo } from "react";


export default function useAnnouncements(){
    const announcements = useMemo(()=>[], [])

    // function filterOutdated(){

    // }

    return { announcements }

}