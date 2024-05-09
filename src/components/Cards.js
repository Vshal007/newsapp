import React from 'react'
import Card from './Card'

const Cards = () => {
    return (
        <div className="p-5 py-10 flex flex-col justify-center items-center bg-teal-200">
        <h1 className="font-semibold text-2xl lg:text-4xl">Events</h1>
            <div className="bg-teal-200 md:px-3 md:py-3 px-10 py-10 justify-center w-full flex md:flex-row flex-col gap-3 space-x-4">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>

    )
}

export default Cards