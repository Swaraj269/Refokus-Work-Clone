import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
        <div className="cards mx-auto flex gap-1 items-center max-w-screen-xl py-5">
            <Card text = {true} />
            <Card text = {false} hover = {true} />
        </div>
    </div>
  )
}

export default Cards