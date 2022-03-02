import React from 'react'
import { Form } from 'antd'

export const AntdFormItem = props => {
  return <Form.Item {...props}>{props.children}</Form.Item>
}

export default AntdFormItem
