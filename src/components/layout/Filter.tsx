import { useEffect, useState } from 'react'
import { TypePhoto } from '../type'

const Filter = ({ data, setFiltered }: any) => {
  const [activeGenre, setActiveGenre] = useState(0)

  useEffect(() => {
    {
      activeGenre === 0
        ? setFiltered(data)
        : setFiltered(data.filter((e: TypePhoto) => e.albumId === activeGenre))
    }
  }, [activeGenre])

  //style
  const style = 'mr-4 px-2 bg-green-200 rounded-md hover:bg-red-700'
  return (
    <div>
      <button onClick={() => setActiveGenre(1)} className={style}>
        id 1
      </button>
      <button onClick={() => setActiveGenre(2)} className={style}>
        id 2
      </button>
      <button onClick={() => setActiveGenre(3)} className={style}>
        id 3
      </button>
    </div>
  )
}

export default Filter
