import React, { Component } from 'react'

export default class HighestBid extends Component {
  render() {
    return (
      <div className='flex flex-col items-start mb-4 z-10'>
        <span className='lg:font-semibold uppercase lg:text-xl'>highest bid:</span>
        <span className='lowercase tracking-wide lg:text-3xl leading-none'>$3000</span>
      </div>
    )
  }
}
