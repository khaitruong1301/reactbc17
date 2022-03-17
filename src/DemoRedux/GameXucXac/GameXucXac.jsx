import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'

import styleGame from './resource/styles/GameXucXac.module.css'


export default class GameXucXac extends Component {

  render() {
    return (
      <div className={`${styleGame['bg-game']} pt-5`} >
          <h3 className='display-4 text-center'>Bài tập game xúc xắc</h3>
          <XucXac />
          <KetQuaTroChoi />

      </div>
    )
  }
}
