import { motion, useTransform, useViewportScroll } from 'framer-motion'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { Tab } from '../components/tab'

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await res.json().then((res) => res.slice(0, 10))
  for (let i = 0; i < 3; i++) {
    data[i]
  }

  return {
    props: {
      data,
    },
  }
}

const Home: NextPage = ({ data }: any) => {
  const [images, setimges] = useState([data])

  const newData = images?.map(([t1, t2]) => <img src={t2.url} width='400px' />)

  console.log(newData)
  // NOTE
  const scrollRef = useRef(null)

  const { scrollY } = useViewportScroll()
  const marginTop = useTransform(scrollY, [4, 10], [0, 1])
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
        <motion.div>
          <Tab />
        </motion.div>
        {/* img */}
        {newData}
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
        ></motion.div>
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
        {/* img2 */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ animation: 'fadeIn', opacity: 1, x: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.2 }}
          className=' m-40 text-center'
        >
          <Image src='/1.jpg' layout='fixed' width={'1000px'} height='500px' />
        </motion.div>
        {/* footer */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ animation: 'fadeIn', opacity: 1, x: 0 }}
          viewport={{ root: scrollRef }}
          transition={{ delay: 0.2 }}
          className='m-5 mt-40'
        >
          <motion.div className='bg-gray-200 mt-10 p-10'>one</motion.div>
          <motion.div className=' bg-green-200 mt-10 p-10'>tow</motion.div>
          <motion.div className='bg-slate-200 mt-10 p-10'>three</motion.div>
          <motion.div className='bg-green-200 mt-10 p-10'>four</motion.div>
        </motion.div>
      </main>
      <footer className='text-center p-2'>footer</footer>
    </>
  )
}

export default Home
