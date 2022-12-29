import { useState } from 'react'
import ReactPlayer from 'react-player'
import Footer from '../../layout/Footer'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

const ArrayUrl = [
  'https://www.youtube.com/watch?v=Fn83vM8f1h8',
  'https://www.youtube.com/watch?v=TTLHd3IyErM',
  'https://www.youtube.com/watch?v=TTLHd3IyErM',
  'https://www.youtube.com/watch?v=TTLHd3IyErM',
  'https://www.youtube.com/watch?v=TTLHd3IyErM',
]

const Air = () => {
  const [urlState, setUrlState] = useState(0)
  const [pause, setPause] = useState(true)

  const next = () => {
    const total = 4
    setUrlState((prev) => (prev === total ? 0 : prev + 1))
  }
  const prev = () => {
    const total = 0
    setUrlState((prev) => (prev === total ? 4 : prev - 1))
  }
  const onPause = () => {
    setPause((prev) => !prev)
  }
  return (
    <div className="w-full h-screen bg-black">
      <div className="w-full h-full relative top-12 xl:top-20 overflow-hidden flex justify-center">
        <ReactPlayer
          url={ArrayUrl[urlState]}
          volume={0.1}
          controls={false}
          playing={pause}
          muted={false}
          loop={true}
          width="90%"
          height="90%"
        ></ReactPlayer>
      </div>
      <div
        onClick={next}
        className="w-3 h-[90%] xl:w-10 absolute top-12 xl:top-20 right-0 bg-red-500 hover:bg-green-500 flex justify-center items-center"
      >
        <ArrowForwardIosIcon />
      </div>
      <div
        onClick={onPause}
        className="w-[calc(100%-0.75rem)] xl:w-[calc(100%-2.5rem)]  h-[90%] absolute top-[5rem]  flex justify-center items-center"
      ></div>
      <div
        onClick={prev}
        className="w-3 h-[90%] xl:w-10 absolute top-12 xl:top-20 left-0 bg-red-500 hover:bg-green-500 flex xl:justify-center justify-start items-center"
      >
        <ArrowBackIosIcon />
      </div>
      <Footer />
    </div>
  )
}

export default Air
