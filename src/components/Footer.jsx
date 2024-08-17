import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center w-full py-4'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-blue-500'>&lt;</span>
                <span>Pass</span>
                <span className='text-blue-500'>OP/&gt;</span>
            </div>
            <div className='font-sans'>
                Created by Raghav Manhas
            </div>
        </div>
    )
}

export default Footer
