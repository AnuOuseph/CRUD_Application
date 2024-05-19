import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AppRouter from './routes/AppRouter'
import './App.css'

function App() {
  return (
    <>
      <Toaster
        position="top-center" reverseOrder={false}
        toastOptions={{
          className: 'text-sm',
          style: { border: '1px solid #5c33bd' },
        }} />
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}
export default App
