import React from 'react'
import Avatar from '../../../../components/avatar/avatar'
import styled from './stories.module.scss'

const StoryComponents = () => {
  return (
    <div className={styled.container}>
      <div className={styled.myStatus}>
        <Avatar name="L"/>
        <div>
          <p className={styled.title}>Status saya</p>
          <p className={styled.text}>ketuk untuk menambahkan pembaruan status</p>
        </div>
      </div>
    </div>
  )
}

export default StoryComponents