import React from 'react'
import Hooks from './components/hooks'
import Timeout from './components/timeout'
// import Useeffect from './components/Useeffect'
import Usem from './components/usememo'
import FocusInput from './components/useref'
import Greeting from './components/props'
import Effect from './components/Effect'
import State from './components/State'
// import Usecontext from './components/Usecontext'
import { Newname,Child1,Child2 } from './components/Usecontext'

function App() {
  return (
    <>
      {/* <Hooks/> */}
      {/* <Timeout/> */}
      {/* <Useeffect /> */}
      {/* <FocusInput/> */}
      {/* <Usem/> */}
      {/* <Greeting name="asi"/> */}
      {/* <Effect/> */}
      <State/>
    {/* <Newname.Provider value={"sameer"}>
      <Child1></Child1>
      <Child2></Child2>
    </Newname.Provider> */}


    </>
  )
}

export default App