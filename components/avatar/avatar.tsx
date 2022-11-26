import React from 'react'
import styled from './avatar.module.scss'

type Tavatar = {
  name: string, 
}

const Avatar = ({name}: Tavatar) => {
  return (
    <div className={styled.container}>
        {name}
    </div>
  )
}

export default Avatar