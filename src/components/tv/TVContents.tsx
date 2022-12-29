import { useQuery } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { getTVDetail, IGetMoviesDetail } from '../../service/api'
import Contents from '../../layout/Contents'

const TVContents = () => {
  const movieId = useParams()
  const navigate = useNavigate()
  const { isLoading, data } = useQuery<IGetMoviesDetail>('TV-Detail', () =>
    getTVDetail(Number(movieId.id)),
  )
  const onClickTrailer = () => {
    navigate(`/contents/tv/trailer/${movieId.id}`)
  }
  return <Contents Loading={isLoading} Data={data} Trailer={onClickTrailer} />
}

export default TVContents
