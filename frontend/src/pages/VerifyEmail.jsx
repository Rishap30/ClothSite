import React, { useState } from 'react'

export const VerifyEmail = () => {
    const {token } = useparams()
    const [status,setStatus] = useState("Verifying...") 
    return (
        <div className='relative w-full h-[780px] bg-pink-100 overflow-hidden '>
            <div className="min-h-screen felx items-center justify-center">
                <div className="bg-white p-6 rounded-2xl shadow-md text-center w-[90] max-w-md">
                    <h2 className='text-xl font-semibold text-gray-800' >{status}</h2>
                </div>
            </div>
        </div>
    )
}

export default VerifyEmail