import React, { useState } from 'react'
import Header from '../../components/header/header'
import TakeNoteOne from '../../components/takenoteone/takenoteone'
import TakeNoteThree from '../../components/takenotethree/takenotethree'
import TakeNoteTwo from '../../components/takenotetwo/takenotetwo'

function Dashboard() {
  const [showTakeNote, setShowTakeNote] = useState(false);
  const handleNoteOne = () => {
    setShowTakeNote(true);
  }

  const handleNoteTwo = () => {
    setShowTakeNote(false);
  }


  return (
    <div className="dashboard">
          <Header/>
          {showTakeNote ? <TakeNoteTwo handleNoteTwo={handleNoteTwo} /> : <TakeNoteOne handleNoteOne={handleNoteOne}/>}
      <div className='notes_container'>
        <TakeNoteThree />
      </div>
    </div>
  )
}

export default Dashboard