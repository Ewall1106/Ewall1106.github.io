import React, { useContext } from 'react'
import { Button } from 'antd'

import { Context } from './AntdForm'

export const AntdFormItemActions = props => {
  const { form } = useContext(Context)

  // 确认
  const onConfirm = () => {
    console.log('confirm', form.getFieldsValue())
  }
  // 重置
  const onReset = () => {
    console.log('reset')
    form.resetFields()
  }
  // 校检
  const onValidate = () => {
    console.log('具体校检规则请在每个 FormItem.tsx 的 rules 属性中配置')
    form
      .validateFields()
      .then(values => {
        console.log('values', values)
      })
      .catch(error => {
        console.log('error', error)
      })
  }
  // 回显
  const onReshow = () => {
    console.log('reshow 设置form.setFieldsValue({...})')
    form.setFieldsValue({})
  }

  return (
    <Button.Group>
      <Button type="primary" onClick={onConfirm}>
        确认
      </Button>
      <Button onClick={onReset}>重置</Button>
      <Button onClick={onValidate}>校检</Button>
      <Button onClick={onReshow}>回显</Button>
    </Button.Group>
  )
}

export default AntdFormItemActions
