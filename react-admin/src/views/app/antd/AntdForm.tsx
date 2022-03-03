import React, { createContext } from 'react'
import { Form } from 'antd'

export const Context = createContext(null)

export const AntdForm = props => {
  const [form] = Form.useForm()

  const layout = {
    labelCol: { span: props.labelcolspan },
    wrapperCol: { span: props.wrappercolspan }
  }

  return (
    <Context.Provider value={{ form }}>
      <Form form={form} {...props} {...layout}>
        {props.children}
      </Form>
    </Context.Provider>
  )
}

export default AntdForm
