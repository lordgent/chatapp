import React from 'react'
import styled from './carduser.module.scss'
import Avatar from '../avatar/avatar'

type Tcard = {
  name: String,
  message: String,
}

const CardUser = ({name, message}: Tcard) => {
  return (
    <div className={styled.card}>
      <div className={styled.bodycard}>
          <div>
            <Avatar name={name[0]} />
          </div>
          <div className={styled.wrapperMessage}>
            <div>
              <p className={styled.sender}>{name}</p>
            </div>
            <div>
                <p className={styled.message}>{message}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default CardUser