import React from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import { getMoviesUpcoming, IGetMoviesResult, IMovie } from '../service/api'
import { makeImagePath, nothingPoster } from '../service/utils'

const Home = () => {
  const { isLoading, data } = useQuery<IGetMoviesResult>('upcoming', () =>
    getMoviesUpcoming(1),
  )
  console.log('data', data)
  return (
    <div className="w-screen h-screen bg-black">
      {isLoading ? (
        'loading'
      ) : (
        <div className="w-full h-[calc(100vh-4rem)] grid grid-cols-10 absolute bottom-0 bg-red-200">
          {data?.results.map((movie: IMovie) => {
            return (
              <Poster
                key={movie.id}
                bgimg={
                  movie.backdrop_path === null
                    ? nothingPoster
                    : makeImagePath(movie.poster_path)
                }
                className="bg-slate-500 image bg-cover bg-center"
              >
                <span className="text-white">{movie.title}</span>
              </Poster>
            )
          })}
        </div>
      )}
    </div>
  )
}

const Poster = styled.div<{ bgimg: string }>`
  background-image: url(${(prop) => prop.bgimg});
`

export default Home
