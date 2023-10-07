"use client";
import Image from 'next/image'
import React from 'react'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
const Header = () => {
    const dispatch = useDispatch()
    const uiMode = useSelector(state => state.global.uiMode)
    const isLoggedin = useSelector(state => state.global.isLoggedin)
    return (
        <div className={`header_body ${uiMode}`} >
            <Link href="/" className='header_left'>
                    <Link href={`https://github.com/RamGoel/ticketo`} className='github-icon'><FaGithub size={30} /> @RamGoel</Link>
            </Link>

            <div className='header_right'>
                
                <Link href={`/tickets/new`} className='add-ticket-btn'>+ <span>Add New Ticket</span></Link>
            </div>


        </div>
    )
}

export default Header;
