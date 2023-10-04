"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import { Transition } from "@headlessui/react";

import Login from "@components/login/login";

import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  const dispatch = useDispatch();

  const uiMode = useSelector((state) => state.global.uiMode);
  //   const isLoggedin = useSelector((state) => state.global.isLoggedin);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div className={`header_body ${uiMode}`}>
      <Link href="/" className="header_left">
        <Image src={`/lg (1).png`} width={50} height={50} alt="App Logo" />
      </Link>

      <div className="header_right">
        {session && (
          <div
            className="container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {session?.user?.image && (
              <Image
                src={session?.user?.image}
                alt="Profile Picture"
                width="40"
                height="40"
                className="rounded-full"
              />
            )}

            <Transition
              show={isDropdownOpen}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <ul>
                <div className="user-name">Welcome, {session?.user?.name}!</div>
                <div>
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </ul>
            </Transition>
          </div>
        )}

        {!session && <Login />}

        <Link href={`/tickets/new`} className="add-ticket-btn">
          + Add New Ticket
        </Link>

        <Link href={`https://linkedin.com/in/RamGoel`}>
          <Image
            src={`/profile.png`}
            width={40}
            height={40}
            alt="App Logo"
            className="header_profile_image"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
