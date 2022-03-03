import React from 'react'
import Root from './Root'
import EleForm from './EleForm'
import EleFormItem from './EleFormItem'
import EleFormItemInput from './EleFormItemInput'
import EleFormItemActions from './EleFormItemActions'

export const EleBasicForm = () => {
  return (
    <Root>
      <EleForm {...{ 'label-width': '80px', style: {} }}>
        <EleFormItem {...{ style: {}, name: 'name', label: '名字' }}>
          <EleFormItemInput {...{ style: {}, name: 'name' }}></EleFormItemInput>
        </EleFormItem>

        <EleFormItem {...{ style: {}, name: 'age', label: '年龄' }}>
          <EleFormItemInput {...{ style: {}, name: 'age' }}></EleFormItemInput>
        </EleFormItem>

        <EleFormItem {...{ style: {}, name: 'job', label: '职业' }}>
          <EleFormItemInput {...{ style: {}, name: 'job' }}></EleFormItemInput>
        </EleFormItem>

        <EleFormItem>
          <EleFormItemActions></EleFormItemActions>
        </EleFormItem>
      </EleForm>
    </Root>
  )
}

export default EleBasicForm
