import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { TfiWrite } from 'react-icons/tfi';

const SideBar = () => {
    return (
        <aside class="w-11/12" aria-label="Sidebar">
            <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul class="space-y-2">
                    <li>
                        <Link class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="text-2xl  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"> <AiOutlinePlus /> </span>
                            <span class="ml-3">Create Post</span>
                        </Link>
                    </li>
                    <li>
                        <Link class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="text-2xl  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"> <BiMessageSquareDetail /> </span>
                            <span class="ml-3">All Posts</span>
                        </Link>
                    </li>
                    <li>
                        <Link class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <span class="text-2xl  text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"> <TfiWrite/> </span>
                            <span class="ml-3">My Posts</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>

    );
};

export default SideBar;