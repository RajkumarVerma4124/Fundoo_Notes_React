import React from 'react'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined'; 
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined'; 
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined'; 
import './takenoteone.css'
import IconButton from '@mui/material/IconButton';


function TakeNoteOne({handleNoteOne}) {

  const setTakeNote = () => {
    handleNoteOne();
  }

  return (
    <div>
      <div className="takenoteone" onClick={setTakeNote}>
        <div className="noteone_left">
          <div className="text">Take a note...</div>
        </div>
        <div className="noteone_right">
          <div>
            <IconButton>
              <CheckBoxOutlinedIcon />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <BrushOutlinedIcon />
            </IconButton>
          </div>
          <div>
            <IconButton>
              <ImageOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeNoteOne