import React from 'react'
import { Swiper } from 'react-vant'

export const VantSwipe = props => {
  return (
    <Swiper {...props}>
      {[1, 2].map(item => {
        return <Swiper.Item key={item}>{props.children}</Swiper.Item>
      })}
    </Swiper>
  )
}

export default VantSwipe
