import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password, // Corrected to lowercase 'password'
    };

    try {
      const res = await axios.post('https://bookstore-backend-1-2snc.onrender.com/user/login', userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success("Logged in Successfully");
        document.getElementById("my_modal_5").close()
        setTimeout(() => {
          
          window.location.reload();
          // Store user info as JSON in localStorage
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }, 1000);
       
      }

    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
        setTimeout(() => {}, 2000)
      }
    }
  };
  
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">

        <div className="modal-box mt-4 space-y-4 p-10">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
              onClick={() => document.getElementById("my_modal_5").closest()}>✕
            </Link>


            <h3 className="font-bold text-lg dark:text-black">Login</h3>
            <div className="mt-4 space-y-2 dark:text-black">
              <span>Email</span>
              <br />
              <input type="email" placeholder='Enter your email' className='w-80 px-3 border rounded-md outline-none'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-3 py-1 dark:text-black'>
              <span>Password</span>
              <br />
              <input type="Password" placeholder='Enter your Password' className='w-80 px-3 border rounded-md outline-none'{...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}

            </div>

            <div className='flex justify-around mt-4 space-y-4'>
              <button className='bg-orange-500 text-white  rounded-md px-3 py-1 hover:bg-orange-700'>Login</button>
              <p>
                Not registered?
                <Link to='/Signup' className='underline text-blue-500 cursor-pointer'>Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login