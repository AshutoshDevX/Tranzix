import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export const Appbar = ({ firstname }) => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false)
    return (
        <div className="flex flex-col justify-center shadow h-14">
            <div className="flex justify-between h-full px-4 md:px-18 lg:px-24">
                <div className="flex flex-col justify-center h-full ml-4 font-bold text-2xl">
                    Tranzix
                </div>
                <div className="flex items-center relative">
                    <div className="flex flex-col justify-center h-full mr-4">
                        Hello
                    </div>
                    <div
                        onClick={() => setToggle(!toggle)}
                        className="rounded-full h-12 w-12 bg-slate-200 flex justify-center cursor-pointer  mr-2">
                        <div className="flex flex-col justify-center h-full text-xl">
                            {firstname[0]}
                        </div>
                    </div>
                    {toggle && <div className="bg-gray-200 p-3 flex flex-col gap-1 text-black top-13 rounded-sm absolute right-3 Z-1000 cursor-pointer font-semibold">
                        <p>Profile</p>
                        <p>History</p>
                        <p
                            onClick={() => {
                                localStorage.clear();
                                navigate('/signin')
                            }}
                        >Logout</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}
