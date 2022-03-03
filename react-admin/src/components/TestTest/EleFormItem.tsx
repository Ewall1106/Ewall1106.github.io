import React from 'react'
import { Form } from 'element-react'

export const EleFormItem = props => {
  return <Form.Item {...props}>{props.children}</Form.Item>
}

export default EleFormItem
