import { AntdForm } from './AntdForm'
import { AntdFormItem } from './AntdFormItem'
import { AntdFormItemInput } from './AntdFormItemInput'
import { AntdFormItemActions } from './AntdFormItemActions'

function Index() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 }
  }

  return (
    <div id="App">
      <AntdForm {...layout}>
        <AntdFormItem {...{ name: 'note', label: 'Note' }}>
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
