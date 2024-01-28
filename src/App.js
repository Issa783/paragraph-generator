import React, { useState } from 'react'
import styles from "./style.module.css"
import Data from "./data"


function App() {
  const[count,setCount] = useState(0)
  const[text,setText] = useState([])
  const handleSubmit = (e) => {
     e.preventDefault()
     let amount = parseInt(count)
     if(count <= 0){
      amount = 1
     }
     if (count > 8){
      amount = 8
     }
     setText(Data.slice(0,amount))
  }
  return (
     <section className={styles.sectioncenter}>
      <h3>Tired of lorem ipsum?</h3>
      <form className={styles.loremform} onSubmit={handleSubmit}>
         <label htmlFor='amount'>Paragraphs :</label>
         <input type='number' id='amount' value={count} onChange={(e) => {
          setCount(e.target.value)}}/>
          <button className={styles.btn}>Generate</button>
      </form>
      <article className={styles.loremtext}></article>
      {text.map((item,index)=> {
        return <p key={index}>{item}</p>
      })}
     </section>
  );
}

export default App;
