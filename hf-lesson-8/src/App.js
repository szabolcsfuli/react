import React, { useMemo, useRef, useState } from 'react'
import UseCallback from './components/UseCallback'
import UseMemo from './components/UseMemo'

function App () {

  return (
    <React.Fragment>
      <UseMemo></UseMemo>
      <UseCallback></UseCallback>
    </React.Fragment>
  )
}

export default App
