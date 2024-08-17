import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { MdCopyAll } from "react-icons/md";
const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])


    const showPassword = () => {
        if (ref.current.src.includes("https://th.bing.com/th?id=OIP.sKM75jdG_r-JV9p-515t-QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2")) {
            ref.current.src = "data:image/jpeg;base64,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"
            passwordRef.current.type = "password"
        }

        else {
            ref.current.src = "https://th.bing.com/th?id=OIP.sKM75jdG_r-JV9p-515t-QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            passwordRef.current.type = "text"
        }
    }

    const savePassword = () => {
        const newEntry = { ...form, id: uuidv4() };
        const updatedPasswordArray = [...passwordArray, newEntry];
        setPasswordArray(updatedPasswordArray);
        localStorage.setItem("passwords", JSON.stringify(updatedPasswordArray));
        console.log(updatedPasswordArray);
        setform({ site: "", username: "", password: "" });
        toast('Password Saved', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    const deletePassword = (id) => {
        console.log('deleting pwd with id', id)
        // eslint-disable-next-line no-restricted-globals
        let c = confirm("Do you really want to delete?")
        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            toast('Password Deleted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    const editPassword = (id) => {
        // console.log('editing pwd with id', id)
        setform(passwordArray.filter(item => item.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))

    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const copyText = (text) => {
        toast('🦄 Copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text);
    }
    return (

        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            {/* Same as */}
            <ToastContainer />
            <div className="absolute inset-0 -z-10 h-full w-full bg-blue-50 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
            <div className="p-2  md:p-0 md:mycontainer min-h-[81.3vh]">
                <h1 className='text-4xl font-bold text-center'>
                    <span className='text-blue-700'>&lt;</span>
                    <span>Pass</span>
                    <span className='text-blue-700'>OP/&gt;</span>
                </h1>

                <p className='text-blue-900 text-lg text-center font-sans'>Your own password manager</p>

                <div className='flex flex-col text-black p-4 gap-8 items-center'>
                    <input value={form.site} onChange={handleChange} placeholder='Enter website URL' className='rounded-full border border-blue-400 w-full p-4 py-1' type="text" name='site' id=' site' />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-8 ">
                        <input value={form.username} onChange={handleChange} placeholder='Enter username' className='rounded-full border border-blue-400 w-full p-4 py-1' type="text" name='username' id='user ' />
                        <div className="relative">
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter password' className='rounded-full border border-blue-400 w-full p-4 py-1' type="password" name='password' id=' password' />
                            <span className='absolute right-[8px] top-[7px] cursor-pointer' onClick={showPassword}>
                                <img ref={ref} className='p-1' width={26} src="data:image/jpeg;base64,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" alt="" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center bg-blue-500 rounded-full px-4 py-2
                    w-fit m-4 border border-blue-900 hover:bg-blue-400 ring-sky-200 ring-1'>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>Save Password</button>
                </div>
                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length !== 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
                        <thead className='bg-blue-600 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-blue-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className=' py-2 border border-white text-center'>
                                        <div className='flex justify-center items-center'>
                                            <a href={item.site} target='_blank' rel="noreferrer">{item.site}</a>
                                            <div className=' cursor-pointer size-7' onClick={() => { copyText(item.site) }} >
                                            <MdCopyAll
                                             style={{ "width": "25px", "height": "25px", "paddingTop": "3px" }} 
                                             trigger="hover"
                                             />
                                    
                                            </div>
                                        </div>
                                    </td>

                                    <td className='py-2 border border-white text-center'>
                                        <div className='flex justify-center items-center'>
                                            <span>{item.username}</span>
                                            <div className=' cursor-pointer size-7' onClick={() => { copyText(item.username) }} >
                                            <MdCopyAll
                                             style={{ "width": "25px", "height": "25px", "paddingTop": "3px" }} 
                                             trigger="hover"
                                             />
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' py-2 border border-white text-center'>
                                        <div className='flex justify-center items-center'>
                                            <span> {item.password}</span>
                                            <div className='lordiconcopy cursor-pointer size-7' onClick={() => { copyText(item.password) }} >
                                            <MdCopyAll
                                             style={{ "width": "25px", "height": "25px", "paddingTop": "3px" }} 
                                             trigger="hover"
                                             />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='py-2 border border-white text-center'>
                                        <span className='cursor-pointer mx-1' onClick={() => { editPassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/jpgpblwn.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1' onClick={() => { deletePassword(item.id) }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/skkahier.json"
                                                trigger="hover"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon>
                                        </span>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>

            </div>
        </>

    )
}

export default Manager
