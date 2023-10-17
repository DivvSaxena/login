import styles from "../styles/Header.module.css"
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
})
export default function Header(){
  return (
    <div className={styles.header}>
      <h1 className={`${styles.heading} ${poppins.className}`}>Login Page</h1>
    </div>
  )
}