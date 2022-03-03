import React from 'react'
import Root from './Root'
import EleForm from './EleForm'
import EleFormItem from './EleFormItem'
import EleFormItemInput from './EleFormItemInput'

export const TestTest = () => {
  return (
    <Root>
      <EleForm {...{ 'label-width': '80px' }}>
        <EleFormItem {...{ name: 'name', label: 'name' }}>
          <EleFormItemInput {...{ name: 'name' }}></EleFormItemInput>
        </EleFormItem>
      </EleForm>
    </Root>
  )
}

export default TestTest
