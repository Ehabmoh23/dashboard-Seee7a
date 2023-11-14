import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Controller, useForm } from 'react-hook-form';
import { useFormik } from 'formik';

export default function User() {


	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => { setShow(true) };
	const [hotels, setHotels] = useState([]);
	const [newHotel, setNewHotel] = useState({
		hotelName: '',
		phone: '',
		location: '',
		imageUrl: '',
	});

	const [allhotels, setallhotels] = useState([]);
	const [allAdminss, setallAdminss] = useState([]);
	const [singleHotel, setSingleHotel] = useState([]);

	//get all hotels
	async function getHotels() {
		let res = await axios.get("https://itigradiuation.onrender.com/getAllUsers", {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem("token")
			}
		})
		setallhotels(res.data.allUsers)
	}

	//get all admins

	async function getAdmins() {
		let res = await axios.get("https://itigradiuation.onrender.com/admin/all", {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem("token")
			}
		})
		setallAdminss(res.data.admins)
	}


	//get soft delete
	const [allhotelssoft, setallhotelssoft] = useState([]);

	async function getHotelssoft() {
		let res = await axios.get("https://itigradiuation.onrender.com/getAllUsersDeleted", {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem("token")
			}
		})
		setallhotelssoft(res.data.allUsersDeleted)
	}


	useEffect(() => {
		getHotels()
		getHotelssoft()
		getAdmins()
	}, [])


	//add hotel


	const [isLoading, setIsLoading] = useState(false);
	const [apiError, setApiError] = useState("");



	//delete hotel 
	function deleteHotels(id) {
		axios.delete(`https://itigradiuation.onrender.com/user/delete/${id}`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem("token")
			}
		})

			.then(response => {
				console.log(response);
			}).catch(error => {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log('Error', error.message);
				}
				console.log(error.config);
			});

	}
	// add admin

	function addAdmin(id) {
		axios.put(`https://itigradiuation.onrender.com/admin/add/${id}`, [], {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem("token")
			}
		})

			.then(response => {
				console.log(response);
			}).catch(error => {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log('Error', error.message);
				}
				console.log(error.config);
			});

	}

	function removeAdmin(id) {
		axios.put(`https://itigradiuation.onrender.com/admin/remove/${id}`, [], {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem("token")
			}
		})

			.then(response => {
				console.log(response);
			}).catch(error => {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log('Error', error.message);
				}
				console.log(error.config);
			});

	}
	//soft delete
	function softdeleteHotels(id) {
		axios.put(`https://itigradiuation.onrender.com/user/softDelete/${id}`)

			.then(response => {
				console.log(response);
			}).catch(error => {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log('Error', error.message);
				}
				console.log(error.config);
			});

	}

	//restore delete data

	function restoredeleteHotels(id) {
		axios.put(`https://itigradiuation.onrender.com/user/unDeleteUser/${id}`)

			.then(response => {
				console.log(response);
			}).catch(error => {
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log('Error', error.message);
				}
				console.log(error.config);
			});

	}


	//update hotel
	const [isLoadingupdate, setIsLoadingupdate] = useState(false);
	const [apiErrorupdate, setApiErrorupdate] = useState("");



	useEffect(() => {
		getAdmins()
		getHotels();
		getHotelssoft();

		if (getAdmins.length) getAdmins();

		if (getHotels.length) getHotels();
		if (getHotelssoft.length) getHotelssoft();
	}, [getHotels, getHotelssoft, getAdmins]);

	//start desgin
	return (
		<div className="p-4 bg-gray-100">

			<h1 className="text-2xl font-bold mb-4">all admin</h1>

			<div className="overflow-x-auto">

				<table className="min-w-full bg-white rounded-lg">
					<thead>
						<tr>
							<th className="px-4 py-2">Name</th>
							<th className="px-4 py-2">phone</th>
							<th className="px-4 py-2">adress</th>
							<th className="px-4 py-2">email</th>
							<th className="px-4 py-2">Actions</th>
						</tr>
					</thead>
					<tbody>
						{allAdminss.map((hotel, index) => (
							<tr key={index}>
								<td>
									{hotel.userName}
								</td>
								<td>
									{hotel.phone}
								</td>

								<td>{hotel.address}</td>
								<td>
									{hotel.email}
								</td>
								<td>
									<div>
										<button
											className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
											onClick={() => deleteHotels(hotel._id)}
										>
											Delete
										</button>
										<button
											className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-2"
											onClick={() => softdeleteHotels(hotel._id)}
										>
											Trach
										</button>

									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<hr />
			<h1 className="text-2xl font-bold mb-4">all users</h1>

			<div className="overflow-x-auto">

				<table className="min-w-full bg-white rounded-lg">
					<thead>
						<tr>
							<th className="px-4 py-2">Name</th>
							<th className="px-4 py-2">phone</th>
							<th className="px-4 py-2">adress</th>
							<th className="px-4 py-2">email</th>
							<th className="px-4 py-2">Actions</th>
						</tr>
					</thead>
					<tbody>
						{allhotels.map((hotel, index) => (
							<tr key={index}>
								<td>
									{hotel.userName}
								</td>
								<td>
									{hotel.phone}
								</td>

								<td>{hotel.address}</td>
								<td>
									{hotel.email}
								</td>
								<td>
									<div>
										<button
											className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
											onClick={() => deleteHotels(hotel._id)}
										>
											Delete
										</button>
										<button
											className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-2"
											onClick={() => softdeleteHotels(hotel._id)}
										>
											Trach
										</button>
										
										{
											
											hotel.role == "user" ? (
												<button
													className="bg-green-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-2"
													onClick={() => addAdmin(hotel._id)}
												>
													Make Admin
												</button>
											) : (
												<></>
											)
										}


										

										{
											
											hotel.role == "user" ? (
												<button
											className="bg-yellow-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-2"
											onClick={() => removeAdmin(hotel._id)}
										>
											Remove Admin
										</button>
											) : (
												<></>
											)
										}

									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<h1 className='trc'>Trashed</h1>

			<div className="overflow-x-auto">
				<table class="table">
					<thead class="thead-dark">
						<tr>
							<th scope="col">Name</th>
							<th scope="col">phone</th>
							<th scope="col">Address</th>
							<th scope="col">Location</th>
							<th scope="col">email</th>
							<th scope="col">Actions</th>

						</tr>
					</thead>
					<tbody>
						{
							allhotelssoft.map((hotell, index) => (
								<tr>
									<td>{hotell.userName}</td>
									<td>{hotell.phone}</td>
									<td>{hotell.address}</td>
									<td>{hotell.email}</td>
									<td>
										<button
											className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-2" onClick={() => restoredeleteHotels(hotell._id)}
										>
											Restore
										</button>
									</td>
								</tr>
							))}
					</tbody>
				</table>


			</div>
		</div>
	);
}
