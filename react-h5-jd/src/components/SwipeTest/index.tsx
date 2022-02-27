import React from 'react'
import Root from './Root'
import VantSwipe from './VantSwipe'
import CustomImg from './CustomImg'

export const SwipeTest = () => {
  return (
    <Root>
      <VantSwipe
        {...{
          style: { width: '100%', height: '2rem', backgroundColor: 'pink' },
          duration: 500,
          loop: true,
          'show-indicators': true,
          touchable: true,
          'stop-propagation': true,
          'indicator-color': '#1989fa',
          autoplay: 3000
        }}
      >
        <CustomImg
          {...{
            src: 'https://img01.yzcdn.cn/vant/cat.jpeg',
            style: { display: 'block', width: '100%', height: '100%', objectFit: 'contain' }
          }}
        ></CustomImg>
      </VantSwipe>
    </Root>
  )
}

export default SwipeTest
