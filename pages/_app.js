import '../styles/globals.css'
import '../configAmplify'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <div className='grid grid-rows-[100px_1fr] h-screen'>
      <Navbar />
      <div className='bg-gray-200'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}
