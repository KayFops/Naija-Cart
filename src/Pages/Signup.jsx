import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInOutText from '../Components/SignInOutText';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        try {
            // Check if passwords match
            if (formData.password !== formData.confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Get existing users from localStorage
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Check if email already exists
            if (users.some(user => user.email === formData.email)) {
                alert('Email already registered!');
                return;
            }

            // Create new user object
            const newUser = {
                name: formData.name,
                email: formData.email,
                password: formData.password
            };

            // Add new user to users array
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            // Save current user in localStorage
            localStorage.setItem('currentUser', JSON.stringify(newUser));
            
            console.log('Sign up successful:', newUser);
            navigate('/dashboard');
        } catch (error) {
            console.error('Sign up error:', error);
            alert('An error occurred during sign up');
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
                <div className="hidden md:block">
                    <SignInOutText/>
                </div>
                <div className="max-w-md w-full space-y-8 mx-auto">
                    <div className="">
                        <h2 className="text-3xl font-bold text-gray-900">
                            Create your account!
                        </h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Already have an account?{' '}
                            <Link to="/signin" className="font-medium text-green-600 hover:text-green-500">
                                Sign In
                            </Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                                <input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Sign Up
                            </button>
                            
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-gray-50 text-gray-500">Or</span>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                <span className="flex items-center">
                                    <img className="h-5 w-5 mr-2" src="https://www.google.com/favicon.ico" alt="Google" />
                                    Continue with Google
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;