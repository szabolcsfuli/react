import { useMemo, useState, useRef } from 'react'
const UseMemo = () => {
  const refX = useRef()
  const [x, setX] = useState(1)
  const [rand, setRand] = useState(0)

  const randomizeX = () => {
    setRand(Math.round(Math.random() * 100))
  }

  const calc = useMemo(() => {
    console.log('calculate number')
    return x * 10
  }, [x])

  const onChangeHandler = e => {
    setX(refX.current.value * 1)
  }

  return (
    <div>
      <h1>UseMemo</h1>
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
      <div>Calculated number: {calc}</div>
    </div>
  )
}

export default UseMemo
