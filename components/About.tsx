import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="flex flex-col relative h-screen text-center md-text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 tracking-[15px] text-white/60 text-2xl">ABOUT</h3>
    </div>
  )
}

export default About