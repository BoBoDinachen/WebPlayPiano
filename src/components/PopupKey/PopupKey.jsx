import React from 'react'
import ReactDOM from "react-dom"
import styles from './index.module.scss'
function PopupKey({keyName}) {
  return (
    <div className={styles.container}>
      <span>
        { keyName}
      </span>
    </div>
  )
}
export default PopupKey;