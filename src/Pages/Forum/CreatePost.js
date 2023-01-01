import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import Loader from '../../Components/Loader';
import { AuthContext } from '../../Contexts/AuthProvider';

const CreatePost = () => {
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    // date things
    let d = new Date();
    const postDate = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()}`;

    const handleCreatePost = (data) => {
        setLoading(true);
        const image = data.postImg[0];
        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=ee207df4d4ece17d8fc4767557525c84`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                const newPost = {
                    authorName: user.displayName,
                    authorImg: user.photoURL,
                    authorEmail: user.email,
                    postImg: imgData.data.url,
                    postTitle: data.title,
                    postCategory: data.category,
                    postBody: data.postBody,
                    postDate: postDate,
                    likes: 0
                }
                fetch(`https://e-travel-server.vercel.app/posts`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newPost)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            console.log(data);
                            setLoading(false);
                            toast.success('Successfully published')
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        setLoading(false)
                        toast.error(err.message)
                    })
            })
            .catch(error => {
                console.error(error)
            })
        setLoading(false);
    }

    // categories districts
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`https://e-travel-server.vercel.app/categories`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading || loading) {
        return <Loader />
    }
    return (
        <div>
            <h2 className='my-2 text-xl font-semibold'>Create a post</h2>
            <form onSubmit={handleSubmit(handleCreatePost)}>
                <div className='form-control mb-2'>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input {...register('title', {
                        required: "Title is required"
                    })} type="text" id="title" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    {errors.title && <p className='text-red-500'><small>{errors.title.message}</small></p>}
                </div>
                <div className='form-control mb-2'>
                    {/* <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                    <input {...register('category', {
                        required: "Area is required"
                    })} type="text" id="category" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    {errors.category && <p className='text-red-500'><small>{errors.category.message}</small></p>} */}
                    <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select {...register('category', {
                        required: "Select an item"
                    })} id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            categories.map(category => <option className='uppercase'
                                key={category._id}
                            >{category.title}</option>)
                        }
                    </select>
                    {errors.category && <p className='text-red-500'><small>{errors.category.message}</small></p>}
                </div>
                <div className='form-control mb-2'>
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input {...register('postBody', {
                        required: "Description is requried"
                    })} type="text" id="title" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    {errors.postBody && <p className='text-red-500'><small>{errors.postBody.message}</small></p>}
                </div>
                <h3 className='mb-2 text-sm font-medium'>Image</h3>
                <div className="flex items-center justify-center w-full">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input {...register('postImg', {
                            required: "Image is required"
                        })} id="dropzone-file" type="file" className="hidden" />
                    </label>
                    {errors.postImg && <p className='text-red-500'><small>{errors.postImg.message}</small></p>}
                </div>
                <button type="submit" className="mt-3 px-8 py-3 font-semibold rounded-full bg-blue-300 dark:text-gray-800">Publish</button>
            </form>
        </div>
    );
};

export default CreatePost;