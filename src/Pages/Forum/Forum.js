import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Components/Loader';
import SinglePost from './SinglePost';

const Forum = () => {
    const { data: posts, isLoading } = useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const res = await fetch(`https://e-travel-server.vercel.app/posts`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div>
            {
                posts.map(post => <SinglePost
                    key={post._id}
                    post={post}
                ></SinglePost>)
            }
        </div>
    );
};

export default Forum;