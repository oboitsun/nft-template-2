import React, { Component } from 'react'
import Star from '../icons/Star'
export default class Favorites extends Component {
  render() {
    return (
      <div className='flex items-center justify-end mr-5 z-10'>
        <Star />
        <span className='ml-2 font-semibold text-sm lg:text-3xl'>@</span>
      </div>
    )
  }
}
