import { motion, useTransform, useViewportScroll } from 'framer-motion'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const dataJson = await res.json()
  const data = dataJson.slice(0, 10)
  return { props: { data } }

  return {
    props: {
      data,
    },
  }
}

const Home: NextPage = ({ data }: any) => {
  const [allData, setData] = useState(data)
  const redus = useSelector((state: any) => state.todos)
  console.log(redus)

  // NOTE
  const scrollRef = useRef(null)

  const { scrollY } = useViewportScroll()
  const marginTop = useTransform(scrollY, [4, 10], [0, 1])

  // const newData = null;
  const newData = allData.map((e: any, i: any) => (
    <img key={i} src={e.url} width='120px' height='120px' />
  ))
  return (
    <>
      <main className=' bg-blue-200 text-blue-600 h-full'>
        {/* header */}
        <motion.div className='bg-red-200 grid p-5 grid-cols-2 justify-between '>
          <h1>logo</h1>
          <motion.div className='flex flex-wrap  justify-end  bg-green-200'>
            <motion.div className='pr-10'>ico</motion.div>
            <motion.div className='pr-10'>singiin</motion.div>
            <motion.div className=''>singiup</motion.div>
          </motion.div>
        </motion.div>
        {/* img */}
        <Image src='/1.jpg' width={100} height={100} />
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
          initial={{ opacity: 0, x: -1000 }}
          whileInView={{ animation: 'backwards', opacity: 1, x: 0 }}
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
          whileInView={{ animation: 'fadeIn', opacity: 1, x: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.2 }}
          className=' m-40 text-center'
        >
          <img src='/1.jpg' alt='two' width='400px' height='400px' />
        </motion.div>
        {/* three */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ animation: 'fadeIn', opacity: 1, x: 0 }}
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
          whileInView={{ animation: 'fadeIn', opacity: 1, x: 0 }}
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
      <footer className='text-center p-2'>footer</footer>
    </>
  )
}

export default Home
