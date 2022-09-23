import { Sidebar } from './components/sidebar/Sidebar'
import { Header } from './components/header/Header'

import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        </main>
      </div>
    </div>

  )
}
