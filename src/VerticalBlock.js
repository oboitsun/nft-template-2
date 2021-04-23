import React, { Component } from 'react'
import TimeLeft from './Components/TimeLeft'
import ArtNameAuthor from './Components/ArtNameAuthor'
import LikesCount from './Components/LikesCount'
import Category from './Components/Category'
import HighestBid from './Components/HighestBid'
import SeriesNumber from './Components/SeriesNumber'
import Favorites from './Components/Favorites'
export default class VerticalBlock extends Component {
  choosePattern = (where, color, rotate = 45) => {
    const patterns = {
      flat: {
        opacity: 1,
        background: 'transparent',
      },

      dotted: {
        opacity: 0.4,
        backgroundImage: `radial-gradient(${color} 1px, transparent 1px), radial-gradient(${color} 1px, transparent 1px)`,
        backgroundSize: '5px 5px',
        backgroundPosition: '0 0,2.5px 2.5px',
      },
      lined: {
        opacity: 0.3,
        background: `repeating-linear-gradient( ${rotate}deg, ${color} , ${color} 2px, transparent 2px, transparent 10px)`,
      },
      gradient: {
        opacity: 0.8,
        backgroundImage: `linear-gradient(180deg, ${color} 0%, rgba(8,19,35,0) 100%)`,
      },
    }
    return { ...patterns[where] }
  }
  render() {
    const headerPattern = this.choosePattern(
      this.props.headerPattern,
      this.props.headerPatternColor
    )
    const boxPattern = this.choosePattern(this.props.boxPattern, this.props.boxPatternColor, 135)
    return (
      <div
        style={{
          background: this.props.background,
          color: this.props.textColor,
          borderTopRightRadius: `${this.props.headerBorderRadius}px`,
          borderBottomRightRadius: `${this.props.headerBorderRadius}px`,
        }}
        className='vertical-template flex relative overflow-hidden '>
        <div
          style={{
            borderTopLeftRadius: '16px',
            borderBottomLeftRadius: '16px',
            borderRight: 'none',
            borderWidth: `${this.props.state.border.width}px`,
            borderColor: this.props.state.border.color,
          }}
          className='w-2/6  h-full flex flex-col flex-grow justify-between items-start relative p-2 lg:px-5 lg:pt-10 border-r-0 '>
          <div className='lg:pl-10 pl-5 z-10'>
            <ArtNameAuthor />
          </div>
          <div
            style={{
              background: this.props.boxBackground,
              borderColor: this.props.boxBorderColor,
              borderWidth: '3px',
            }}
            className='w-full flex flex-col items-start my-auto lg:pl-8 pl-4 lg:py-10  md:py-5  relative z-10'>
            <div className='flex mb-5 z-10'>
              <Favorites />
              <LikesCount />
            </div>
            <Category />
            <HighestBid />
            <SeriesNumber />
            <div
              style={{
                ...boxPattern,
                // borderBottomRightRadius: `${this.props.headerBorderRadius}px`,
                // borderBottomLeftRadius: `${this.props.headerBorderRadius}px`,
              }}
              className='w-full h-full absolute left-0 top-0 z-0'></div>
          </div>
          <div className='mb-auto lg:pl-10 md:pl-5 z-10'>
            <TimeLeft />
            <button
              style={{
                color: this.props.button.textColor,
                background: this.props.button.background,
                borderRadius: `${this.props.button.borderRadius}px`,
                border: this.props.button.border
                  ? `${this.props.button.borderWidth} solid ${this.props.button.borderColor}`
                  : 'none',
              }}
              className='uppercase outline-none border rounded-lg z-10 border-gray-900 w-full p-1 tex-sm 2xl:text-base lg:font-semibold leading-none '>
              go to auction
            </button>
          </div>
          <div
            style={{
              ...headerPattern,
              // borderTopRightRadius: `${this.props.headerBorderRadius}px`,
              // borderBottomRightRadius: `${this.props.headerBorderRadius}px`,
            }}
            className='w-full h-full absolute left-0 top-0 z-0'></div>
        </div>

        <section className='vertical-ratio w-1/2 h-96 flex z-10 relative '>
          <iframe
            title='vertical'
            className='absolute top-0 w-full h-full '
            src='https://www.youtube.com/embed/tCCY31XxN_Y'
            frameBorder='0'
            allowFullScreen=''></iframe>
        </section>
      </div>
    )
  }
}
