import { AntdForm } from './antd/AntdForm'
import { AntdFormItem } from './antd/AntdFormItem'
import { AntdFormItemInput } from './antd/AntdFormItemInput'
import { AntdFormItemActions } from './antd/AntdFormItemActions'

function App() {
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
        <AntdFormItemActions />
      </AntdForm>
    </div>
  )
}

export default App
