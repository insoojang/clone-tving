import React from 'react'
import ReactPlayer from 'react-player'
import { makeTrailerPath } from '../service/utils'
import { IGetMoviesTrailer } from '../service/api'
import Footer from './Footer'

interface IProps {
  Loading: boolean
  Data?: IGetMoviesTrailer
}

const Trailer = ({ Loading, Data }: IProps) => {
  return (
    <React.Fragment>
      {Loading ? (
        'Loading'
      ) : (
        <div className="w-full h-screen bg-black">
          <div className="w-full h-full relative top-20 overflow-hidden flex justify-center">
            <ReactPlayer
              url={
                Data?.results[0] === undefined
                  ? 'https://www.youtube.com/watch?v=NeKdhpmVI64'
                  : makeTrailerPath(Data?.results[0].key || '')
              }
              volume={0.3}
              controls={false}
              playing={true}
              muted={false}
              loop={true}
              width="90%"
              height="90%"
            ></ReactPlayer>
          </div>
          <Footer />
        </div>
      )}
    </React.Fragment>
  )
}

export default Trailer
