import React from 'react'
import Root from './Root'
import Container from './Container'
import VantCountDown from './VantCountDown'

export const CountDownTest = () => {
  return (
    <Root>
      <Container
        {...{
          style: {
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }}
      >
        <VantCountDown
          {...{ style: {}, time: 600000, format: 'DD 天 HH 时 mm 分 ss 秒', millisecond: false }}
        ></VantCountDown>
      </Container>
    </Root>
  )
}

export default CountDownTest
