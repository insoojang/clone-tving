import axios from 'axios'

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export interface IMovie {
  id: number
  backdrop_path: string
  poster_path: string
  title: string
  overview: string
  release_date: string
  vote_average: string
}

export interface IGetMoviesResult {
  results: IMovie[]
}

export interface IGetMoviesDetail {
  adult: boolean
  backdrop_path: string
  id: number
  original_title: string
  overview: string
  poster_path: string
  runtime: number
}

interface ITrailer {
  key: string
  site: string
}

interface ITV {
  id: number
  backdrop_path: string
  original_name: string
  poster_path: string
}

export interface IGetMoviesTrailer {
  id: number
  results: ITrailer[]
}

export interface IGetTVResult {
  page: number
  results: ITV[]
}

export const getMoviesUpcoming = async (
  number: number,
): Promise<IGetMoviesResult> => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/upcoming?api_key=${REACT_APP_API_KEY}&page=${number}`,
  )
  return data
}

export const getMovieDetail = async (movieId: number) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${REACT_APP_API_KEY}`,
  )
  return data
}

export const getMovieTrailer = async (movieId: number) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${REACT_APP_API_KEY}`,
  )
  return data
}
export const getUpcoming = async (number?: number) => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/upcoming?api_key=${REACT_APP_API_KEY}&page=${number}`,
  )
  return data
}

export const getTv = async (number?: number) => {
  const { data } = await axios.get(
    `${BASE_URL}/tv/popular?api_key=${REACT_APP_API_KEY}&page=${number}`,
  )
  return data
}

export const getTVDetail = async (tvId?: number) => {
  const { data } = await axios.get(
    `${BASE_URL}/tv/${tvId}?api_key=${REACT_APP_API_KEY}&language=ko-KR`,
  )
  return data
}

export const getTvTrailer = async (tvId?: number) => {
  const { data } = await axios.get(
    `${BASE_URL}/tv/${tvId}/videos?api_key=${REACT_APP_API_KEY}`,
  )
  return data
}

export const getSearch = async (query?: string) => {
  const { data } = await axios.get(
    `${BASE_URL}/search/multi?api_key=${REACT_APP_API_KEY}&query=${query}&page=1&include_adult=false`,
  )
  return data
}
