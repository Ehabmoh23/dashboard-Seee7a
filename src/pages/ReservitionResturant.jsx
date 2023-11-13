import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ReservitionResturant() {
    const [hotels, setHotels] = useState([]);
    async function getHotels() {
		let res = await axios.get("https://itigradiuation.onrender.com/getAllRestReserv", {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem("token")
			}
		})
		setHotels(res.data.reservations)
	}
    useEffect(() => {
		getHotels()
	}, [])
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white rounded-lg">
        <thead>
            <tr>
            
                <th className="px-4 py-2">User Name</th>
                <th className="px-4 py-2">Restaurant Name</th>
                <th className="px-4 py-2">User Phone</th>
                <th className="px-4 py-2">Number Of Guests</th>
                <th className="px-4 py-2">Reservation Date</th>
                
            </tr>
        </thead>
        <tbody>
            {hotels.map((hotel, index) => (
                <tr key={index}>
                    
                    <td>
                        {hotel.user.userName}
                    </td>
                    <td>
                        {hotel.restaurantReservations.restName}
                    </td>

                    <td>{hotel.user.phone}</td>
                    
                    <td>
                        {hotel.checkInDate}
                    </td>
                    <td>
                        {hotel.checkOutDate}
                    </td>
                    
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}
