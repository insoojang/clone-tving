import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getTvTrailer, IGetMoviesTrailer } from '../../service/api'
import Trailer from '../../layout/Trailer'

const TVTrailer = () => {
  const trailerId = useParams()
  const { isLoading, data } = useQuery<IGetMoviesTrailer>('Trailer', () =>
    getTvTrailer(Number(trailerId.id)),
  )
  return <Trailer Loading={isLoading} Data={data} />
}

export default TVTrailer
