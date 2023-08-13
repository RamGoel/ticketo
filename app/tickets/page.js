"use client"
import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '@components/Loader'
import TicketCards from '@components/ticketCards'
import { fetchTicketData } from '@lib/api'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'

const TicketsList = () => {
    const eventTypes = useSelector(state => state.global.eventTypes)

    const ticketData = useSelector(state => state.global.ticketData)
    const [isLoading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const searchParams = useSearchParams()
    const key = searchParams.get('key')
    const value = searchParams.get('value')

    useEffect(() => {
        dispatch(fetchTicketData((key && value) ? `key=${key}&value=${value}` : '', (val) => setLoading(false)))
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return (
        <div>
            <Toaster />
            <div style={{ width: '90%', margin: '10px auto' }}>

                {!(key && value) ? <p>Events related to {value || 'Gene'}</p> : null}
            </div>
            <TicketCards ticketData={ticketData} />
        </div>
    )
}

export default TicketsList