import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from "../utils/searchSlice";
import {YOUTUBE_SEARCH_API} from '../utils/constants'

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };
    useEffect(() =>{

        /* Make API call after every key press
        * but if difference is less than 200ms then reject - Debouncing
        */
        const timer = setTimeout(()=>{
        if (searchCache && searchCache[searchQuery]) {
            setSuggestions(searchCache[searchQuery]);
        } else {
            getSearchSuggestion();
        }
        },200);

        return ()=>{
            clearTimeout(timer);
        }
    }, [searchQuery])
  
  const getSearchSuggestion = async () => {
    //we need to enable Cors using https://cors-anywhere.herokuapp.com/corsdemo so that it can work with localhost
   let data = await fetch("https://cors-anywhere.herokuapp.com/"+YOUTUBE_SEARCH_API+searchQuery, {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "*",
        }})
    const json = await data.json();
    setSuggestions(json[1]);
    //update cache
    dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
  }

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>

        <img 
            onClick={() => toggleMenuHandler()} 
            className='h-8 cursor-pointer' alt ="hamburger logo" 
            src ="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"/>
        <a href= "/">
        <img className ='h-7 mx-2' alt = "logo youtube" src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/512px-YouTube_Logo_%282013-2017%29.svg.png" />
        </a>
        </div>
        <div className='col-span-10 px-10'>
          <div>  
            <input className= 'className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"'  type="text" 
            value= {searchQuery}
            onChange={(e)=> setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}/>
             <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && 
        (<div className ="absolute fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100"> 
        <ul>
              {suggestions && suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
        </div>
        )}
        </div>
        <div className='col-span-1'>
        <img className='h-8' alt = "user logo" src ="https://cdn-icons-png.flaticon.com/512/666/666201.png" />
        </div>
    </div>
  )
}

export default Head