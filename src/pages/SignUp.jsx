import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register,
         handleSubmit,
         reset,
          formState: { errors } } = useForm();

    const onSubmit = (data) => { 
        console.log(data);
        localStorage.setItem("userData", JSON.stringify(data))
        reset()
    };

    return (
        <div className='w-full flex flex-col h-screen p-5 border-2 border-gray-400'>
            <div>
                <h1 className='text-4xl font-bold my-8'>
                    Create your PopX account
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-7'>
                    <div className='relative h-fit'>
                        <label
                            htmlFor="name"
                            className="absolute text-sm font-semibold bottom-8.5 left-3 bg-[#f7f8f9] px-2 text-[#6c25ff]"
                        >
                            Full Name <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Marry Doe"
                            autoComplete='off'
                            {...register('name', { required: 'Full Name is required' })}
                            className="peer w-full border-2 border-gray-300 rounded-md px-5 py-2 focus:border-[#6c25ff] focus:ring-0 outline-none placeholder:text-gray-400 placeholder:text-sm"
                        />
                        {errors.name && <p className='text-red-600 absolute right-0 text-sm'>{errors.name.message}</p>}
                    </div>

                    <div className='relative h-fit'>
                        <label
                            htmlFor="number"
                            className="absolute text-sm font-semibold bottom-8.5 left-3 bg-[#f7f8f9] px-2 text-[#6c25ff]"
                        >
                            Phone Number <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type="number"
                            id="number"
                            placeholder="1234567890"
                            autoComplete='off'
                            {...register('number', { required: 'Phone Number is required' })}
                            className="peer w-full border-2 border-gray-300 rounded-md px-5 py-2 focus:border-[#6c25ff] focus:ring-1 outline-none placeholder:text-gray-400 placeholder:text-sm"
                        />
                        {errors.number && <p className='text-red-600 absolute right-0 text-sm'>{errors.number.message}</p>}
                    </div>

                    <div className='relative h-fit'>
                        <label
                            htmlFor="email"
                            className="absolute text-sm font-semibold bottom-8.5 left-3 bg-[#f7f8f9] px-2 text-[#6c25ff]"
                        >
                            Email Address <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@example.com"
                            autoComplete='off'
                            {...register('email', { required: 'Email Address is required' })}
                            className="peer w-full border-2 border-gray-300 rounded-md px-5 py-2 focus:border-[#6c25ff] focus:ring-1 outline-none placeholder:text-gray-400 placeholder:text-sm"
                        />
                        {errors.email && <p className='text-red-600 absolute right-0 text-sm'>{errors.email.message}</p>}
                    </div>

                    <div className='relative h-fit'>
                        <label
                            htmlFor="password"
                            className="absolute text-sm font-semibold bottom-8.5 left-3 bg-[#f7f8f9] px-2 text-[#6c25ff]"
                        >
                            Password <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="********"
                            autoComplete='off'
                            {...register('password', { required: 'Password is required' })}
                            className="peer w-full border-2 border-gray-300 rounded-md px-5 py-2 focus:border-[#6c25ff] focus:ring-1 outline-none placeholder:text-gray-400 placeholder:text-sm"
                        />
                        {errors.password && <p className='text-red-600  absolute right-0 text-sm'>{errors.password.message}</p>}
                    </div>

                    <div className='relative h-fit'>
                        <label
                            htmlFor="company"
                            className="absolute text-sm font-semibold bottom-8.5 left-3 bg-[#f7f8f9] px-2 text-[#6c25ff]"
                        >
                            Company Name <span className='text-red-600'>*</span>
                        </label>
                        <input
                            type="text"
                            id="company"
                            placeholder="Company Name"
                            autoComplete='off'
                            {...register('company', { required: 'Company Name is required' })}
                            className="peer w-full border-2 border-gray-300 rounded-md px-5 py-2 focus:border-[#6c25ff] focus:ring-1 outline-none placeholder:text-gray-400 placeholder:text-sm"
                        />
                        {errors.company && <p className='text-red-600 absolute right-0 text-sm'>{errors.company.message}</p>}
                    </div>

                    <div className="w-64">
                        <label className="block text-sm font-medium text-gray-700">
                            Are you an Agency?<span className="text-red-500">*</span>
                        </label>

                        <div className="flex items-center mt-2">
                            <label className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    value="yes"
                                    defaultChecked
                                    {...register('agency', { required: 'Please select an option' })}
                                    className="h-5 w-5"
                                />
                                <span className="text-gray-700 ml-3">Yes</span>
                            </label>

                            <label className="flex items-center cursor-pointer ml-6">
                                <input
                                    type="radio"
                                    value="no"
                                    {...register('agency', { required: 'Please select an option' })}
                                    className="h-5 w-5"
                                />
                                <span className="text-gray-700 ml-3">No</span>
                            </label>
                        </div>
                    </div>

                    <button type="submit" className='w-full bg-[#6c25ff] py-2.5 text-center text-white font-semibold rounded-md'>
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
