"use client"
import React, { useState } from 'react'
import './newTicket.styles.css'
import { Save2 } from 'iconsax-react'
import { TicketCard } from '@components/ticketCards'
import { useDispatch } from 'react-redux'
import { postTicketData } from '@lib/api'
import { Toaster } from 'react-hot-toast'
const NewTicket = () => {
    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const handleCreateTicket = () => {
        if (!data || !Object.keys(data).length){
            return;
        } else {
            setLoading(true)
            dispatch(postTicketData({
                ...data,
                actor: {
                    name: data.userName,
                    location: data.userLocation,
                    email:data.userEmail
                }
            }, () => setLoading(false), () => setData({})))
        }
    }
    const sampleData = {
        "Event Name": 'eventName',
        "Event Type": 'eventType',
        "Event Website": 'url',
        "Event Date": 'date',
        "Event Duration": 'duration',
        "Event Location": 'location',
        "Selling Price": 'price',
        "Your Name": 'userName',
        "Your Location": 'userLocation',
        "Your Email": 'userEmail',
        "Why Selling?": 'reason',
    }

    const handleChange = (key, value) => {
        setData({
            ...data,
            [key]: value
        })
    }

    return (
        <div className='add_page'>
            <Toaster />
            <div className='add_left'>
                <h1 className='add_left_head'>Add a New Ticket</h1>
                <div className='input_box'>

                    {
                        Object.keys(sampleData).map((key, index, arr) => {
                            return <input
                                value={data[sampleData[key]]}
                                placeholder={key}
                                style={{ width: (index == arr.length - 1) ? '95%' : `45%` }}
                                className='form_input'
                                onChange={(e) => handleChange(sampleData[key], e.target.value)}
                            />
                        })
                    }
                </div>
                <button
                    disabled={Object.keys(data).length !== Object.keys(sampleData).length}
                    className='form_btn'
                    onClick={() => handleCreateTicket()}>
                    {!isLoading ? `Save Ticket` : `Loading...`}
                    <Save2 size={14} />
                </button>
            </div>
            <div className='add_right'>
                <TicketCard data={{
                    ...data,
                    actor: {
                        name: data.userName,
                        location: ''
                    }
                }} />
            </div>
        </div>
    )
}

export default NewTicket