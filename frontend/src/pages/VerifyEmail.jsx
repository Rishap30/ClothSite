import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const VerifyEmail = () => {
    const { token } = useParams()
    const [status, setStatus] = useState("Verifying...")
    const navigate = useNavigate()

    const verifyEmail = async () => {
        try {
            const res = await axios.post('http://localhost:8000/api/v1/user/verify', {}, {
                header: {
                    Autharization: `bearer ${token}`
                }
            })
            if (res.data.success) {
                setStatus("✅ Email verified Successfully")
                setTimeOut(() => {
                    navigate('/login')
                }, 2000)
            }
        } catch (error) {
            console.log(error);
            setStatus("❌verification failed, Please try again")
        }
    }
    useEffect(() => {
        verifyEmail()
    }, { token })
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