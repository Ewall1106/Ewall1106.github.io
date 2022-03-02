import React from 'react'
import { EleForm } from './EleForm'
import { EleFormItem } from './EleFormItem'
import { EleFormItemInput } from './EleFormItemInput'
import { EleFormItemActions } from './EleFormItemActions'

function Index() {
  return (
    <EleForm>
      <EleFormItem {...{ name: 'note', label: 'Note' }}>
        <EleFormItemInput {...{ name: 'note', label: 'Note' }} />
      </EleFormItem>
      <EleFormItem>
        <EleFormItemActions />
      </EleFormItem>
    </EleForm>
  )
}

export default Index
