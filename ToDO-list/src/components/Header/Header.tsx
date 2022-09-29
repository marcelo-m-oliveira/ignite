import logoToDoList from '../../assets/Logo.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.header}>
      <img src={logoToDoList} alt='logo ToDo List' />
    </div>
  )
}