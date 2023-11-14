import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  function login(values) {
    setIsLoading(true);
    axios.post(`https://itigradiuation.onrender.com/user/login`, values)
      .then((data) => {
        if (data.data.message === "Welcome") {
          setIsLoading(false);
          localStorage.setItem("token", data.data.token);
          navigate("/hotels");
        }
      })
      .catch((err) => {
        setApiError(err.response.data.message);
        setIsLoading(false);
      });
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login(values);
    }
  });

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='max-w-md w-full mx-auto p-8 bg-white rounded-md shadow-md'>
        <h3 className='text-3xl mb-4 text-center text-indigo-700 font-extrabold'>
          🌟Dashboard Login 🌟
        </h3>
        {apiError ? <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded'>
          {apiError}
        </div> : null}
        <form onSubmit={formik.handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor="userEmail" className='block text-sm font-medium text-gray-700'>Email</label>
            <input
              type="text"
              id='userEmail'
              className='mt-1 p-2 w-full border rounded-md bg-gray-200 text-gray-700'
              onBlur={formik.handleBlur}
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email ? <div className='text-red-600 mt-1'>
              {formik.errors.email}
            </div> : null}
          </div>

          <div>
            <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
            <input
              type="password"
              id='password'
              className='mt-1 p-2 w-full border rounded-md bg-gray-200 text-gray-700'
              onBlur={formik.handleBlur}
              name='password'
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password ? <div className='text-red-600 mt-1'>
              {formik.errors.password}
            </div> : null}
          </div>

          <button
            type="submit"
            className='bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out'
            disabled={isLoading}
          >
            {isLoading ? <i className="fa fa-spin fa-spinner"></i> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
