import { Form } from 'element-react/next'
import 'element-theme-default'

export const EleFormItem = props => {
  return (
    <Form.Item {...props}>
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
          请拖拽组件到此处
        </div>
      )}
    </Form.Item>
  )
}

export default EleFormItem
