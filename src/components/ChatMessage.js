import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className="p-2 flex item-center shadow-sm">
        <img className='h-4' alt = "user logo" src ="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />&nbsp;&nbsp;
        <span className="font-bold">{name}</span> &nbsp;: &nbsp;<span>{message} </span>
    </div>
  )
}

export default ChatMessage