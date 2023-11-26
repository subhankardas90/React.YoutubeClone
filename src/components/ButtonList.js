import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list = ['Movie', 'Sales', 'Samsung', 'Music', 'Stock Market', 'Marketplaces', 'Mixes', 'Apple', 'News', 'Comedy', 'Watched', 'Dramedy']
  return (
    <div className ="flex">
        {list.map(l => (<Button name ={l}/>))}
    </div>
  )
}

export default ButtonList;