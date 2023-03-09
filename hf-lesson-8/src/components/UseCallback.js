import { useMemo, useState, useRef, useCallback } from 'react'
const UseCallback = () => {
  const refX = useRef()
  const [x, setX] = useState(1)
  const [rand, setRand] = useState(0)

  const randomizeX = () => {
    setRand(Math.round(Math.random() * 100))
  }

  const doSomething = (x) => {
      console.log({
        doSomething: 'doSomething',
        x: x * 10
      })
  }

  const callbackFn = useCallback(() => {
    doSomething(x)
  }, [x])

  const onChangeHandler = e => {
    setX(refX.current.value * 1)
  }

  return (
    <div>
      <h1>UseCallback</h1>
      <div>
        <label>X</label>
        <input
          ref={refX}
          type='number'
          onChange={onChangeHandler}
          value={x}
        ></input>
      </div>
      <button onClick={randomizeX}>Randomize</button>
      <div>Rand: {rand}</div>
      <button onClick={callbackFn}>RunCallbackFn</button>
    </div>
  )
}

export default UseCallback
