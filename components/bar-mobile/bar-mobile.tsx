import React from 'react'
import styled from './bar-mobile.module.scss'
import Link from 'next/link'


const BarMobile = () => {
  return (
    <div className={styled.container}>
      <div className={styled.content}>
        <div className={styled.divText}>
          <p className={styled.text}>
          <Link href="/">PESAN</Link>
          </p>
        </div>
        <div className={styled.divText}>
        <p className={styled.text} >
        <Link href="/status">STATUS</Link>
        </p>
        </div>
      </div>
    </div>
  )
}

export default BarMobile