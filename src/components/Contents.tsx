import React from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { getMovieDetail, IGetMoviesDetail } from '../service/api'
import { makeImagePath, nothingPoster } from '../service/utils'
import Footer from './Footer'

const Contents = () => {
  const movieId = useParams()
  const navigate = useNavigate()
  const { isLoading, data } = useQuery<IGetMoviesDetail>('Movie-Detail', () =>
    getMovieDetail(Number(movieId.id)),
  )
  const onClickTrailer = () => {
    navigate(`/contents/trailer/${movieId.id}`)
  }

  return (
    <React.Fragment>
      {isLoading ? (
        'Loading'
      ) : (
        <React.Fragment>
          <main
            className="w-full h-screen brightness-[.1] bg-cover opacity-80"
            style={{
              backgroundImage: `url(${makeImagePath(
                data?.backdrop_path === undefined
                  ? nothingPoster
                  : data?.backdrop_path,
              )})`,
            }}
          ></main>
          <main className="flex justify-center absolute top-20 z-10 w-full h-[70%] ">
            <div className="border-b-2 pb-10 border-solid border-gray-500 w-[95%] xl:h-[70vh] h-full flex flex-col xl:flex-row-reverse  items-center">
              <div
                className="w-screen xl:w-1/4 xl:ml-[50vh] xl:h-3/4 relative h-2/5 bg-cover bg-center xl:shadow-2xl rounded-lg"
                style={{
                  backgroundImage: `url(${makeImagePath(
                    data?.backdrop_path === undefined
                      ? nothingPoster
                      : data?.backdrop_path,
                  )})`,
                }}
              ></div>
              <div className="w-full xl:w-1/2 xl:h-[80%] h-3/5 flex flex-col justify-center">
                <div className="w-full h-[20%] flex items-center">
                  <span className="text-white font-bold text-3xl xl:text-6xl">
                    {data?.original_title}
                  </span>
                </div>
                <div className="w-full h-[10%]  flex items-center ">
                  <div>
                    {data?.adult ? (
                      <div className="bg-red-600 rounded-sm mr-2">
                        <span className="font-extrabold text-white ">19</span>
                      </div>
                    ) : (
                      <div className="bg-orange-400 rounded-sm mr-2">
                        <span className="font-extrabold text-white p-1">
                          15
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="w-14 h-auto border border-solid text-center rounded-sm bg-transparent">
                    <span className="font-bold text-slate-400 p-1">
                      {data?.runtime}분
                    </span>
                  </div>
                </div>
                <div className="w-full h-[50%]  overflow-y-scroll">
                  <span className="font-bold text-slate-400">
                    {data?.overview}
                  </span>
                </div>
                <div
                  onClick={onClickTrailer}
                  className="xl:w-[200px] xl:h-[15%] w-full h-[20%] justify-center flex items-end"
                >
                  <div className="w-full h-auto  text-center xl:py-5  py-4 bg-red-500 rounded-md">
                    <span className="text-white font-bold text-sm xl:text-lg">
                      시청하기
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default Contents
