import { Sidebar } from './components/sidebar/Sidebar'
import { Header } from './components/header/Header'
import { Post } from './components/post/Post'

import styles from './App.module.css'
import './global.css'


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>

  )
}
