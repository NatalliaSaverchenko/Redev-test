import { React, useState } from 'react'
import Propscomponent from '../../components/Propscomponent'
import Counter from '../../components/Counter'
import FunctionToggle from '../../components/FunctionToggle/FunctionToggle'
import ClassToggle from '../../components/ClassToggle/ClassToggle'
import WarningPage from '../../components/WarningPage/WarningPage'
import WarningScreen from '../../components/WarningScreen/WarningScreen'
import NameForm from '../../components/NameForm/NameForm'
import NameFuncForm from '../../components/NameFuncForm/NameFuncForm'
function First() {
  const user = { id: 0, name: 'Natallia', age: 30 }
  const [isCounterShown, setCounterShown] = useState(false)

  const handleFunction = () => {
    setCounterShown(!isCounterShown)
  }
  return (
    <div className="App">
      <h1>Hello, {user.name}</h1>
      <Propscomponent mynumber={5} mystring={'Пишу письмо'} myobject={user} />
      <h2>Функция в props</h2>
      <Counter isOpen={isCounterShown} openCounter={handleFunction} />
      <h2>Функциональныe и классовые компоненты</h2>
      <h3>Первый</h3>
      <FunctionToggle />
      <ClassToggle />
      <h3>Второй</h3>
      <WarningPage />
      <WarningScreen />
      <h3>Третий</h3>
      <NameFuncForm />
      <NameForm />
    </div>
  )
}

export default First
