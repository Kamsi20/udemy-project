import React from 'react'


export const CardR = ({ bg, text = "comptia", texta = "", height = "" }) => {


    const style = {
        background: `url(${bg})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

    }

    return (
        <div className=' bg-gray-700 h-50 w-50 p-4 rounded-2xl text-white  '>
            <div className='w-35 h-20  p-3  rounded-lg w-42' style={style}>
                <div className='mt-20 font-semibold ' > {text} <br /><div className='font-extralight text-sm'><small>{texta}</small></div></div>
            </div>
        </div>
    )
}


export default CardR
