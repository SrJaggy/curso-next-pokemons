'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <>
    
<div className="w-full h-screen flex flex-col items-center justify-center">
  <svg
    className="w-1/2 md:w-1/3 lg:w-1/4 text-blue-600"
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 1119.60911 699"
  >
    <circle cx="292.60911" cy="213" r="213" fill="#f2f2f2" />

    <path
      d="M494,726.5c90,23,263-30,282-90"
      transform="translate(-31.39089 -100.5)"
      fill="none"
      stroke="#2f2e41"
      strokeMiterlimit="10"
      strokeWidth="2"
    />

    <path
      d="M341,359.5s130-36,138,80-107,149-17,172"
      transform="translate(-31.39089 -100.5)"
      fill="none"
      stroke="#2f2e41"
      strokeMiterlimit="10"
      strokeWidth="2"
    />

    {/* el resto del SVG */}
  </svg>
</div>


    <div className="flex flex-col items-center justify-center">
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8">500</p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">Server Error</p>
        <p className="md:text-lg xl:text-xl text-gray-500 mt-4">Whoops, something went wrong on our servers.</p>
    </div>

</>
  )
}