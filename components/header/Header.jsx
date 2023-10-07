"use client";
import Image from 'next/image'
import React from 'react'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link';
const Header = () => {
    const dispatch = useDispatch()
    const uiMode = useSelector(state => state.global.uiMode)
    const isLoggedin = useSelector(state => state.global.isLoggedin)
    return (
        <div className={`header_body ${uiMode}`} >
            <Link href="/" className='header_left'>
                <Image
                    src={`/lg (1).png`}
                    width={50}
                    height={50}
                    alt='App Logo'
                />
            </Link>

            <div className='header_right'>

                <Link href={`/tickets/new`} className='add-ticket-btn'>+ <span>Add New Ticket</span></Link>
                <Link href={`https://linkedin.com/in/RamGoel`}><Image

                    src={`/profile.png`}
                    width={40}
                    height={40}
                    alt='App Logo'
                    className='header_profile_image'
                /></Link>
            </div>


        </div>
    )
}

export default Header;
