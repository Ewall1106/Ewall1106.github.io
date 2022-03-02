import React from 'react'
import { Form } from 'element-react'

export const EleFormItem = props => {
  return (
    <Form.Item {...props}>
      {React.Children.map(props.children, child => {
        return React.cloneElement(child, { context: props.context })
      })}
    </Form.Item>
  )
}

export default EleFormItem
