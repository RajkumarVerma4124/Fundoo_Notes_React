import React, { useState } from 'react'
import './takenotethree.css'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'; 
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import IconButton from '@mui/material/IconButton';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
// import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
// import { RiDeleteBin6Line } from 'react-icons/ri';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';


function TakeNoteThree() {
  const [pin, setPin] = useState(false);

  const handlepin = () => {
    pin === true ? setPin(false) : setPin(true)
  }

  return (
    <div className='note'>
      <div className='note_titles'>
        <div className='note_title'>New Note</div>
        <div className='pushpin'>
          <IconButton onClick={handlepin}>
            {pin ? <PushPinIcon /> : <PushPinOutlinedIcon />}
          </IconButton>
          </div>
      </div>

      <div className='notes_description'>This is the first note</div>

      <div className='note_icons'>
        <div>
          <IconButton size="large">
            <AddAlertOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddAltIcon fontSize="small" />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <ColorLensOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <InsertPhotoOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <ArchiveOutlinedIcon fontSize="small"/>
          </IconButton>
        </div>
        <div>
          <IconButton>
            <MoreVertOutlinedIcon fontSize="small"/>
          </IconButton>
        </div>
      </div>
    </div>
)
}

export default TakeNoteThree