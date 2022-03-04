import React, { createContext } from 'react'
import { Form } from 'antd'

export const Context = createContext(null)

export const AntdForm = props => {
  const [form] = Form.useForm()

  const layout = {
    labelCol: {
      span: props['label-col-span'] || 4,
      offset: props['label-col-offset'] || 0
    },
    wrapperCol: {
      span: props['wrapper-col-span'] || 20,
      offset: props['wrapper-col-offset'] || 0
    }
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
