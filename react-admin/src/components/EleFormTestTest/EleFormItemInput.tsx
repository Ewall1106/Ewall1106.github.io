import { useContext } from 'react'
import { Input } from 'element-react'

import { Context } from './EleForm'

export const EleFormItemInput = props => {
  const { form, setForm } = useContext(Context)
  const onchange = e => {
    setForm(Object.assign({}, form, { [props.name]: e }))
  }
  return <Input {...props} value={form[props.name]} onChange={e => onchange(e)} />
}

export default EleFormItemInput
