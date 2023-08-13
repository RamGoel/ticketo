import React from 'react'
import './index.css'
import Link from 'next/link'
import { 
    Calendar2, 
    Clock, 
    LinkSquare, 
    Location, 
    LocationTick, 
    More2, 
    Profile2User, 
    Send2 
} from 'iconsax-react'
import { appName } from '@utils/strings'

export const TicketCard = ({ data }) => {
    return <div className='ticket_body'>
        <div className='ticket_cover'>
            <div>
            <p className='ticket_reason'>{data.reason}</p> 
            <Link className='ticket_link' href={`mailto:${data.actor.email}?subject=Hello From ${appName}&body=Hi, ${data.actor.name} \n I need ticket for ${data.eventName}`}> Interested, Mail me! <Send2 size={14} /> </Link>
            <Link className='ticket_link' href={data.url || ``}>Event Website <LinkSquare size={14} /></Link>
            </div>
        </div>
        <div className='ticket_header'>
            <h3 className='ticket_name'>{data.eventName || "Event Name"}</h3>
            <h3 className='ticket_price'>₹{data.price || `XYZ`}</h3>
        </div>
        <div className='ticket_header'>
            <p className='ticket_about'><Profile2User size={12} />Posted by {data.actor.name || `Your name`}</p>
            <p className='ticket_about'><Location size={12} />{data.actor.location || 'Your Location'}</p>
        </div>
        <div className='ticket_header'>
            <p className='ticket_type'><More2 size={12} />{data.eventType ||`Event Type`}</p>
            <p className='ticket_type'><Clock size={12} /> {data.duration || 'Event Duration'}</p>
        </div>
        <div className='ticket_header'>
            <p className='ticket_type'><LocationTick size={12} />{data.location || 'Event Location'}</p>
            <p className='ticket_type'><Calendar2 size={12} />{data.date || `Event Date`}</p>
        </div>
    </div>
}
const TicketCards = ({
    ticketData
}) => {
    return (
        <div className='tickets_box'>
            {
                ticketData.map((ticket) => {
                    return <TicketCard data={ticket} />
                })
            }
        </div>
    )
}

export default TicketCards