import React from 'react'
import Root from './Root'
import Container from './Container'
import VantButton from './VantButton'
import CustomImg from './CustomImg'
import CustomText from './CustomText'

export const test = () => {
  return (
    <Root>
      <Container
        {...{
          style: {
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }}
      >
        <VantButton {...{ text: '我是按钮123123', style: {} }}></VantButton>

        <CustomImg
          {...{
            src: 'https://img01.yzcdn.cn/vant/cat.jpeg',
            style: { display: 'block', width: '1rem', height: '1rem' }
          }}
        ></CustomImg>

        <CustomText {...{ text: '我是文本' }}></CustomText>
      </Container>
    </Root>
  )
}

export default test
