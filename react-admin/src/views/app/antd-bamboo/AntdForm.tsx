import { Form } from 'antd'

export const AntdForm = props => {
  const layout = {
    labelCol: { span: props.labelcolspan },
    wrapperCol: { span: props.wrappercolspan }
  }

  return (
    <Form {...props} {...layout}>
      {props.children ? (
        props.children
      ) : (
        <div
          style={{
            color: '#8e8e8e',
            fontSize: '14px',
            height: '50px',
            border: '2px solid #eee',
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          请拖拽 FormItem 组件到此处
        </div>
      )}
    </Form>
  )
}

export default AntdForm
