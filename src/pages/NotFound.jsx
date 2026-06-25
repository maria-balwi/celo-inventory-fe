import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center h-screen text-center p-2'>
            <motion.h1
                className='text-6xl font-bold text-white-800'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                404
            </motion.h1>
            <motion.p
                className='text-lg text-white-600 mt-4'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.2 } }}
            >
                Oops! The page you are looking for does not exist.
            </motion.p>
            <motion.div
                className='mt-6'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
            >
                <Link to='/' className='px-4 py-2 text-white bg-gray-500 rounded-lg shadow-md hover:bg-white-600'>
                    Go Home
                </Link>
            </motion.div>
        </div>
    );
}