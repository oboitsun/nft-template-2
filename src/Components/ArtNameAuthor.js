import React, { Component } from 'react'

export default class ArtNameAuthor extends Component {
  render() {
    return (
      <div className='flex items-center z-10'>
        <div className='w-5 h-5 lg:w-14 lg:h-14 rounded-full bg-red-400 mr-1 lg:mr-2 2xl:mr-5 z-10 flex-shrink-0'></div>
        <div className='flex flex-col flex-wrap items-start justify-between mr-auto  z-10 pb-1'>
          <span className=' 2xl:text-2xl leading-none mix-blend-difference'>Astro cuts</span>
          <p className='max-w-xs text-base lg:text-xl 2xl:text-3xl text-left leading-none flex flex-wrap overflow-ellipsis'>
            “#011”
          </p>
        </div>
      </div>
    )
  }
}
