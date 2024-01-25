import React from 'react'
import './EventCard.css'
import {card} from '@mui/material';
const EventCard = () => {
    const data = {
        "_id": "614a2b2867e6a40c2c6f5f3a",
        "cid": "615e5c8f67e6a40c2c6f5f3b",
        "name": "Dummy Event",
        "DateTime": "2024-02-10T18:00:00Z",
        "Venue": "Some Venue",
        "description": "Description line 1",
        "coverImage": "https://placehold.co/600x400",
        "capacity": 100,
        "registrations": ["615e5c9167e6a40c2c6f5f3c", "615e5c9267e6a40c2c6f5f3d"],
        "charges": 10.99,
        "category": "Some Category",
        "Duration": "2 hours",
        "tnc": ["Terms and conditions line 1", "Terms and conditions line 2"],
        "Status": ["Active", "Approved"]
      }
  return (
    <div className='card'>
        <h1>hi</h1>
    </div>
  )
}

export default EventCard