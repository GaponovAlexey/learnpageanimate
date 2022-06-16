import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getData } from '../components/redux/reducer'
import { store } from '../components/redux/store'

const Ico = ({ data }: any) => {
  const [allData, setallData] = useState(data)

  const count = useSelector((state: any) => state.todo.data)
  console.log(count)

  return (
    <div className='text-center'>
      <h2>ico</h2>
      <h2>{count && count}</h2>
      <div className='flex flex-wrap'>
        {allData?.map((e: any, i: any) => (
          <img key={i} src={e.url} width='120px' height='120px' />
        ))}
      </div>
    </div>
  )
}

export default Ico

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await res.json().then((res) => res.slice(0, 30))
  store.dispatch(getData(data))
  return {
    props: {
      data,
    },
  }
}
