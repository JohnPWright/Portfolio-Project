import React from 'react'

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <div>
      <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
        {title}
      </h1>
    </div>
  )
}

export default Header