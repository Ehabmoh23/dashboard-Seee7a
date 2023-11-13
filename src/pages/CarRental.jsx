import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Controller, useForm } from 'react-hook-form';
import { useFormik } from 'formik';

export default function CarRental() {
	
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

	const [allCars, setallCars] = useState([]);
	const [singleCar, setSingleCar] = useState([]);

	//get all hotels
	async function getCars() {
		let res = await axios.get("https://itigradiuation.onrender.com/getallCar", {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem("token")
			}
		})
		setallCars(res.data.allCar)
	}

	//get one hotel
	async function getSingleCar(id) {
		let res = await axios.get(`https://itigradiuation.onrender.com/getCar/${id}`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem("token")
			}
		})
		console.log(res.data.car)
		setSingleCar(res.data.car)
		formik.setValues(res.data.car)
	}


	//get soft delete
	const [allCarssoft, setallCarssoft] = useState([]);

	async function getCarsoft() {
		let res = await axios.get("https://itigradiuation.onrender.com/getSoftDeleteCar", {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + localStorage.getItem("token")
			}
		})
		setallCarssoft(res.data.getsoftdellcar)
	}


	useEffect(() => {
		getCars()
	getCarsoft()
	}, [])


	//add hotel

	const { control, handleSubmit,setValue, formState: { errors } } = useForm();
	const [isLoading, setIsLoading] = useState(false);
	const [apiError, setApiError] = useState("");

	function addCars(values) {
		setIsLoading(true)
		axios.post(`https://itigradiuation.onrender.com/addCar`, values, {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': 'Bearer ' + localStorage.getItem("token")
			}
		}

		).then((data) => {
			console.log(data)
			if (data.data.message == "Added Success") {
				setIsLoading(false)

			}
		}).catch((err) => {
			console.log(err.response.data.message)
			setApiError(err.response.data.message)
			setIsLoading(false)
		})
	}
	const onSubmit = (values) => {
		values.image = document.getElementById('image').files[0];
		addCars(values)
		console.log(values);
	};

	//delete hotel 
	function deleteCars(id) {
		axios.delete(`https://itigradiuation.onrender.com/deleteCar/${id}`, {
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
	function softdeleteCars(id) {
		axios.put(`https://itigradiuation.onrender.com/softdeleteCar/${id}`)

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

	function restoredeleteCars(id) {
		axios.put(`https://itigradiuation.onrender.com/unDeleteCar/${id}`)

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
	const [previewImage, setPreviewImage] = useState(null);
	const [editpreviewImage, seteditPreviewImage] = useState(null);
	const [isLoadingupdate, setIsLoadingupdate] = useState(false);
	const [apiErrorupdate, setApiErrorupdate] = useState("");

	async function updateCars(values) {
		values.image = document.getElementById(`editImage${values._id}`).files[0];
		if(values.image == undefined){
			values.image = null;
		}
		console.log(values)

		setIsLoadingupdate(true)
		let res = await axios.patch(`https://itigradiuation.onrender.com/updateCar/${values._id}`, values, {
			headers: {
				'Content-Type': 'multipart/form-data',
				'Authorization': 'Bearer ' + localStorage.getItem("token")
			}
		}

		)
		console.log(res)
	}





	// const validationSchema = Yup.object({
	// 	name: Yup.string().max(15, "Name Must be Less Than 15 Charcter").required("Name IS Required"),
	// 	email: Yup.string().email("Invalid Email").required("Email IS Required"),
	// 	password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/, "Password Should Start With Captal").required("Password IS Required"),
	// 	rePassword: Yup.string().oneOf([Yup.ref("password")]).required("rePassword IS Required"),
	// 	age: Yup.number().min(10, "Min Charcter Must Be 10").max(50, "Min Charcter Must Be 50").required("Age IS Required")
	//   })

	let formik = useFormik({
		initialValues: {
			carName: "",
			phone: "",
			address: "",
			location: "",
			email: "",
			image:null
		},

		onSubmit: (values) => {
			console.log(values);
			updateCars(values)
		}
	});

	useEffect(() => {
		getCars();
		getCarsoft();
		if (getCars.length) getCars();
		if (getCarsoft.length) getCarsoft();
	}, [getCars,getCarsoft]);

	// start design
	return (
		<div className="p-4 bg-gray-100">
			<h1 className="text-2xl font-bold mb-4">Car</h1>

			<form onSubmit={handleSubmit(onSubmit)} method="post" enctype="multipart/form-data">

				<div className="form-group mb-3">
					<label htmlFor="userName">Car Name:</label>
					<Controller

					

						name="carName"
						control={control}
						defaultValue=""
						rules={{ required: 'Car Name is required' }}
						render={({ field }) => <input {...field}
							onBlur={field.onBlur}
							type="text" id='carName'
							className={`form-control ${field.onBlur && errors.carName ? 'is-invalid' : ''}`}
						/>}
					/>
					{errors.carName && <p className='alert alert-danger'>{errors.carName.message}</p>}
				</div>


				<div>
					<label>image:</label>
					<Controller
        name="image"
        control={control}
        defaultValue={undefined}
        rules={{
          
        }}
        render={({ field, fieldState }) => (
          <div>
            <input
              {...field}
              onChange={(e) => {
                // Handle file change
                const selectedFile = e.target.files[0];
                console.log('Selected file:', selectedFile);

                // Update preview image
                if (selectedFile) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
					console.log(selectedFile)
                    setPreviewImage(reader.result);
					//setValue('image',selectedFile)
					
                  };
                  reader.readAsDataURL(selectedFile);
				  
                } else {
                  setPreviewImage(null);
                }
console.log(previewImage);
				 setValue('image',previewImage)

                // Perform additional actions as needed
                // You can also set the value in the form state using setValue
              }}
              onBlur={field.onBlur}
              type="file"
              id="image"
			
              className={`form-control ${field.onBlur && fieldState?.error ? 'is-invalid' : ''}`}
            />
            {fieldState?.error && <span style={{ color: 'red' }}>{fieldState.error.message}</span>}

            {/* Display preview image */}
            {previewImage && (
              <img
                src={previewImage}
                alt="Preview"
			
                style={{ marginTop: '10px', maxWidth: '100%', maxHeight: '200px' }}
              />
            )}
          </div>
        )}
      />
					{errors.image && <p className='alert alert-danger'>{errors.image.message}</p>}
				</div>

				<div>
					<label>Email:</label>
					<Controller
						name="email"
						control={control}
						defaultValue=""
						rules={{
							required: 'Email is required',
							pattern: {
								value: /^\S+@\S+$/i,
								message: 'Invalid email format',
							},
						}}
						render={({ field }) => <input {...field}
							onBlur={field.onBlur}
							type="email" id='email'
							className={`form-control ${field.onBlur && errors.email ? 'is-invalid' : ''}`}
						/>}
					/>
					{errors.email && <p className='alert alert-danger'>{errors.email.message}</p>}
				</div>

				<div>
					<label>Phone:</label>
					<Controller
						name="phone"
						control={control}
						defaultValue=""
						rules={{
							required: 'phone is required',

						}}
						render={({ field }) => <input  {...field}
							onBlur={field.onBlur}
							type="text" id='phone'
							className={`form-control ${field.onBlur && errors.phone ? 'is-invalid' : ''}`}
						/>}
					/>
					{errors.phone && <p className='alert alert-danger'>{errors.phone.message}</p>}
				</div>

				<div>
					<label>Address:</label>
					<Controller
						name="address"
						control={control}
						defaultValue=""
						rules={{
							required: 'address is required',

						}}
						render={({ field }) => <input  {...field}
							onBlur={field.onBlur}
							type="text" id='address'
							className={`form-control ${field.onBlur && errors.address ? 'is-invalid' : ''}`}

						/>}
					/>
					{errors.address && <p className='alert alert-danger'>{errors.address.message}</p>}
				</div>

				<div>
					<label>Location:</label>
					<Controller
						name="location"
						control={control}
						defaultValue=""
						rules={{
							required: 'location is required',

						}}
						render={({ field }) => <input {...field}
							onBlur={field.onBlur}
							type="text" id='location'
							className={`form-control ${field.onBlur && errors.location ? 'is-invalid' : ''}`}
						/>}
					/>
					{errors.location && <p className='alert alert-danger'>{errors.location.message}</p>}
				</div>

				<button type="submit" className="btn btn-success-outline d-block my-4 mx-auto ">
					{isLoading ? <i className="fa fa-spin fa-spinner"></i> : <><i className="fa fa-edit"></i>Add Car </>}
				</button>
			</form>
			<div className="overflow-x-auto">
				<table className="min-w-full bg-white rounded-lg">
					<thead>
						<tr>
						<th className="px-4 py-2">Image</th>
							<th className="px-4 py-2">Name</th>
							<th className="px-4 py-2">phone</th>
							<th className="px-4 py-2">adress</th>
							<th className="px-4 py-2">Location</th>
							<th className="px-4 py-2">email</th>
							<th className="px-4 py-2">Actions</th>
						</tr>
					</thead>
					<tbody>
						{allCars.map((hotel, index) => (
							<tr key={index}>
								<td>
									<img src={hotel.image} alt={hotel.hotelName} className="h-16 w-16 rounded-circle object-cover" />
								</td>
								<td>
									{hotel.carName}
								</td>
								<td>
									{hotel.phone}
								</td>

								<td>{hotel.address}</td>
								<td>
									{hotel.location}
								</td>
								<td>
									{hotel.email}
								</td>
								<td>
									<div>
										<button
											className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
											onClick={() => deleteCars(hotel._id)}
										>
											Delete
										</button>
										<button
											className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-2"
											onClick={() => softdeleteCars(hotel._id)}
										>
											Trach
										</button>


										{/* popup */}
										<div className='dv-mod'>
											<Button className='btn-upd'  variant="success" onClick={() => { handleShow(); getSingleCar(hotel._id) }}>
												Update
											</Button>

											<Modal show={show} onHide={handleClose}>
												<Modal.Header closeButton>
													<Modal.Title>Share User Id</Modal.Title>
												</Modal.Header>
												<Modal.Body>
													<form key={hotel._id} onSubmit={formik.handleSubmit}>
													<div className="form-group mb-3">
															<label htmlFor="userName">image</label>
			
															<input type="file" id={`editImage${hotel._id}`} className='form-control' onBlur={formik.handleBlur} name={`editImage${hotel._id}`} value={undefined} onChange={(e) => {formik.handleChange(e);
                // Handle file change
                const selectedFile = e.target.files[0];
                console.log('Selected file:', selectedFile);

                // Update preview image
                if (selectedFile) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
					console.log(selectedFile)
                    seteditPreviewImage(reader.result);
					//setValue('image',selectedFile)
					
                  };
                  reader.readAsDataURL(selectedFile);
				  
                } else {
                  seteditPreviewImage(null);
                }
console.log(editpreviewImage);
				//   setValue('image',editpreviewImage)
															 }} />
															 												{editpreviewImage ? (
              <img
                src={editpreviewImage}
                alt="Preview"
			
                style={{ marginTop: '10px', maxWidth: '100%', maxHeight: '200px' }}
              />
            ):(
				<img
				  src={hotel.image}
				  alt="Preview"
			  
				  style={{ marginTop: '10px', maxWidth: '100%', maxHeight: '200px' }}
				/>
			  )}
															{formik.errors.image && formik.touched.image ? <div className='alert alert-danger'>
																{formik.errors.image}
															</div> : ""}
														</div>
														<div className="form-group mb-3">
															<label htmlFor="carName">Name</label>
															<input type="text" id='carName' className='form-control' onBlur={formik.handleBlur} name='carName' value={formik.values.carName} onChange={formik.handleChange} />
															{formik.errors.carName && formik.touched.carName ? <div className='alert alert-danger'>
																{formik.errors.carName}
															</div> : ""}
														</div>
														
														<div className="form-group mb-3">
															<label htmlFor="password">Phone</label>
															<input type="text" id='phone' className='form-control' onBlur={formik.handleBlur} name='phone' value={formik.values.phone} onChange={formik.handleChange} />
															{formik.errors.phone && formik.touched.phone ? <div className='alert alert-danger'>
																{formik.errors.phone}
															</div> : ""}
														</div>

														<div className="form-group mb-3">
															<label htmlFor="rePassword">address</label>
															<input type="text" id='address' className='form-control' onBlur={formik.handleBlur} name='address' value={formik.values.address} onChange={formik.handleChange} />
															{formik.errors.address && formik.touched.address ? <div className='alert alert-danger'>
																{formik.errors.address}
															</div> : ""}
														</div>

														<div className="form-group mb-3">
															<label htmlFor="age">location</label>
															<input type="text" id='location' className='form-control' name='location' onBlur={formik.handleBlur} value={formik.values.location} onChange={formik.handleChange} />
															{formik.errors.location && formik.touched.location ? <div className='alert alert-danger'>
																{formik.errors.location}
															</div> : ""}
														</div>

														<div className="form-group mb-3">
															<label htmlFor="age">email</label>
															<input type="text" id='email' className='form-control' name='email' onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} />
															{formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>
																{formik.errors.email}
															</div> : ""}
														</div>

														<button type="submit" className="btn btn-default-outline d-block my-4 mx-auto rounded">
															{isLoading ? <i className="fa fa-spin fa-spinner"></i> : <><i className="fa fa-edit"></i>Update </>}

														</button>


													</form>
												</Modal.Body>
												<Modal.Footer>
													<Button variant="secondary" onClick={handleClose}>
														Close
													</Button>
													{/* You can add more buttons here */}
												</Modal.Footer>
											</Modal>
										</div>
										{/* end popup */}
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
							<th scope="col">Image</th>
							<th scope="col">Name</th>
							<th scope="col">phone</th>
							<th scope="col">Address</th>
							<th scope="col">Location</th>
							<th scope="col">email</th>
							<th scope="col">Actions</th>

						</tr>
					</thead>
					<tbody>

						{allCarssoft.map((hotell, index) => (
							<tr>
								<th scope="row">
									<img src={hotell.image} className="h-16 w-16 rounded-circle object-cover"/>
								</th>
								<td>{hotell.carName}</td>
								<td>{hotell.phone}</td>
								<td>{hotell.address}</td>
								<td>{hotell.location}</td>
								<td>{hotell.email}</td>
								<td>
									<button
										className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded ml-2" onClick={() => restoredeleteCars(hotell._id)}
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
