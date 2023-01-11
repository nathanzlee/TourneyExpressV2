import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'

const Navbar = () => {
    const [signedUser, setSignedUser] = useState(false)

    useEffect(() => {
        authListener()
    }, [])

    async function authListener() {
        Hub.listen('auth', (data) => {
            switch (data.payload.event) {
                case "signIn":
                    return setSignedUser(true)
                case "signOut":
                    return setSignedUser(false)
            }
        })

        try {
            await Auth.currentAuthenticatedUser()
            setSignedUser(true)
        } catch (err) {

        }
    }
    return (
        <div className='w-full border-b-2 border-indigo-500 bg-white'>
            <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
                <Link href='/'><h1 className='text-4xl'>PongCentral</h1></Link>
                <ul className="flex justify-evenly items-center">
                    <li className='p-4'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/tournaments'>Tournaments</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/'>Classes</Link>
                    </li>
                    <li className='p-4'>
                        <Link href='/dashboard'>Dashboard</Link>
                    </li>
        </ul>
            </div>
        </div>
    )
}

export default Navbar