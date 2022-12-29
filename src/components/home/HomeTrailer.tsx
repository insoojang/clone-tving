import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getMovieTrailer, IGetMoviesTrailer } from '../../service/api'
import Trailer from '../../layout/Trailer'

const HomeTrailer = () => {
  const trailerId = useParams()
  const { isLoading, data } = useQuery<IGetMoviesTrailer>('Trailer', () =>
    getMovieTrailer(Number(trailerId.id)),
  )
  return <Trailer Loading={isLoading} Data={data} />
}

export default HomeTrailer
