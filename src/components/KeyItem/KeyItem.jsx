import React, { useEffect } from 'react'
import styles from './index.module.scss'
export default function KeyItem(props) {
  const { keyName,symbol,word,playSound,playAnima } = props;
  useEffect(() => {
    
  }, [])
  
  // 点击每个键
  function handleClick() {
    // 1.执行动画
    playAnima(keyName);
    // 2.播放对应音乐
    playSound(keyName);
  }
  
  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={`${styles.warpBox} warp-box-${keyName}`}></div>
      <div className={styles.insideBox}>
        <span>
          {symbol}
        </span>
        <span>
          {word}
        </span>
      </div>
    </div>
  )
}
