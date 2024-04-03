import Image from 'next/image'
import React from 'react'
import Revenue from '../../components/revenu'
import Workers from '../../components/workers'
import MainAbout from '../../components/mainabout'

function About() {
  return (
    <div>
      <MainAbout />
      <Revenue />
      <Workers />
    </div>
  )
}

export default About