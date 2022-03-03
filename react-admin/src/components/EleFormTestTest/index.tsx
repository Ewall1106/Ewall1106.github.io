import React from 'react'
import Root from './Root'
import EleForm from './EleForm'
import EleFormItem from './EleFormItem'
import EleFormItemInput from './EleFormItemInput'
import EleFormItemActions from './EleFormItemActions'

export const EleFormTestTest = () => {
  return (
    <Root>
      <EleForm {...{ 'label-width': '80px' }}>
        <EleFormItem {...{ name: 'name', label: '姓名' }}>
          <EleFormItemInput {...{ name: 'name' }}></EleFormItemInput>
        </EleFormItem>

        <EleFormItem {...{ name: 'age', label: '年龄' }}>
          <EleFormItemInput {...{ name: 'age' }}></EleFormItemInput>
        </EleFormItem>

        <EleFormItem>
          <EleFormItemActions></EleFormItemActions>
        </EleFormItem>
      </EleForm>
    </Root>
  )
}

export default EleFormTestTest
