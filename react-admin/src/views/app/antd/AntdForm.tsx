import React, { createContext } from 'react'
import { Form } from 'antd'

export const Context = createContext(null)

export const AntdForm = props => {
  const [form] = Form.useForm()

  return (
    <Context.Provider value={{ form }}>
      <Form form={form} {...props}>
        {props.children}
      </Form>
    </Context.Provider>
  )
}

export default AntdForm
