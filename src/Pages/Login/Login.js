import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { logIn, logInWithGoogle } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogIn = data => {
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Logged In')
                const newUser = {
                    email: data.email,
                    name: user.displayName
                }
                saveUser(newUser);
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message)
            })
    }

    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then(result => {
                const user = result.user;
                toast.success('Created & Logged In')
                const newUser = {
                    email: user.email,
                    name: user.name
                }
                saveUser(newUser);
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message)
            })
    }

    const saveUser = newUser => {
        fetch(`http://localhost:5000/users`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                getJWT(newUser.email)
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
            })
    }

    const getJWT = email => {
        if (email) {
            fetch(`http://localhost:5000/jwt/${email}`)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('eTravel-token', data.accessToken)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    return (
        <div className='min-h-screen'>
            <div className="w-full max-w-md mx-auto p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form onSubmit={handleSubmit(handleLogIn)} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label htmlFor="email" className="block text-gray-400">email</label>
                        <input {...register('email', {
                            required: "Email is required"
                        })} type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-blue-400" />
                        {errors.email && <p className='text-red-500'><small>{errors.email.message}</small></p>}
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block text-gray-400">Password</label>
                        <input {...register('password', {
                            required: "password is required"
                        })} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-blue-400" />
                        {errors.password && <p className='text-red-500'><small>{errors.password.message}</small></p>}
                        <div className="flex justify-end text-xs text-gray-400">
                            <button >Forgot Password?</button>
                        </div>
                    </div>
                    <button type='submit' className="block w-full p-3 text-center rounded-sm text-gray-900 bg-blue-400">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleLogIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-xs text-center sm:px-6 text-gray-400">Don't have an account?
                    <Link to='/signup' className="underline text-gray-100">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;