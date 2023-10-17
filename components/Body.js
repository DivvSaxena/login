'use client'
import React , {useState, useEffect} from 'react'
import styles from "../styles/Body.module.css"
import { Poppins} from '@next/font/google'
import { collection, addDoc } from "firebase/firestore"
import db from "../pages/firebase"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
})

export default function Body(){
  const [newItem , setNewItem] = useState({email: '',password: ''})
  
  // Add items to database
  const addItem = async (e) => {
    e.preventDefault() // as we don't want the form to submit
     // there would be poor experience if i'll be adding a blank input
    if(newItem.email !== '' && newItem.password !== ''){
      await addDoc(collection(db, 'items') , {
        email: newItem.email.trim(),
        password: newItem.password,
      })

      setNewItem({email: '' , password: ''})
    }
  }
  // Read items from database
  
  // Delete items from database



  return (
    <div class={`${styles.container} ${poppins.className}`}>
    <form>
       <img src="https://static.wixstatic.com/media/2f6666_4f954d044b224eb29d7f2ff49d0fbb8b~mv2.png/v1/fill/w_269,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%203.png" className={styles.image}/>
       <input 
        type="email"
        placeholder="email"
        value={newItem.email}
        onChange={(e) => setNewItem({...newItem , email: e.target.value})}
        className={`${styles.tags} ${poppins.className}`}
        required
      />
      <input 
        type="password"
        placeholder="password"
        value={newItem.password}
        onChange={(e) => setNewItem({...newItem , password: e.target.value})}
        className={`${styles.tags} ${poppins.className}`}
        required
      />
      <button 
        type="submit"
        onClick={addItem}
        className={`${styles.btn} ${poppins.className}`}
      >
      Submit
      </button>
    </form>  
    </div>
  )
}