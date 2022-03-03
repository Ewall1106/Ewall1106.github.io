import React from 'react'
import ReactDOM from 'react-dom'
import App from './views/app'

import './styles'
import 'antd/dist/antd.css'
import 'element-theme-default'

// if (process.env.NODE_ENV === 'development') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root')
)
