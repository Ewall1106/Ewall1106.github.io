import TestReact from '@/components/TestReact'
import Test from '@/components/test'
import SwipeTest from '@/components/SwipeTest'
import CountDownTest from '@/components/CountDownTest'

function App() {
  return (
    <div id="App" style={{ fontSize: '16px' }}>
      <CountDownTest/>
      <TestReact />
      <Test />
      <SwipeTest/>
    </div>
  )
}

export default App
