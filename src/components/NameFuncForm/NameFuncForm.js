import { useState } from 'react'

const NameFuncForm = () => {
  const [input, setInput] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Отправленное имя:' + input)
  }
  const handleChange = (event) => {
    setInput(event.target.value)
  }
  return (
    <div>
      функциональный
      <form onSubmit={handleSubmit}>
        <label>
          Имя:
          <input type="text" value={input} onChange={handleChange} />
        </label>
        <input type="Submit" defaultValue="Отправить" />
      </form>
    </div>
  )
}
export default NameFuncForm
