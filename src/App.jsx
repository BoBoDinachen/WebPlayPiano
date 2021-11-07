import { useState, useEffect } from 'react'
import './App.css'
import { Howl, Howler } from 'howler'
import anime from 'animejs'
import PianoKey from './views/PianoKey/PianoKey'
import AffixBox from './components/AffixBox/AffixBox';
import TopBar from './components/TopBar/TopBar'
import RuleBooks from './views/RuleBooks/RuleBooks'
import MusicPaper from './views/MusicPaper/MusicPaper'
function App() {
  let sound = null; //背景音乐
  useEffect(() => {
    sound = new Howl({
      src: ["/src/audio/bj_music.mp3"],
      volume: 1,
      loop: true,
      autoplay: false
    })
  }, [])
  // 暂停音乐
  function pauseSound() {
    if (sound !== null) {
      sound.pause();
    }
  }
  // 开启背景音乐
  function playSound() {
    if (sound !== null) {
      sound.play();
    }
  }
  // 显示说明框
  function showRuleBox() {
    anime({
      targets: "#rule-box",
      translateY: 420,
      duration: 1000
    })
  }
  // 显示乐谱
  function showPaperBox() {
    anime({
      targets: "#paper-box",
      opacity: 1,
      duration:2000
    })
  }
  return (
    <div className="App">
      {/* 头部栏 */}
      <TopBar pauseSound={pauseSound} playSound={playSound}></TopBar>
      {/* 琴键 */}
      <PianoKey></PianoKey>
      {/* 右边固定盒子 */}
      <AffixBox showRuleBox={showRuleBox} showPaperBox={showPaperBox}></AffixBox>
      {/* 说明书 */}
      <RuleBooks></RuleBooks>
      {/* 示例乐谱 */}
      <MusicPaper></MusicPaper>
    </div>
  )
}

export default App
