import type { NextPage } from 'next'
import Landing from '../components/landing/Landing'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Landing />
    </div>
  )
}

export default Home
