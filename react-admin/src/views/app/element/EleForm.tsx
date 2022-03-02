import React, { useRef, useState, createContext } from 'react'
import { Form } from 'element-react'

export const Context = createContext(null)

export const EleForm = props => {
  const [form, setForm] = useState({})
  const ref = useRef(null)

  const resetFields = () => {
    ref.current.resetFields()
  }
  const validate = cb => {
    ref.current.validate(cb)
  }

  return (
    <Context.Provider value={{ form, setForm, resetFields, validate }}>
      <Form
        {...props}
        ref={ref}
        model={form}
        labelWidth={props['label-width']}
        labelPosition={props['label-position']}
        labelSuffix={props['label-suffix']}
        // rules={{
        //   name: [
        //     { required: true, message: '改字段不能为空', trigger: 'change' },
        //     { min: 3, max: 5, message: '长度在3到5个字符', trigger: 'change' }
        //   ]
        // }}
      >
        {props.children}
      </Form>
    </Context.Provider>
  )
}

export default EleForm
