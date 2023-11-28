import React from 'react'
import ChatMessage from './ChatMessage'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessage = useSelector(store => store.chat.messages)
    
    useEffect(()=>{
       
       const i = setInterval(()=> {
        //API Polling
        console.log("polling")
        dispatch(addMessage({
            name: generateRandomName(),
            message: makeRandomMessage(60)
        }))
       }, 3000);
       
        return () => clearInterval(i);
    })
  return (
    <>
    <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 overflow-y-scroll flex flex-col-reverse" >
        {chatMessage.map((c, index)=>
        <ChatMessage key = {index} name ={c.name} message={c.message} />)}
    </div>
    <form className="w-full h-[50px] p-2 ml-2 border border-black flex" 
        onSubmit = {(e)=> {
            e.preventDefault();
            dispatch(addMessage({
                name:"Subhankar", 
                message: liveMessage
            }))
            setLiveMessage("");
        }}>
        <input className = "w-full" type="text" value ={liveMessage} onChange={(e)=> setLiveMessage(e.target.value)}/>
        <button className="px-6 mx-2 bg-green-100"> Send</button>
    </form>
    </>
  )
}

export default LiveChat