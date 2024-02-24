import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        <div className="bg-gray-500 md:px-3 md:py-3 px-10 py-10 justify-center w-full flex md:flex-row flex-col gap-3 space-x-4">
           <Card/>
           <Card/>
           <Card/>
           <Card/>
        </div>
    )
}

export default Cards