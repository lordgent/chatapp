import React from 'react'
import styled from './header.module.scss'
import BarMobile from '../bar-mobile/bar-mobile'
import Image from 'next/image'
import {icam, iconfig} from '../../assets/icons'

const Header = () => {
  return (
    <nav className={styled.container}>
      <div className={styled.content}>
        <div className={styled.navbar}>
        <div>
          <h4 className={styled.logo}>WhatsApp</h4>
        </div>
      
        <div className={styled.action}>
      <Image
        src={icam}
        alt="Picture of the author"
        width={22}
        height={22}
      />
      <Image
        src={iconfig}
        alt="Picture of the author"
        width={22}
        height={22}
      />
      </div>
        </div>

      <BarMobile/>

      </div>

    </nav>
  )
}

export default Header
