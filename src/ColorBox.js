import React from 'react'
import styles from './ColorBox.module.css'

const ColorBox = ({ color, search }) => {
  return (
      <div
        className={styles.box}
        style={{
          backgroundColor: color
        }}
      >{search}</div>
    )
  }

export default ColorBox