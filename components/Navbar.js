import React from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='w-full border-b-2 border-indigo-500 bg-white'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
                <Link href='/'><h1 className='text-4xl'>PongCentral</h1></Link>
                <ul className="flex justify-evenly">
                    <li className='p-4'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/'>Dashboard</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/tournaments'>Tournaments</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/'>Classes</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar