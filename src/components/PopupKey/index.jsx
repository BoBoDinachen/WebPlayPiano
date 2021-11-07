import React from 'react'
import ReactDOM from "react-dom"
import PopupKey from './PopupKey'
import anime from 'animejs'
function showPopupBox(keyName) {
  // 创建节点
  let node = document.getElementById("popup-box");
  if (node) {
    // 如果存在节点，立马消除，然后新建
    document.body.removeChild(node);
    let container = document.createElement('div');
    container.id = "popup-box"
    document.body.appendChild(container);
    ReactDOM.render(<PopupKey keyName={keyName} />, document.getElementById('popup-box'));
    // 定时移除加动画
    anime({
      targets: "#popup-box",
      translateY: -10,
      opacity: 0,
      easing: 'easeInOutExpo',
      duration: 1000,
      loop: true
    })
    setTimeout(() => {
      // 查询是否包含子节点
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    }, 1000)
  } else {
    // 如果不存在
    let container = document.createElement('div');
    container.id = "popup-box"
    document.body.appendChild(container);
    ReactDOM.render(<PopupKey keyName={keyName} />, document.getElementById('popup-box'));
    // 定时移除加动画
    anime({
      targets: "#popup-box",
      translateY: -10,
      opacity: 0,
      easing: 'easeInOutExpo',
      duration: 1000,
      loop: true
    })
    setTimeout(() => {
      // 查询是否包含子节点
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    }, 1000)
  }
}
export default showPopupBox