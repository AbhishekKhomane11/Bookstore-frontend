import React from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';

function Signup() {
  const location=useLocation()
  const navigate=useNavigate()
  const from=location.state?.from?.pathname || "/"
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password, // Corrected to lowercase 'password'
    };
  
    try {
      const res = await axios.post('http://localhost:4001/user/signup', userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success("Signup successfully");
        navigate(from,{replace:true});
      }
      // Store user info as JSON in localStorage
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    }
  };
  

  return (
    <>
      <div className='flex h-screen justify-center items-center'>
        <div className='w-[600px]'>
          <div className='mt-4 space-y-4 modal-box'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Link to='/' className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                ✕
              </Link>
              <h3 className='font-bold text-lg'>Signup</h3>
              <div>
                <span>Name</span>
                <br />
                <input
                  type='text'
                  placeholder='Enter your Name'
                  className='w-80 px-3 border rounded-md outline-none'
                  {...register('fullname', { required: true })}
                />
                <br />
                {errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              <div>
                <span>Email</span>
                <br />
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='w-80 px-3 border rounded-md outline-none'
                  {...register('email', { required: true })}
                />
                <br />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              <div>
                <span>Password</span>
                <br />
                <input
                  type='password'
                  placeholder='Enter your Password'
                  className='w-80 px-3 border rounded-md outline-none'
                  {...register('password', { required: true })} // Changed 'Password' to 'password'
                />
                <br />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
              </div>
              <div className='flex justify-around mt-4 space-y-4'>
                <button className='bg-orange-500 text-white rounded-md px-3 py-1 hover:bg-orange-700'>
                  Sign up
                </button>
                <p>
                  Already have an account?
                  <button
                    className='underline text-blue-500 cursor-pointer'
                    onClick={() => document.getElementById('my_modal_5').showModal()}
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;






