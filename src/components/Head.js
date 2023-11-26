import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg'>
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
            <input className= 'w-1/2 border border-grey-400 p-2 rounded-l-full'  type="text" />
            <button className ='border border-grey-400 p-2 rounded-r-full font-bold'>
                Search
            </button>
        </div>
        <div className='col-span-1'>
        <img className='h-8' alt = "user logo" src ="https://cdn-icons-png.flaticon.com/512/666/666201.png" />
        </div>
    </div>
  )
}

export default Head