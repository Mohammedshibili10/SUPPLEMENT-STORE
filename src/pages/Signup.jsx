import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <div className='bg-black/90'>
            <div className='flex justify-center items-center h-screen  '>
                <div className='  w-100 h-125 border bg-white  rounded-lg shadow-lg '>
                    <div className='text-center mt-5  '>
                        <h1 className='text-2xl font-bold'>Sign Up</h1>
                        <p className='text-sm'> Sign up to continue</p>
                    </div>

                    <form >
                        <div className=' '>
                            <input className='border-b-1  w-90 h-10 mt-5 ml-5 rounded-md ' type="text" placeholder='Name ' />
                            <br />
                            <input className='border-b-1 w-90 h-10 mt-5 ml-5 rounded-md ' type="email" placeholder='Email' />
                            <br />
                            < input className='border-b-1  w-90 h-10 mt-5 ml-5 rounded-md ' type="password" placeholder='Password' />
                            <br />
                        </div>
                        <div>
                          <Link to={'/home'}>  <button className='text-md text-white font-bold  w-90 h-10 bg-red-500 rounded-lg mt-7 ml-5'>Submit</button></Link>
                            <div className='ml-5'>
                                <input type="checkbox" placeholder='Remember me' />
                                <label className='ml-2 text-sm'>Remember me</label>
                            </div>
                            <div className='flex gap-1 justify-center '>
                                <p className='text-[14px]'>Already have an account?</p><Link to={'/'}><p className='text-blue-500 text-[14px]'>Login</p></Link>
                            </div>
                            <div className='flex justify-center items-center gap-2 mt-1 mb-5'>
                                <hr className='w-30' /><span>or</span><hr className='w-30' />
                            </div>
                            <div className='relative'>
                                <button className=' border-2 w-70 h-12 ml-15 rounded-md'>Sign up with Google</button>
                                <img className='w-6 absolute left-25 bottom-3' src="/images/google.png" alt="error" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        </div>
    )
}
