import React from 'react'
import { Button } from 'react-vant'

export const EleButton = ({ text, ...props }) => {
  return <Button {...props}>{text}</Button>
}

export default EleButton
