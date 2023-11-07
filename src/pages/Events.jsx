import React, { useState } from 'react';

export default function Events() {
	const [Events, setEvents] = useState([]);
	const [newEvent, setNewEvent] = useState({
	  name: '',
	  phone: '',
	  location: '',
	  imageUrl: '',
		price :''

	});
  
	const [editingIndex, setEditingIndex] = useState(-1);
  
	const addEvent = () => {
	  if (!newEvent.name || !newEvent.phone || !newEvent.location || !newEvent.email ) {
		return;
	  }
  
	  setEvents([...Events, newEvent]);
	  setNewEvent({
		name: '',
		email :'',
		phone: '',
		location: '',
		imageUrl: '',
		price :''
	  });
	};
  
	const deleteEvent = (index) => {
	  const updatedEvents = [...Events];
	  updatedEvents.splice(index, 1);
	  setEvents(updatedEvents);
	};
  
	const updateEvent = (index) => {
	  setEditingIndex(index);
	};
  
	const saveEvent = (index) => {
	  if (!Events[index].name || !Events[index].phone || !Events[index].price || !Events[index].location ||!Events[index].email ) {
		return;
	  }
  
	  setEditingIndex(-1);
	};
  
	return (
	  <div className="p-4 bg-gray-100">
		<h1 className="text-2xl font-bold mb-4">Events</h1>
		<div className="mb-4">
		  <input
			type="text"
			placeholder="Name"
			value={newEvent.name}
			onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
			className="p-2 border rounded w-full"
		  />
		  <input
			type="text"
			placeholder="phone"
			value={newEvent.phone}
			onChange={(e) => setNewEvent({ ...newEvent, phone: e.target.value })}
			className="p-2 border rounded w-full mt-2"
		  />
		    <input
			type="number"
			placeholder="price"
			value={newEvent.price}
			onChange={(e) => setNewEvent({ ...newEvent, price: e.target.value })}
			className="p-2 border rounded w-full mt-2"
		  />
		  <input
			type="text"
			placeholder="Location"
			value={newEvent.location}
			onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
			className="p-2 border rounded w-full mt-2"
		  />
		    <input
			type="text"
			placeholder="email"
			value={newEvent.email}
			onChange={(e) => setNewEvent({ ...newEvent, email: e.target.value })}
			className="p-2 border rounded w-full mt-2"
		  />
		  <input
			type="text"
			placeholder="Image URL"
			value={newEvent.imageUrl}
			onChange={(e) => setNewEvent({ ...newEvent, imageUrl: e.target.value })}
			className="p-2 border rounded w-full mt-2"
		  />
		  <button
			className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-2 w-full"
			onClick={addEvent}
		  >
			Add New Event
		  </button>
		</div>
		<div className="overflow-x-auto">
		  <table className="min-w-full bg-white rounded-lg">
			<thead>
			  <tr>
				<th className="px-4 py-2">Image</th>
				<th className="px-4 py-2">Name</th>
				<th className="px-4 py-2">phone</th>
				<th className="px-4 py-2">Location</th>
				<th className="px-4 py-2">email</th>
				<th className="px-4 py-2">price</th>
				<th className="px-4 py-2">Actions</th>
			  </tr>
			</thead>
			<tbody>
			  {Events.map((Event, index) => (
				<tr key={index}>
				  <td>
					{editingIndex === index ? (
					  <input
						type="text"
						value={Event.imageUrl}
						onChange={(e) => {
						  const updatedEvents = [...Events];
						  updatedEvents[index].imageUrl = e.target.value;
						  setEvents(updatedEvents);
						}}
						className="p-2 border rounded w-full"
					  />
					) : (
					  <img src={Event.imageUrl} alt={Event.name} className="h-16 w-16 rounded-circle object-cover" />
					)}
				  </td>
				  <td>
					{editingIndex === index ? (
					  <input
						type="text"
						value={Event.name}
						onChange={(e) => {
						  const updatedEvents = [...Events];
						  updatedEvents[index].name = e.target.value;
						  setEvents(updatedEvents);
						}}
						className="p-2 border rounded w-full"
					  />
					) : (
					  Event.name
					)}
				  </td>
				  <td>
					{editingIndex === index ? (
					  <input
						type="text"
						value={Event.phone}
						onChange={(e) => {
						  const updatedEvents = [...Events];
						  updatedEvents[index].phone = e.target.value;
						  setEvents(updatedEvents);
						}}
						className="p-2 border rounded w-full"
					  />
					) : (
					  Event.phone
					)}
				  </td>
				  <td>
					{editingIndex === index ? (
					  <input
						type="text"
						value={Event.location}
						onChange={(e) => {
						  const updatedEvents = [...Events];
						  updatedEvents[index].location = e.target.value;
						  setEvents(updatedEvents);
						}}
						className="p-2 border rounded w-full"
					  />
					) : (
					  Event.location
					)}
				  </td>
				  <td>
					{editingIndex === index ? (
					  <input
						type="text"
						value={Event.email}
						onChange={(e) => {
						  const updatedEvents = [...Events];
						  updatedEvents[index].email = e.target.value;
						  setEvents(updatedEvents);
						}}
						className="p-2 border rounded w-full"
					  />
					) : (
					  Event.email
					)}
				  </td>
				  <td>
					{editingIndex === index ? (
					  <input
						type="text"
						value={Event.price}
						onChange={(e) => {
						  const updatedEvents = [...Events];
						  updatedEvents[index].price = e.target.value;
						  setEvents(updatedEvents);
						}}
						className="p-2 border rounded w-full"
					  />
					) : (
					  Event.price
					)}
				  </td>
				  <td>
					{editingIndex === index ? (
					  <button
						className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
						onClick={() => saveEvent(index)}
					  >
						Save
					  </button>
					) : (
					  <div>
						<button
						  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
						  onClick={() => deleteEvent(index)}
						>
						  Delete
						</button>
						<button
						  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-2"
						  onClick={() => updateEvent(index)}
						>
						  Update
						</button>
					  </div>
					)}
				  </td>
				</tr>
			  ))}
			</tbody>
		  </table>
		</div>
	  </div>
	);
}
