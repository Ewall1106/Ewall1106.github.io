import React from 'react'
import { Form } from 'antd'

export const AntdFormItem = props => {
  return (
    <Form.Item
      {...props}
      rules={[
        { required: true, message: 'Pleas1212e input your username!' }
        // {
        //   type: 'email',
        //   message: 'The input is not valid E-mail!'
        // }
        // ({ getFieldValue }) => ({
        //   validator(_, value) {
        //     const confirmPassWord = value
        //     if (!confirmPassWord || getFieldValue('password') === confirmPassWord) {
        //       return Promise.resolve()
        //     }
        //     return Promise.reject(new Error('The two passwords that you entered do not match!'))
        //   }
        // })
      ]}
    >
      {props.children}
    </Form.Item>
  )
}

export default AntdFormItem
