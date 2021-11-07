import React from 'react'
import styles from './index.module.scss'
import anime from 'animejs'
import img_url from '../../assets/乐谱01.png';
export default function MusicPaper() {
  function hideBox() {
    anime({
      targets: "#paper-box",
      opacity: 0,
      duration: 2000
    })
  }
  return (
    <div className={styles.container} id="paper-box">
      <div className={styles.log}>
        练习乐谱
      </div>
      <ul className={styles.content}>
        <li>
          <h3>《穿越时空的爱恋》-片段</h3>
          <img src={img_url} alt="" />
        </li>
        <li>
          <h3>《穿越时空的爱恋》-片段</h3>
          <img src={img_url} alt="" />
        </li>
        <li>
          <h3>《穿越时空的爱恋》-片段</h3>
          <img src={img_url} alt="" />
        </li>
        <li>
          <h3>《穿越时空的爱恋》-片段</h3>
          <img src={img_url} alt="" />
        </li>
      </ul>
      {/* 隐藏按钮 */}
      <div className={styles.bottomBtn} onClick={hideBox}>
      </div>
    </div>
  )
}
