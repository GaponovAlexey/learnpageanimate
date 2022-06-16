import { useEffect } from 'react'
import { TypePhoto } from '../type'

const Filter = ({ popular, setFiltered, activeGenre, setActiveGenre }: any) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular)
      return
    }
    const filtered = popular.filter(
      (e: TypePhoto | any) => e.albumId === activeGenre
    )
    setActiveGenre(filtered)
  }, [])

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
