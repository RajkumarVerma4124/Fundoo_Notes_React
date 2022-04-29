import React, { useState } from 'react'
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'; 
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'; 
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined'; 
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'; 
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import PushPinIcon from '@mui/icons-material/PushPin';
import './takenotetwo.css'
import { Button, IconButton } from '@mui/material';

function TakeNoteTwo({handleNoteTwo}) {
    const [noteData, setNoteData] = useState({ Title: "", Description: "", isArchived: "false" })
    const [pin, setPin] = useState(false)

    const setTakeNote = () => {
        handleNoteTwo();
    }
    const takeTitle = (event) => {
        setNoteData({
            ...noteData, Title: event.target.value
        })
    }
    const takeDescription = (event) => {
        setNoteData({
            ...noteData, Description: event.target.value
        })
    }

    const takeIsArchieved = () => {
        setNoteData({
            ...noteData, isArchived: true
        })
    }

    const handlepin = () => {
        pin === true ? setPin(false) : setPin(true)
    }

    return (
        <div>
            <div className="takenotetwo">
                <div className="notetwo_top">
                    <div className='title'>
                        <input className='note_title' type="text" onChange={takeTitle} placeholder="Title" />
                    </div>
                    <div>
                        <IconButton onClick={handlepin}>
                            {pin ? <PushPinIcon /> : <PushPinOutlinedIcon /> }
                        </IconButton>
                    </div>
                </div>

                <div className="notetwo_middle">
                    <input className='note_description' type="text" onChange={takeDescription} placeholder="Take a note..." />
                </div>

                <div className="notetwo_bottom">
                    <div>
                        <IconButton>
                            <AddAlertOutlinedIcon fontSize='small' />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <PersonAddAltIcon fontSize='small' />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <ColorLensOutlinedIcon fontSize='small' />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <InsertPhotoOutlinedIcon fontSize='small' />
                        </IconButton>
                    </div>
                    <div onClick={takeIsArchieved}>
                        <IconButton>
                            <ArchiveOutlinedIcon fontSize='small' />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <MoreVertOutlinedIcon fontSize='small' />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <UndoIcon color="disabled" fontSize='small' />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton>
                            <RedoIcon color="disabled" fontSize='small' />
                        </IconButton>
                    </div>
                    <div>
                        <Button onClick={setTakeNote} className="closebutton">Close</Button>
                        {/* <input className="closebutton" type="button" value="Close" /> */}
                    </div>
                </div>
            </div>
        </div>
)
}

export default TakeNoteTwo