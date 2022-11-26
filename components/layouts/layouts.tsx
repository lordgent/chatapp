import Head from 'next/head'
import React, { ReactNode } from 'react'
import Header from '../header/header'
import styled from './layouts.module.scss'

type TLayout = {
  children: ReactNode;
}

const Layouts = ({children} : TLayout) => {
  return (
        <React.Fragment>
            <Head>
            <title>Whatsapp fake</title>
            <meta name="description" content="author lordgent" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <Header/>
            <div className={styled.container}>
              {children}
            </div>
        </React.Fragment>
  )
}

export default Layouts