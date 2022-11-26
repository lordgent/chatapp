import React from 'react'
import styled from './stories-mobile.module.scss'
import Layouts from '../../../components/layouts/layouts'
import StoryComponents from '../../home/child-components/stories/stories'

const StroiesMobile = () => {
  return (
    <Layouts>
      <div className={styled.container}>
        <StoryComponents/>
      </div>
    </Layouts>
  )
}

export default StroiesMobile
