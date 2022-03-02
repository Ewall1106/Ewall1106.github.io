import { useContext } from 'react'
import { Input } from 'element-react'

export const EleFormItemInput = props => {
  const { form, setForm } = useContext(props.context)
  const onchange = e => {
    setForm(Object.assign({}, form, { [props.prop]: e }))
  }
  return <Input {...props} value={form[props.prop]} onChange={e => onchange(e)} />
}

export default EleFormItemInput
