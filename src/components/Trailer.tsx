import React from 'react'
import ReactPlayer from 'react-player'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getMovieTrailer, IGetMoviesTrailer } from '../service/api'
import { makeTrailerPath } from '../service/utils'
import Footer from './Footer'

const Trailer = () => {
  const trailerID = useParams()
  const { isLoading, data } = useQuery<IGetMoviesTrailer>('Trailer', () =>
    getMovieTrailer(Number(trailerID.id)),
  )
  return (
    <React.Fragment>
      {isLoading ? (
        'Loading'
      ) : (
        <div className="w-full h-screen bg-black">
          <div className="w-full h-full relative top-20 overflow-hidden flex justify-center">
            <ReactPlayer
              url={
                makeTrailerPath(data?.results[0].key || '') ||
                'https://www.youtube.com/watch?v=TTLHd3IyErM'
              }
              volume={0}
              controls={false}
              playing={true}
              muted={false}
              loop={true}
              width="90%"
              height="90%"
            ></ReactPlayer>
          </div>
          <div className="w-full h-full absolute top-0 "></div>
          <Footer />
        </div>
      )}
    </React.Fragment>
  )
}

export default Trailer
