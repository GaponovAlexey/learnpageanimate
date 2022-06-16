import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Filter from '../components/layout/Filter'
import { TypePhoto } from '../components/type'

const Ico: NextPage<TypePhoto> = ({ data }: any) => {
  const [popular, setPopular] = useState(data)

  const [filtered, setFiltered] = useState(data)
  console.log(filtered)

  const [activeGenre, setActiveGenre] = useState(0)

  return (
    <>
      <Head>
        <title>Ico</title>
      </Head>
      <div className='m-[2%_10%]'>
        <div className='flex'>
          <Filter
            popular={popular}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
            setFiltered={setFiltered}
          />
        </div>
        <h2>ico</h2>
        <div className='grid grid-cols-tem gap-1 gap-row-2'>
          {filtered?.map((e: TypePhoto, i: number) => (
            <div key={i}>
              <p className='flex text-sm  flex-wrap'>
                {e.albumId} -{e.title.slice(0, 20).toUpperCase()}
              </p>
              <img
                className='w-auto h-[30vh] mb-2 object-cover rounded-xl'
                src={e.url}
                width='120px'
                height='120px'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Ico

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}
