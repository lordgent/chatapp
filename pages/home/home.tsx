import React from 'react'
import Layouts from '../../components/layouts/layouts'
import styled from './home.module.scss'

import CardUser from '../../components/card-user/carduser'
import fake from './fake'

const HomePage = () => {
  return (
    <Layouts>
      <div className={styled.container}>
          <div className={styled.content}>
              <div className={styled.divMessage}>
              <div className={styled.row}>
                {fake.map(item => 
                    <CardUser
                      key={item.id}
                      name={item.name}
                      message={item.message}
                    />
                  )}
              </div>
              </div>
              <div className={styled.detailmessage}>
                <h3>Detail message</h3>
              </div>
              <div className={styled.profile}>
                Profile
              </div>
          </div>
      </div>
    </Layouts>
  )
}

export default HomePage
