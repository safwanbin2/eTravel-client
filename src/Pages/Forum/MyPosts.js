import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loader from '../../Components/Loader';
import { AuthContext } from '../../Contexts/AuthProvider';
import SinglePost from './SinglePost';

const MyPosts = () => {
    const { user } = useContext(AuthContext);
    const { data: posts, isLoading } = useQuery({
        queryKey: ['posts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/posts/${user?.email}`)
            const data = await res.json()
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

export default MyPosts;