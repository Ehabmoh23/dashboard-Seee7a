
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useContext, useState } from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';
export default function Loginn() {
    let navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState("");
   // let{setToken} = useContext(tokenContext);
  
    function login(values) {
  
      setIsLoading(true)
      axios.post(`https://itigradiuation.onrender.com/user/login`, values).then((data) => {
  console.log(data)
        if (data.data.message == "Welcome") {
          
          setIsLoading(false)
          localStorage.setItem("token",data.data.token)
       
          navigate("/hotels")
        }
      }).catch((err) => {
        console.log(err)
        setApiError(err.response.data.message)
        setIsLoading(false)
      })
    }
  
  
    const validationSchema = Yup.object({
      
      email: Yup.string().email("Invalid Email").required("Email IS Required"),
     // password: Yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/, "Password Should Start With Captal").required("Password IS Required"),
     
    })
  
    let formik = useFormik({
      initialValues: {
       
        email: "",
        password: "",
       
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
      login(values)
      }
    });
  return (
    <>
    <div className='w-50 max-auto my-5 container'>
    <h3 className='text-center'>Login</h3>
    {apiError?<div className='alert alert-danger'>{apiError}</div>:""}
    <form onSubmit={formik.handleSubmit}>
   
      <div className="form-group mb-3">
        <label htmlFor="userEmail">userEmail</label>
        <input type="text" id='userEmail' className='form-control' onBlur={formik.handleBlur} name='email' value={formik.values.email} onChange={formik.handleChange} />
        {formik.errors.email && formik.touched.email ? <div className='alert alert-danger'>
          {formik.errors.email}
        </div> : ""}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password">Password</label>
        <input type="password" id='password' className='form-control' onBlur={formik.handleBlur} name='password' value={formik.values.password} onChange={formik.handleChange} />
        {formik.errors.password && formik.touched.password ? <div className='alert alert-danger'>
          {formik.errors.password}
        </div> : ""}
      </div>
    
   

  <button type="submit" className="btn btn-default-outline d-block my-4 mx-auto ">
      {isLoading ? <i className="fa fa-spin fa-spinner"></i> : <><i className="fa fa-edit"></i>Login </>} 
    
    </button>


    </form>
  </div>



</>
  )
}






