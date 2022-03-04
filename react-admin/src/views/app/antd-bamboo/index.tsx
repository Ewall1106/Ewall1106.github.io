import { AntdForm } from './AntdForm'
import { AntdFormItem } from './AntdFormItem'
import { AntdFormItemInput } from './AntdFormItemInput'
import { AntdFormItemActions } from './AntdFormItemActions'

function Index() {
  return (
    <div id="App">
      <AntdForm
        {...{ labelcolspan: 4, labelcoloffset: 1, wrappercoloffset: 2, wrappercolspan: 20 }}
      >
        <AntdFormItem {...{ name: 'note', label: 'Note', required: true }}>
          <AntdFormItemInput />
        </AntdFormItem>
        <AntdFormItem {...{ name: 'age', label: 'age' }}>
          <AntdFormItemInput />
        </AntdFormItem>
        <AntdFormItem>
          <AntdFormItemActions />
        </AntdFormItem>
      </AntdForm>
    </div>
  )
}

export default Index
