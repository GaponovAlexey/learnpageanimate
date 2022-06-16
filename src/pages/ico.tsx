import { AnimatePresence, motion } from 'framer-motion'
import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Filter from '../components/layout/Filter'
import { TypePhoto } from '../components/type'

const Ico: NextPage<TypePhoto> = ({ data }: any) => {
  const [filtered, setFiltered] = useState(data)

  return (
    <>
      <Head>
        <title>Ico</title>
      </Head>
      <div className='m-[2%_10%]'>
        <div className='flex'>
          <Filter data={data} setFiltered={setFiltered} />
        </div>
        <h2>ico</h2>
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5 }}
          layout
          className='grid grid-cols-tem gap-1 gap-row-2'
        >
          <AnimatePresence>
            {filtered?.map((e: TypePhoto, i: number) => (
              <motion.div
                initial={{ y: 0 }}
                exit={{ y: 0.4 * i }}
                transition={{ duration: 0.5 }}
                layout
                className='grid grid-cols-tem gap-1 gap-row-2'
                key={i}
              >
                <p className='flex text-sm  flex-wrap'>
                  {e.albumId} -{e.title.slice(0, 20).toUpperCase()}
                </p>
                <motion.img
                  layout
                  className='w-auto h-[30vh] mb-2 object-cover rounded-xl'
                  src={e.url}
                  width='120px'
                  height='120px'
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}

export default Ico

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await res.json().then((res) => res.slice(0, 200))
  return {
    props: {
      data,
    },
  }
}
