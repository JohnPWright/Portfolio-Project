import React from 'react'

type HeaderProps = {
  title: string;
  tagline?: string;
};

const Header = ({ title, tagline }: HeaderProps) => {
  return (
    <div>
      <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
        {title}
      </h1>
      <div className="hidden md:block text-gray-400">
        {tagline}
      </div>
    </div>
  )
}

export default Header