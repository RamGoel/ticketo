import React from 'react'
import './index.css'

const EventTypeCard = ({ title, count }) => {
    return <div className='card-body'>
        <p className='card-title'>{title}</p>
        <p className='card-number'>{count}</p>
    </div>
}
const EventTypes = ({
    typesMap
}) => {
    return (
        <div className='card-container'>
            <select>
                {
                    Object.keys(typesMap).map((key) => {
                        return <option value={key}>{key} - {typesMap[key]} </option>
                    })
                }
            </select>
        </div>
    )
}

export default EventTypes