import { Button } from 'antd'

export const AntdFormItemActions = props => {
  return (
    <Button.Group>
      <Button type="primary">确认</Button>
      <Button>重置</Button>
      <Button>校检</Button>
      <Button>回显</Button>
    </Button.Group>
  )
}

export default AntdFormItemActions
