import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white'>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
                <div className="logo font-bold text-white text-2xl">
                    <span className='text-blue-500'>&lt;</span>
                        Pass
                        <span className='text-blue-500'>OP/&gt;</span>

                </div>
                <ul>
                    {/* <li className='flex gap-4'>
                        <a className='hover:font-bold' href="/">Home</a>
                        <a className='hover:font-bold' href="/">About</a>
                        <a className='hover:font-bold' href="/">Contact</a>
                    </li> */}
                </ul>
                <button className='text-white w-21 bg-blue-500 my-6 flex  rounded-full justify-between items-center ring-white ring-1'>
                    <img className='w-10 p-1 rounded-full' src="/icons/git.jpeg" alt="" />
                    <span className='font-bold px-2'>GitHub</span>
                    
                </button>
            </div>
        </nav>
    )
}

export default Navbar
