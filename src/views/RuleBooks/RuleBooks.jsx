import React from 'react'
import styles from './index.module.scss'
import anime from 'animejs'
import img_url1 from "../../assets/键位图.png";
import img_url2 from "../../assets/示例乐谱图1.png";

export default function ruleBooks() {
  // 隐藏盒子
  function hiddenBox() {
    anime({
      targets: "#rule-box",
      translateY: -450,
      duration: 2000
    })
  }
  return (
    <div className={styles.container} id="rule-box">
      <div className={styles.topBar}>
        教程
      </div>
      <div className={styles.content}>
        {/* 琴键怎么看 */}
        <div>
          <h3>1.琴键怎么看</h3>
          <p>1、下面这个图就是原神琴谱的键位图，分别对应键盘上的：</p>
          <ul>
            <li>Q W E R T Y U</li>
            <li>A S D F G H J </li>
            <li>Z X C V B N M</li>
          </ul>
          <img src={img_url1} alt="" />
        </div>
        <div>
          <h3>2.音阶7个</h3>
          <p>Do Re Mi Fa Sol La Si</p>
          <p>数字分别对应:</p>
          <p>1 2 3 4 5 6 7</p>
          <p>0代表休止</p>
          <p>字母则分别对应：</p>
          <p>Q W E R T Y U</p>
        </div>
        <div>
          <h3>3.八度</h3>
          <img src={img_url2} alt="" />
          <ul>
            <li>倍高音 1 2 3 4 5 6 7(数字上两个点)</li>
            <li>高音 1 2 3 4 5 6 7(数字上一个点)</li>
            <li>中音 1 2 3 4 5 6 7</li>
            <li>低音 1 2 3 4 5 6 7(数字下一个点)</li>
            <li>倍低音 1 2 3 4 5 6 7(数字下两个点)</li>
            <h4>对应键盘</h4>
            <li>高音1 2 3 4 5 6 7 8(逆水寒)</li>
            <li>中音Q W E R T Y U I(逆水寒)</li>
            <li>低音A S D F G H J K(逆水寒)</li>
          </ul>
        </div>
      </div>
      {/* 取消按钮 */}
      <div className={styles.cancelBtn} onClick={hiddenBox}></div>
    </div>
  )
}
