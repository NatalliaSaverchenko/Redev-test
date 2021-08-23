import { useState } from 'react'

const FunctionToggle = () => {
  const [isToggleOn, setToggle] = useState(true)
  const handleClick = () => {
    setToggle((prevToggle) => !prevToggle)
  }
  return (
    <div>
      функциональный компонент
      <button onClick={handleClick}>
        {isToggleOn ? 'Включить' : 'Выключить'}
      </button>
    </div>
  )
}
export default FunctionToggle
