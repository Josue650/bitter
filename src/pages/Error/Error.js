import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div className='text-center my-8'>
            <h2 className='font-bold text-4xl'>Error, page not found</h2>
            <p className='pb-2'>
                Please go back to login <br />
            </p>
            <Link to='/register' className='bg-blue-500 py-1 px-3 rounded-full text-white'>Login</Link>
        </div>
    )
}