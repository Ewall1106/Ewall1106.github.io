import React from 'react'
import { EleForm } from './EleForm'
import { EleFormItem } from './EleFormItem'
import { EleFormItemInput } from './EleFormItemInput'
import { EleFormItemActions } from './EleFormItemActions'

function Index() {
  return (
    <EleForm {...{ labelWidth: '50px' }}>
      <EleFormItem {...{ name: 'note', label: 'Note' }}>
        {/* <EleFormItemInput {...{ name: 'note' }} /> */}
      </EleFormItem>
      <EleFormItem {...{ name: 'age', label: 'age' }}>
        <EleFormItemInput {...{ name: 'age' }} />
      </EleFormItem>
      <EleFormItem>
        <EleFormItemActions />
      </EleFormItem>
    </EleForm>
  )
}

export default Index
