import React, { useState } from 'react';

export default function Activities() {
	const [Activities, setActivities] = useState([]);
	const [newActivitie, setNewActivitie] = useState({
	  name: '',
	  phone: '',
	  location: '',
	  imageUrl: '',
		price :''

	});
  
	const [editingIndex, setEditingIndex] = useState(-1);
  
	const addActivitie = () => {
	  if (!newActivitie.name || !newActivitie.phone || !newActivitie.location || !newActivitie.email ) {
		return;
	  }
  
	  setActivities([...Activities, newActivitie]);
	  setNewActivitie({
		name: '',
		email :'',
		phone: '',
		location: '',
		imageUrl: '',
		price :''
	  });
	};
  
	const deleteActivitie = (index) => {
	  const updatedActivities = [...Activities];
	  updatedActivities.splice(index, 1);
	  setActivities(updatedActivities);
	};
  
	const updateActivitie = (index) => {
	  setEditingIndex(index);
	};
  
	const saveActivitie = (index) => {
	  if (!Activities[index].name || !Activities[index].phone || !Activities[index].price || !Activities[index].location ||!Activities[index].email ) {
		return;
	  }
  
	  setEditingIndex(-1);
	};
  
	return (
	  <div className="p-4 bg-gray-100">
		<h1 className="text-2xl font-bold mb-4">Activities</h1>
		<div className="mb-4">
		  <input
			type="text"
			placeholder="Name"
			value={newActivitie.name}
			onChange={(e) => setNewActivitie({ ...newActivitie, name: e.target.value })}
			className="p-2 border rounded w-full"
		  />
		  <input
			type="text"
			placeholder="phone"
			value={newActivitie.phone}
			onChange={(e) => setNewActivitie({ ...newActivitie, phone: e.target.value })}
			className="p-2 border rounded w-full mt-2"
		  />
		    <input
			type="number"
			placeholder="price"
			value={newActivitie.price}
			onChange={(e) => setNewActivitie({ ...newActivitie, price: e.target.value })}
			className="p-2 border rounded w-full mt-2"
		  />
		  <input
			type="text"
			placeholder="Location"
			value={newActivitie.location}
			onChange={(e) => setNewActivitie({ ...newActivitie, location: e.target.value })}
			className="p-2 border rounded w-full mt-2"
		  />
		    <input
			type="text"
			placeholder="email"
			value={newActivitie.email}
			onChange={(e) => setNewActivitie({ ...newActivitie, email: e.target.value })}
			className="p-2 border rounded w-full mt-2"
		  />
		  <input
			type="text"
			placeholder="Image URL"
			value={newActivitie.imageUrl}
			onChange={(e) => setNewActivitie({ ...newActivitie, imageUrl: e.target.value })}
			className="p-2 border rounded w-full mt-2"
		  />
		  <button
			className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-2 w-full"
			onClick={addActivitie}
		  >
			Add New Activitie
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
			  {Activities.map((Activitie, index) => (
				<tr key={index}>
				  <td>
					{editingIndex === index ? (
					  <input
						type="text"
						value={Activitie.imageUrl}
						onChange={(e) => {
						  const updatedActivities = [...Activities];
						  updatedActivities[index].imageUrl = e.target.value;
						  setActivities(updatedActivities);
						}}
						className="p-2 border rounded w-full"
					  />
					) : (
					  <img src={Activitie.imageUrl} alt={Activitie.name} className="h-16 w-16 rounded-circle object-cover" />
					)}
				  </td>
				  <td>
					{editingIndex === index ? (
					  <input
						type="text"
						value={Activitie.name}
						onChange={(e) => {
						  const updatedActivities = [...Activities];
						  updatedActivities[index].name = e.target.value;
						  setActivities(updatedActivities);
						}}
						className="p-2 border rounded w-full"
					  />
					) : (
					  Activitie.name
					)}
				  </td>
				  <td>
					{editingIndex === index ? (
					  <input
						type="text"
						value={Activitie.phone}
						onChange={(e) => {
						  const updatedActivities = [...Activities];
						  updatedActivities[index].phone = e.target.value;
						  setActivities(updatedActivities);
						}}
						className="p-2 border rounded w-full"
					  />
					) : (
					  Activitie.phone
					)}
				  </td>
				  <td>
					{editingIndex === index ? (
					  <input
						type="text"
						value={Activitie.location}
						onChange={(e) => {
						  const updatedActivities = [...Activities];
						  updatedActivities[index].location = e.target.value;
						  setActivities(updatedActivities);
						}}
						className="p-2 border rounded w-full"
					  />
					) : (
					  Activitie.location
					)}
				  </td>
				  <td>
					{editingIndex === index ? (
					  <input
						type="text"
						value={Activitie.email}
						onChange={(e) => {
						  const updatedActivities = [...Activities];
						  updatedActivities[index].email = e.target.value;
						  setActivities(updatedActivities);
						}}
						className="p-2 border rounded w-full"
					  />
					) : (
					  Activitie.email
					)}
				  </td>
				  <td>
					{editingIndex === index ? (
					  <input
						type="text"
						value={Activitie.price}
						onChange={(e) => {
						  const updatedActivities = [...Activities];
						  updatedActivities[index].price = e.target.value;
						  setActivities(updatedActivities);
						}}
						className="p-2 border rounded w-full"
					  />
					) : (
					  Activitie.price
					)}
				  </td>
				  <td>
					{editingIndex === index ? (
					  <button
						className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
						onClick={() => saveActivitie(index)}
					  >
						Save
					  </button>
					) : (
					  <div>
						<button
						  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
						  onClick={() => deleteActivitie(index)}
						>
						  Delete
						</button>
						<button
						  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-2"
						  onClick={() => updateActivitie(index)}
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

