// import { useState } from 'react'
import { scaleName } from '../constants/constants'

const TemperatureInput = ({ scale, temperature, onTemperatureChange }) => {
  //   const [temperature, setTemperature] = useState('')
  const handleChange = (e) => {
    onTemperatureChange(e.target.value)
  }
  return (
    <>
      <fieldset>
        <legend>Введите температуру в градусах {scaleName[scale]}</legend>
        <input value={temperature} onChange={handleChange} />
        {/* <BoilingVerdict celsius={temperature} /> */}
      </fieldset>
    </>
  )
}
export default TemperatureInput
