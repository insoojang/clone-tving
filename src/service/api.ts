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

export const getMoviesUpcoming = async (
  number: number,
): Promise<IGetMoviesResult> => {
  const { data } = await axios.get(
    `${BASE_URL}/movie/upcoming?api_key=${REACT_APP_API_KEY}&page=${number}`,
  )
  return await data
}
