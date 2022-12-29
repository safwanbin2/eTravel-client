import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePost from './SinglePost';

const CategoryPosts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            {
                posts.length ? posts.map(post => <SinglePost
                    key={post._id}
                    post={post}
                ></SinglePost>)
                : <h2 className='text-xl font-medium'>No posts found: </h2>
            }
        </div>
    );
};

export default CategoryPosts;