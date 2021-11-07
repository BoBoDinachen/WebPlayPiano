import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import log_url from '../../assets/log.png'
import music_off from '../../assets/music_off.png'
import music_on from '../../assets/music_on.png'

export default function TopBar(props) {
  const [switchSound, setSwitchSound] = useState(false);
  const { playSound,pauseSound} = props;
  useEffect(() => {
    if (switchSound) {
      playSound(); // 开启音乐
    } else {
      pauseSound(); // 暂停音乐
    }
  }, [switchSound])
  // 开关背景音乐
  function handleClickMusic() {
    setSwitchSound(!switchSound);
  }
  return (
    <div className={styles.container}>
      {/* 音乐开关 */}
      <img onClick={handleClickMusic} src={switchSound ? music_on : music_off} alt="" />
      <img src={log_url} alt="" />
    </div>
  )
}
