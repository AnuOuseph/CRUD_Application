import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
        <div className="text-center">
            <h1 className="mb-4 text-6xl font-medium text-red-700">404</h1>
            <p className="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
            <div className="animate-bounce">
                <svg className="mx-auto h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
            </div>
            <Link to='/'>
                <button className='border rounded border-black py-1 px-4 font-medium'>Go to Home</button>
            </Link>
        </div>
    </div>  
  )
}

export default NotFound
