import React, { Component } from 'react'

export default class SeriesNumber extends Component {
  render() {
    return (
      <div className='flex flex-col items-start z-10'>
        <span className='lg:font-semibold uppercase lg:text-xl leading-none'>series number:</span>
        <span className='lowercase tracking-wide lg:text-xl 2xl:text-3xl'>1 of 24</span>
      </div>
    )
  }
}
