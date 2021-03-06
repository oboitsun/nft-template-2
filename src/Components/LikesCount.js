import React, { Component } from 'react'

export default class LikesCount extends Component {
  render() {
    return (
      <div className='flex items-center  z-10'>
        <span className='w-4 h-3 lg:w-6 lg:h-5 mr-1 fill-current'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22.83 19.45'>
            <g id='Layer_2' data-name='Layer 2'>
              <g id='Layer_2-2' data-name='Layer 2'>
                <path d='M6,0A6,6,0,0,0,1.75,1.74a5.88,5.88,0,0,0,0,8.37l9.12,9.12a.77.77,0,0,0,1,0l0,0,9.14-9.11a5.88,5.88,0,0,0,0-8.37,6.05,6.05,0,0,0-8.51,0L11.41,2.9,10.26,1.74A6,6,0,0,0,6,0ZM6,1.36A4.49,4.49,0,0,1,9.19,2.69l1.7,1.7a.76.76,0,0,0,1,0l0,0L13.64,2.7A4.47,4.47,0,0,1,20,2.7a4.56,4.56,0,0,1,0,6.46c-2.87,2.86-5.73,5.73-8.6,8.58L2.82,9.15a4.56,4.56,0,0,1,0-6.46A4.49,4.49,0,0,1,6,1.36Z' />
              </g>
            </g>
          </svg>
        </span>
        <span className='lg:text-2xl'>40</span>
      </div>
    )
  }
}
