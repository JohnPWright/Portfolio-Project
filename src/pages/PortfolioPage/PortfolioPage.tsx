import React from 'react'
import Header from '../../components/Header/Header'

const PortfolioPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-800">
        <div className="flex justify-center items-center">
          <div className="mt-10">
            <Header
              title="John Wright"
              tagline="Solar Service Technician | Aspiring Software Developer"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioPage