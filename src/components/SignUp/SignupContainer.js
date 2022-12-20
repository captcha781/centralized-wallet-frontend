import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import isEmpty from '../../functions/isEmpty'
import validation from './validation'
import postSignup from "../../functions/SignUp/postSignup"
import { userInfo } from '../../functions/userInfo'
import setAuthorization from '../../functions/setAuthorization'

const initialFormValue = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
}

const SignupContainer = () => {

    const [formValue, setFormValue] = useState(initialFormValue)
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()

    const changeHandler = (e) => {
        let { id, value } = e.currentTarget
        setFormValue({ ...formValue, [id]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const error = validation(formValue)
            if (!isEmpty(error)) {
                return setErrors(error)
            } else if (isEmpty(error)) {
                setErrors({})
            }

            const { success, result, token, message } = await postSignup(formValue)
            if (success) {
                toast(message, { type: "success" })
                setAuthorization(token)
                await userInfo(dispatch)
                console.log(result);
            } else {
                toast(message, { type: "error" })
            }

        } catch (error) {
            toast(error.message, { type: "error" })
        }
    }

    return (
        <div className='w-11/12 mx-auto md:w-1/2 lg:w-1/3 xl:w-1/4 mt-32 sm:mt-40 xxl:mt-52'>
            <div className='p-4 rounded-xl bg-white shadow-xl shadow-gray-200 drop-shadow-lg'>
                <h2 className='text-xl font-semibold text-gray-700 mb-5'>Sign up</h2>
                <form className='text-gray-700'>
                    <div className='block mb-2'>
                        <label className='mb-3 text-lg'>Name</label><br />
                        <input className='signup_input' id='name' type={"text"} placeholder="John Cena" value={formValue.name} onChange={changeHandler} />
                        <small className='text-red-500'>{errors ? errors.name : <>&nbsp;</>}</small>
                    </div>
                    <div className='block mb-3'>
                        <label className='mb-3 text-lg'>Email</label><br />
                        <input className='signup_input' id='email' type={"email"} placeholder="johncena@email.com" value={formValue.email} onChange={changeHandler} />
                        <small className='text-red-500'>{errors ? errors.email : <>&nbsp;</>}</small>
                    </div>
                    <div className='block mb-3'>
                        <label className='mb-3 text-lg'>Password</label><br />
                        <input className='signup_input' id='password' type={"text"} placeholder="*********" value={formValue.password} onChange={changeHandler} />
                        <small className='text-red-500'>{errors ? errors.password : <>&nbsp;</>}</small>
                    </div>
                    <div className='block mb-3'>
                        <label className='mb-3 text-lg'>Confirm Password</label><br />
                        <input className='signup_input' id='confirmPassword' type={"text"} placeholder="*********" value={formValue.confirmPassword} onChange={changeHandler} />
                        <small className='text-red-500'>{errors ? errors.confirmPassword : <>&nbsp;</>}</small>
                    </div>
                    <div className='mb-1.5'>
                        <Link className='underline' to={"/signin"}>Already have an account?</Link>
                    </div>
                    <div className='flex justify-end mb-3 text-white'>
                        <button type='submit' className='signupBtn' onClick={submitHandler}>Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupContainer