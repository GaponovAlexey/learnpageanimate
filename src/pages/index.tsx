import { motion, useTransform, useViewportScroll } from 'framer-motion'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRef } from 'react'

const Home: NextPage = ({ data }: any) => {
  // NOTE
  const scrollRef = useRef(null)

  const { scrollY } = useViewportScroll()
  const marginTop = useTransform(scrollY, [4, 10], [0, 1])

  // const newData = null;
  const newData = data.map((e: any, i: any) => (
    <motion.img
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.06 * i }}
      key={i}
      src={e.url}
      width='120px'
      height='120px'
    />
  ))
  return (
    <>
      <main className=' bg-blue-200 text-blue-600 h-full'>
        {/* img */}
        <div className='flex flex-wrap justify-between'>{newData}</div>
        {/* one */}
        <motion.div className='bg-red-300 mt-40 m-5 text-center  grid h-1/3 grid-cols-4 gap-10 p-20 '>
          <motion.div className='bg-gray-200'>one</motion.div>
          <motion.div className=' bg-green-200'>tow</motion.div>
          <motion.div className='bg-slate-200'>three</motion.div>
          <motion.div className='bg-green-200'>four</motion.div>
        </motion.div>

        {/* two */}
        <motion.div
          style={{ scaleX: marginTop }}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.2 }}
          className='m-5 mt-40'
        >
          <motion.div className='bg-gray-200 mt-10 p-10'>TWOOO</motion.div>
          <motion.div className=' bg-green-200 mt-10 p-10'>tow</motion.div>
          <motion.div className='bg-slate-200 mt-10 p-10'>three</motion.div>
          <motion.div className='bg-green-200 mt-10 p-10'>four</motion.div>
        </motion.div>
        {/* img */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.2 }}
          className=' m-40 text-center'
        >
          <Image
            src='/1.jpg'
            alt='two'
            width='400px'
            height='400px'
            className='h-8 w-8 rounded-full'
          />
        </motion.div>
        {/* three */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.4 }}
          className='m-5 mt-40'
        >
          <motion.div className='bg-gray-200 mt-10 p-10'>one</motion.div>
          <motion.div className=' bg-green-200 mt-10 p-10'>tow</motion.div>
          <motion.div className='bg-slate-200 mt-10 p-10'>three</motion.div>
          <motion.div className='bg-green-200 mt-10 p-10'>four</motion.div>
        </motion.div>
        {/* four */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.4 }}
          className='bg-red-300 mt-40 m-5 text-center  grid h-1/3 grid-cols-4 gap-10 p-20 '
        >
          <motion.div className='bg-gray-200'>one</motion.div>
          <motion.div className=' bg-green-200'>tow</motion.div>
          <motion.div className='bg-slate-200'>three</motion.div>
          <motion.div className='bg-green-200'>four</motion.div>
        </motion.div>
      </main>
    </>
  )
}

export default Home

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await res.json().then((res) => res.slice(0, 10))
  return {
    props: {
      data,
    },
  }
}
