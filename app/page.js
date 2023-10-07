"use client"
import Link from 'next/link'
import '@styles/home.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTicketData } from '@lib/api'
import { useEffect, useState } from 'react'
import { ArrowRight } from 'iconsax-react'


export default function Home() {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const uiMode = useSelector(state => state.global.uiMode)
  const ticketData = useSelector(state => state.global.ticketData)

  useEffect(() => {
    const getResults = setTimeout(() => {
      dispatch(fetchTicketData(`key=eventName&value=${query}`, () => { }))
    }, 500)

    return () => clearTimeout(getResults)
  }, [query])
  return (
    <div className={`home_page ${uiMode}`}>
      <div className='home-form'>
        <h1 className='search-head'>Find tickets</h1>
        <div className='home-content'>

        <input className='search-input' onChange={(e) => {
          setQuery(e.target.value)
        }} placeholder='Search by event name' />
        <div className='suggestion-box'>
          <p className='search-hint'>or start with <Link href={`/tickets?key=eventType&value=concert`}>Concerts</Link>, <Link href={`/tickets?key=eventType&value=meetups`}>Meetups</Link> or <Link href={`/tickets?key=eventType&value=conferences`}>Conferences</Link></p>
          {
            query && ((ticketData.length) ? ticketData.map((obj) => {
              return <Link className='suggestion-item' href={`/tickets?key=eventName&value=${obj.eventName}`}>{obj.eventName} <ArrowRight /></Link>
            }) : <p className='suggestion-item'>No Events Found</p>)
          }
        </div>
        </div>
      </div>
    </div>
  )
}
