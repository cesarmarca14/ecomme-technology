import React from 'react';

export const CardBlog = ( {blog} )=> {
    return <div className='h-full w-[400px] m-2 flex-shrink-0 cursor-pointer '>
        <div className='rounded-2xl overflow-hidden mb-4 relative h-[200px]'>
        <img className=' bg-cover  w-[200px] h-[100px] rounded-2xl' src={`/imgs/blogpost${blog.id}.jpg`} alt={blog.title} />


        </div>
    </div>
};

