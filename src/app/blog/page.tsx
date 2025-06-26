"use client"
import * as motion from 'motion/react-client';
// import * as framer from 'framer-motion';
import { ButtonExel } from '@/components/ButtonExel';





const Blog = () => {
    return (
        <div className='flex justify-center items-center h-screen flex-col space-y-4'
      
        >
        <motion.h1 className="font-bold text-primary"
        
        >Blog</motion.h1>
        <p className="text-gray-600">Welcome to the blog page!</p>
        <ButtonExel

            text="Click Me"
            size="lg"
            className="mt-4"
            onClick={() => alert('Button Clicked!')}
        />
        </div>
    );
}

export default Blog;