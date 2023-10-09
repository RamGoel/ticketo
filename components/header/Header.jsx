"use client";
import React from 'react'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link';
import { FaAngleLeft, FaArrowLeft, FaBackward, FaGithub } from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';
const Header = () => {
    const router = useRouter()
    const pathname=usePathname()
    const uiMode = useSelector(state => state.global.uiMode)
    return (
        <div className={`header_body ${uiMode}`} >
            <div className='header_left' style={{ cursor: 'pointer' }}>
                {pathname !=='/' ? <FaArrowLeft size={25} onClick={() => router.back()} /> : null}
            <Link href="/" className='header_left'>
                    <Link href={`https://github.com/RamGoel/ticketo`} className='github-icon'><FaGithub size={30} /> @RamGoel</Link>
            </Link>
            </div>

            <div className='header_right'>
                
                <Link href={`/tickets/new`} className='add-ticket-btn'>+ <span>Add New Ticket</span></Link>
            </div>


        </div>
    )
}

export default Header;
