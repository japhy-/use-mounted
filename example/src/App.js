import React from 'react'
import { useMyHook } from '@ithreat/use-mounted'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App