import { motion } from 'framer-motion'
import Link from 'next/link'

const Layout = ({ children }: any) => {
  return (
    <div>
      <header>
        {/* header */}
        <motion.div className='bg-red-200 grid p-5 grid-cols-2 justify-between '>
          <h1>logo</h1>
          <motion.div className='flex flex-wrap  justify-end  bg-green-200'>
            <motion.div className='pr-10'>
              <Link href='/'>main</Link>
            </motion.div>
            <motion.div className='pr-10'>
              <Link href='/ico'>ico</Link>
            </motion.div>
            <motion.div className='pr-10'>singiin</motion.div>
            <motion.div className=''>singiup</motion.div>
          </motion.div>
        </motion.div>
      </header>
      <div className='min-h-[100vh]'>{children}</div>
      <footer>
        <footer className='text-center p-2'>footer</footer>
      </footer>
    </div>
  )
}

export default Layout
