import React from 'react'
import useSchoolData from '../CustomHooks/useSchoolData'
import bg from '../images/bgWave.png'

// styles are in pages.css
const HomeMantras = () => {
    const { mantras:{vision, mission, motto} } = useSchoolData()

    const MantraDiv = ({title, mantra}) => <div className='mantra-div'>
        <h2>{title}</h2>
        <div className='divider' />
        <p>{mantra}</p>
        <img src={bg} id='bg-wave' alt="wave" />
    </div>
  return (
    <div className='mantras'>
        <MantraDiv title="Motto" mantra={motto} />
        <MantraDiv title="Mission" mantra={mission} />
        <MantraDiv title="Vision" mantra={vision} />
    </div> 
  )
}

export default HomeMantras