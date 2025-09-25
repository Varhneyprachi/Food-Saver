import React, { useContext, useState } from 'react';
import logo from '../../assets/Pulse.png'
import Lottie from 'lottie-react';
import loginLottie from '../../assets/loginlottie.json' 
import AuthContext from '../../Context/AuthContext';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';
const Register = () => {
    const { setUser, updateUser, createUser, googleSingIn, setLoading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    // Handle Register
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const {email, password, name, photoUrl } = Object.fromEntries(formData.entries());
        const userInfo = { 
            displayName: name,
            photoURL: photoUrl,
        };

    // Password Validation
    const lowercase = /(?=.*[a-z])/;
    const uppercase = /(?=.*[A-Z])/;
    const digit = /(?=.*\d)/;
    const length = /.{6,}/;
    if (!lowercase.test(password)) {
      setErrorMessage("Must have a Lowercase letter in the password ");
      return;
    } else if (!uppercase.test(password)) {
      setErrorMessage("Must have a Uppercase letter in the password ");
      return;
    } else if (!digit.test(password)) {
      setErrorMessage("Must have a Digit in the password ");
      return;
    } else if (!length.test(password)) {
      setErrorMessage("Length must be at least 6 character");
      return;
    } else {
      setErrorMessage("");
    }
        
        // Create User
        createUser(email, password)
        .then(result => {
            const user = result.user;
            updateUser(userInfo)
            .then(() => {
                setUser({...user, displayName: name, photoURL: photoUrl, });
                setLoading(false);
                navigate(`${location.state ? location.state : '/'}`)
                Swal.fire({
                icon: "success",
                title: "Register Successful!",
                showConfirmButton: false,
                timer: 1500
                });                
            })
            .catch(() => {
                setUser(user)
                setLoading(false)
            })
        })
        .catch(error => {
            setLoading(false)
            toast.error(error.message)
        })
    }

    // Handle Google
    const handleGoogleSingIn = () => {
        googleSingIn()
        .then(result => {
            setUser(result.user);
            setLoading(false)
            navigate(`${location.state ? location.state : '/'}`)
            Swal.fire({
            icon: "success",
            title: "Sing In Successful!",
            showConfirmButton: false,
            timer: 1500
            });
        })
        .catch(error => {
            setLoading(false)
           toast.error(error.message)
        })
    }


    return (
        <div className='bg-[#f4f1ea] py-20'>
            <div className='grid grid-cols-12 items-center gap-6 lg:flex-row justify-between max-w-[1264px] mx-auto bg-white p-5 md:p-10 rounded-3xl'>

                {/* Form */}
                <div className='col-span-12 lg:col-span-7 flex justify-center'>
                    <div className="w-full max-w-full md:px-10 px-5 py-12 space-y-3 rounded-3xl bg-[#f4f1ea]" bis_skin_checked="1">
                        <img src={logo} 
                        alt="logo"
                        className='w-40 mx-auto'
                        />
                        <div className='my-10 space-y-3'>
                            <h1 className="text-4xl font-extrabold text-center">Register Now!</h1>
                            <p className='text-center font-medium'>Please Enter Your Details</p>
                        </div>
                        <form onSubmit={handleRegister} className="space-y-6">

                            {/* Name */}
                            <div className="space-y-1 text-sm" bis_skin_checked="1">
                                <input type="text" name="name" id="name" placeholder="Name" 
                                required
                                className="input w-full px-4 py-6 rounded-md" />
                            </div>
        

                            {/* Photo */}
                            <div className="space-y-1 text-sm" bis_skin_checked="1">
                                <input type="url" name="photoUrl" id="photoUrl" placeholder="PhotoURL"
                                required
                                className="input w-full px-4 py-6 rounded-md" />
                            </div>

                            {/* Email */}
                            <div className="space-y-1 text-sm" bis_skin_checked="1">
                                <input type="email" name="email" id="email" placeholder="@Email"
                                required
                                className="input w-full px-4 py-6 rounded-md" />
                            </div>

                            {/* Password */}
                            <div className="space-y-1 text-sm" bis_skin_checked="1">
                                <input type="password" name="password" id="password" placeholder="Password" 
                                required
                                className="input w-full px-4 py-6 rounded-md" />
                                <p className="text-sm text-red-600">{errorMessage}</p>
                            </div>
                            <button type='submit' className="w-full py-6 text-center rounded-sm btn btn-primary ">Register</button>
                        </form>
                        <div className='mt-4 mb-10'>
                            {/* Google */}
                            <button onClick={handleGoogleSingIn} className="btn bg-white text-black border-[#e5e5e5] w-full py-6">
                            <svg aria-label="Google logo" width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Sing In with Google
                            </button>
                        </div>
                        <p className="text-base text-center sm:px-6 ">Already have an account?
                            <a rel="noopener noreferrer" href="/login" className="underline text-primary font-bold">Login</a>
                        </p>
                    </div>
                </div>

                <div className='col-span-12 lg:col-span-5 flex items-center justify-center'>
                    <Lottie 
                    animationData={loginLottie}
                    style={{width: '600px'}}
                    ></Lottie>
                </div>

            </div>
        </div>
    );
};

export default Register;