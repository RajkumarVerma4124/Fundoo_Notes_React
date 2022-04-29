import React, { useState } from 'react';
import './header.css'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import RefreshTwoToneIcon from '@mui/icons-material/RefreshTwoTone';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import keep from '../../assets/images/keep.png'
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function Header() {

  const [searchActive, setSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="header" onClick={() => setSearchActive(false)}>
      <div className="header__left">
        <Tippy content="Main menu">
          <IconButton size="large">
            <MenuIcon />
          </IconButton>
        </Tippy>
        
        <img
          src={keep}
          alt=""
        />
        <h1 className="header_text">Fundoo</h1>
      </div>
      <div className="header_middle">
        <div className={!searchActive ? "header__middleLeft" : "header__middleLeft active"} 
             onClick={(e) => { 
               e.stopPropagation(); 
               return setSearchActive(true);
          }}>
          <Tippy content="Search">
            <IconButton>
              <SearchIcon />           
             </IconButton>
          </Tippy>

          <input type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(element) =>
              setSearchTerm(element.target.value)
            } />
          <Tippy content="Clear search" className={searchTerm ? "iconcross iconactive" : "iconcross"}>
            <IconButton className={searchTerm ? "iconcross iconactive" : "iconcross"}>
              <ClearIcon
                onClick={() => {
                  setSearchTerm("");
                }} />
            </IconButton>
          </Tippy>
        </div>
        <div className="header__middelRight">
          <IconButton size="large">
            <RefreshTwoToneIcon onClick={() => refresh()} />
          </IconButton>
          <IconButton size="large">
            <ViewAgendaOutlinedIcon />
          </IconButton>
          <IconButton size="large">
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar alt="Raj Verma" src="../../assets/images/raj.jpg" sx={{ width: 35, height: 35 }} />
      </div>
    </div>
  )
}

export default Header