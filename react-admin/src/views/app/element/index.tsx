import React from 'react'
import { EleForm } from './EleForm'
import { EleFormItem } from './EleFormItem'
import { EleFormItemInput } from './EleFormItemInput'
import { EleFormItemActions } from './EleFormItemActions'

function Index() {
  return (
    <EleForm {...{ labelWidth: '50px' }}>
      <EleFormItem {...{ name: 'name', label: '名字' }}>
        <EleFormItemInput {...{ name: 'name' }} />
      </EleFormItem>
      <EleFormItem {...{ name: 'age', label: '年龄' }}>
        <EleFormItemInput {...{ name: 'age' }} />
      </EleFormItem>
      <EleFormItem>
        <EleFormItemActions />
      </EleFormItem>
    </EleForm>
  )
}

export default Index
