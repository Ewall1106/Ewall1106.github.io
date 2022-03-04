import React from 'react'
import Root from './Root'
import AntdForm from './AntdForm'
import AntdFormItem from './AntdFormItem'
import AntdFormItemInput from './AntdFormItemInput'
import AntdFormItemActions from './AntdFormItemActions'

export const AntdFormTest = () => {
  return (
    <Root>
      <AntdForm {...{ 'label-col-span': 4, 'wrapper-col-span': 20 }}>
        <AntdFormItem {...{ name: 'name', label: 'name' }}>
          <AntdFormItemInput {...{ name: 'name' }}></AntdFormItemInput>
        </AntdFormItem>

        <AntdFormItem {...{ name: 'age', label: 'age' }}>
          <AntdFormItemInput {...{ name: 'age' }}></AntdFormItemInput>
        </AntdFormItem>

        <AntdFormItem>
          <AntdFormItemActions></AntdFormItemActions>
        </AntdFormItem>
      </AntdForm>
    </Root>
  )
}

export default AntdFormTest
