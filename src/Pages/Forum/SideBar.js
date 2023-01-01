import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { TfiWrite } from 'react-icons/tfi';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Components/Loader';

const SideBar = () => {
    const { data: categories, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`https://e-travel-server.vercel.app/categories`);
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loader/>
    }
    return (
        <aside className="w-11/12" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul className="space-y-2">
                    <li>
                        <Link to='/forum/createpost' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="text-2xl  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"> <AiOutlinePlus /> </span>
                            <span className="ml-3">Create Post</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/forum' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="text-2xl  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"> <BiMessageSquareDetail /> </span>
                            <span className="ml-3">All Posts</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/forum/myposts' className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span className="text-2xl  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"> <TfiWrite /> </span>
                            <span className="ml-3">My Posts</span>
                        </Link>
                    </li>
                    <h2 className='text-xl p-2 font-semibold'>Continents:</h2>
                    {
                        categories.map(category => <li
                            key={category._id}
                        ><Link to={`/forum/category/${category.title}`} className='p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 uppercase flex items-center'>{category.title}</Link></li>)
                    }
                </ul>
            </div>
        </aside>

    );
};

export default SideBar;