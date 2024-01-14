"use client"
import Left from './Components/leftside'
import Right from './Components/rightside'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <Left />
      <Right />
    </div>
  )
}
