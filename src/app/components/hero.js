import React from 'react'

function Hero() {
  return (
    <div className="w-full bg-blue-100 py-15 px-8 border-b border-gray-300">
      {/* Image */}
      <img 
        src="/download.jpeg" 
        alt="background" 
        className="w-full max-h-96 object-cover rounded-lg shadow-lg mb-6"
      />

      {/* Text */}
      <div className="max-w-4xl mx-auto flex justify-center">
        <div>
          Maxing our GPA, One Class at a Time
        </div>
      </div>
    </div>
  )
}

export default Hero
