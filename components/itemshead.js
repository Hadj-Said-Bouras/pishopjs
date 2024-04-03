import React from 'react'

function ItemsHead(props) {
  return (
    <div className='flex items-center gap-5 text-red-500 font-semibold'>
    <div className='bg-red-500 rounded h-10 w-5 ml-20'></div>
    <h1>{props.title}</h1>
    </div>
  )
}

export default ItemsHead