'use client';
import React , {useState} from 'react'

import Style from "./searchbar.module.css";
import { BsSearch , BsArrowRight } from 'react-icons/bs';
import { Clicker_Script } from 'next/font/google';


const SearchBar = () => {
    const [cliked , setcliked] = useState(false);

    const handleClick = () => {
        if(cliked){
            setcliked(false)
        }else{
            setcliked(true)
        }
    }

  return (
    <div className={Style.SearchBar} >

        <div onClick={() => handleClick()} className={Style.SearchBar_box}  >
            <BsSearch className={Style.SearchBar_box_search_icon} />
            <input type='text' placeholder='Type your Keywords' className={Style.SearchBar_box_input} /> 
            <BsArrowRight className={Style.SearchBar_box_arrow_icon} />

        </div>
 
    </div>
  )
}

export default SearchBar