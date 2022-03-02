import { useContext } from 'react'
import { Button } from 'element-react'

import { Context } from './EleForm'

export const EleFormItemActions = () => {
  const { form, setForm, resetFields, validate } = useContext(Context)

  // confirm
  const onConfirm = () => {
    console.log('confirm', form)
  }
  // reset
  const onReset = () => {
    console.log('reset')
    resetFields()
  }
  // validate
  const onValidate = () => {
    validate(valid => {
      console.log('validate:', valid)
      console.log('校检规则请在Form.tsx的rules属性中配置')
    })
  }
  // reshow
  const onReshow = () => {
    setForm({ name: '11111111' })
  }

  return (
    <Button.Group>
      <Button onClick={onConfirm}>确认</Button>
      <Button onClick={onReset}>重置</Button>
      <Button onClick={onValidate}>校检</Button>
      <Button onClick={onReshow}>回显</Button>
    </Button.Group>
  )
}

export default EleFormItemActions
