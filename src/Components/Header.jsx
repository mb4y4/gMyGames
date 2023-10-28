import React, { useContext, useState, useEffect } from 'react'
import logo from './../assets/Images/logo-no-background.png'
import { FaMoon, FaSearchengin, FaSun } from "react-icons/fa6";
import { ThemeContext } from '../Context/ThemeContext';
import Search from './Search';

function Header() {
  const [toggle, setToggle] = useState(true)
  const {theme,setTheme} = useContext(ThemeContext)

  useEffect(()=>{
    console.log("Theme",theme)
  },[])
 
  return (
    <div className="flex items-center p-3">
    <img src={logo} width={160} height={60} />
    <div
      className="flex bg-slate-200 p-2 w-full
      mx-5 rounded-full items-center"
    >
      <Search />
      {/* <input
        type="text"
        placeholder="Search Games"
        className="px-2 bg-transparent  outline-none"
      /> */}
    </div>
    <div>
      {theme=='light' ? (
        <FaMoon
          className="text-[35px] bg-slate-200
         text-black p-1 rounded-full cursor-pointer"
          onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}}
        />
      ) : (
        <FaSun
          onClick={() => {setTheme('light');localStorage.setItem('theme','light')}}
          className="text-[35px] bg-slate-200
         text-black p-1 rounded-full cursor-pointer"
        />
      )}
    </div>
  </div>
);
}

export default Header