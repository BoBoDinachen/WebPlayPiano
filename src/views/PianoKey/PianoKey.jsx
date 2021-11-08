import React, { useEffect, useRef } from 'react'
import styles from './index.module.scss'
import { Howl, Howler } from 'howler';
import anima from 'animejs';
import KeyItem from '../../components/KeyItem/KeyItem'
import showPopupBox from '../../components/PopupKey/index'
import { spriteA, spriteB, spriteC } from '../../utils/sound_sprite'
import { keyMapA, keyMapB, keyMapC } from '../../utils/key_word';
import img_url1 from '../../assets/音符A.svg'
import img_url2 from '../../assets/音符B.svg'
import img_url3 from '../../assets/音符C.svg'
import audio_url from '../../audio/audio.mp3'
export default function HelloWorld() {
  let soundA = null;
  let soundB = null;
  let soundC = null;
  useEffect(() => {
    loadSoundSprite(); // 加载资源
    addKeyEventListener(); // 开启监听
  }, [])

  // 加载对应音乐序列
  function loadSoundSprite() {
    // 音级A
    soundA = new Howl({
      src: audio_url,
      html5: true,
      pool: 7,
      volume: 1,
      sprite: spriteA,
      onend: function (e) {
        console.log("触发音...");
      }
    })
    // 音级B
    soundB = new Howl({
      src: audio_url,
      html5: true,
      pool: 7,
      volume: .5,
      sprite: spriteB,
      onend: function () {
        console.log("触发音...");
      }
    })
    // 音级C
    soundC = new Howl({
      src: audio_url,
      html5: true,
      pool: 7,
      volume: .2,
      sprite: spriteC,
      onend: function () {
        console.log("触发音...");
      }
    })
  }
  // 键盘监听
  function addKeyEventListener() {
    window.addEventListener("keydown", (e) => {
      // console.log(e.code, e.key);
      switch (e.code) {
        case "KeyQ":
          showPopupBox("Q");
          palySpriteToName("A1");
          executeSpriteAnima("A1");
          break;
        case "KeyW":
          showPopupBox("W");
          palySpriteToName("A2");
          executeSpriteAnima("A2");
          break;
        case "KeyE":
          showPopupBox("E");
          palySpriteToName("A3");
          executeSpriteAnima("A3");
          break;
        case "KeyR":
          showPopupBox("R");
          palySpriteToName("A4");
          executeSpriteAnima("A4");
          break;
        case "KeyT":
          showPopupBox("T");
          palySpriteToName("A5");
          executeSpriteAnima("A5");
          break;
        case "KeyY":
          showPopupBox("Y");
          palySpriteToName("A6");
          executeSpriteAnima("A6");
          break;
        case "KeyU":
          showPopupBox("U");
          palySpriteToName("A7");
          executeSpriteAnima("A7");
          break;
        case "KeyA":
          showPopupBox("A");
          palySpriteToName("B1");
          executeSpriteAnima("B1");
          break;
        case "KeyS":
          showPopupBox("S");
          palySpriteToName("B2");
          executeSpriteAnima("B2");
          break;
        case "KeyD":
          showPopupBox("D");
          palySpriteToName("B3");
          executeSpriteAnima("B3");
          break;
        case "KeyF":
          showPopupBox("F");
          palySpriteToName("B4");
          executeSpriteAnima("B4");
          break;
        case "KeyG":
          showPopupBox("G");
          palySpriteToName("B5");
          executeSpriteAnima("B5");
          break;
        case "KeyH":
          showPopupBox("H");
          palySpriteToName("B6");
          executeSpriteAnima("B6");
          break;
        case "KeyJ":
          showPopupBox("J");
          palySpriteToName("B7");
          executeSpriteAnima("B7");
          break;
        case "KeyZ":
          showPopupBox("Z");
          palySpriteToName("C1");
          executeSpriteAnima("C1");
          break;
        case "KeyX":
          showPopupBox("X");
          palySpriteToName("C2");
          executeSpriteAnima("C2");
          break;
        case "KeyC":
          showPopupBox("C");
          palySpriteToName("C3");
          executeSpriteAnima("C3");
          break;
        case "KeyV":
          showPopupBox("V");
          palySpriteToName("C4");
          executeSpriteAnima("C4");
          break;
        case "KeyB":
          showPopupBox("B");
          palySpriteToName("C5");
          executeSpriteAnima("C5");
          break;
        case "KeyN":
          showPopupBox("N");
          palySpriteToName("C6");
          executeSpriteAnima("C6");
          break;
        case "KeyM":
          showPopupBox("M");
          palySpriteToName("A7");
          executeSpriteAnima("A7");
          break;
      }
    });
  }
  // 播放对应的音级
  function palySpriteToName(spriteName) {
    const arr = spriteName.split('');
    // console.log(arr);
    // 判断为哪个音级
    if (arr[0] === 'A') {
      // 播放A级的音调
      soundA.play(spriteName);
    } else if (arr[0] === 'B') {
      // 播放B级的音调
      soundB.play(spriteName);
    } else if (arr[0] === 'C') {
      // 播放C级的音调
      soundC.play(spriteName);
    }
  }
  // 执行对应键的动画
  function executeSpriteAnima(keyName) {
    // 执行动画
    anima({
      targets: '.warp-box-' + keyName,
      keyframes: [
        {
          scale: 1,
          opacity: 1,
        },
        {
          scale: 1.5,
          opacity: .7,
        },
        {
          scale: 2,
          opacity: 0.3,
        },
        {
          scale: 1,
          opacity: 1,
        }
      ],
      duration: 500,
      easing: 'easeInOutQuart',
    });
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={img_url1} alt="" />
        <img src={img_url2} alt="" />
        <img src={img_url3} alt="" />
      </div>
      <div className={styles.right}>
        {/* A序列键 */}
        <div className={styles.keyBoxsA}>
          {
            keyMapA.map((key, index) => {
              return (
                <KeyItem key={key.index} playAnima={executeSpriteAnima} playSound={palySpriteToName} keyName={key.index} symbol={key.symbol} word={key.word}></KeyItem>
              )
            })
          }
        </div>
        {/* B序列键 */}
        <div className={styles.keyBoxsB}>
          {
            keyMapB.map((key, index) => {
              return (
                <KeyItem key={key.index} playAnima={executeSpriteAnima} playSound={palySpriteToName} keyName={key.index} symbol={key.symbol} word={key.word}></KeyItem>
              )
            })
          }
        </div>
        {/* C序列键 */}
        <div className={styles.keyBoxsC}>
          {
            keyMapC.map((key, index) => {
              return (
                <KeyItem key={key.index} playAnima={executeSpriteAnima} playSound={palySpriteToName} keyName={key.index} symbol={key.symbol} word={key.word}></KeyItem>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
