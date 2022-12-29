import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScroll, useAnimation, motion } from 'framer-motion'

const bodyVariants = {
  top: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  scroll: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 3000,
  },
}

const Header = () => {
  const { scrollY } = useScroll()
  const scrollAnimation = useAnimation()
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    scrollY.onChange(() => {
      if (scrollY.get() > 30) {
        console.log('scroll')
        scrollAnimation.start('scroll')
      } else {
        scrollAnimation.start('top')
      }
    })
  }, [scrollY, scrollAnimation])
  return (
    <motion.div
      variants={bodyVariants}
      initial="top"
      animate={scrollAnimation}
      className="w-full h-20 fixed flex items-center text-white z-20"
    >
      <div className="ml-5 sm:space-x-6 flex items-center sm:ml-12">
        <Link to="/">
          <span className=" mr-10 font-bold text-base sm:text-4xl">Insoo</span>
        </Link>
        <Link to="/Air" className="flex items-center">
          <div className="w-8 h-8 bg-no-repeat bg-left bg-[url('https://www.tving.com/img/icon_menu_live.svg')]" />
          <span className="text-gray-400 hover:text-gray-200 mr-5 font-bold sm:text-xl  text-xs">
            실시간
          </span>
        </Link>
        <Link to="/TV">
          <span className="text-gray-400 hover:text-gray-200 mr-5 font-bold sm:text-xl text-xs">
            TV프로그램
          </span>
        </Link>
        <Link to="/영화">
          <span className="text-gray-400 hover:text-gray-200 mr-5 font-bold sm:text-xl text-xs">
            영화
          </span>
        </Link>
      </div>
    </motion.div>
  )
}

export default Header
