import {React, useState} from 'react'
import Propscomponent from './components/Propscomponent'
import Counter from './components/Counter';

function App() {
  const user={id:0,name:'Natallia',age:30}
  const [isCounterShown,setCounterShown]=useState(false)

const handleFunction=()=>{
setCounterShown(!isCounterShown)
}
  return (
    <div className="App">
      <h1>Hello, {user.name}</h1>
      <Propscomponent 
      mynumber={5}
      mystring={'Пишу письмо'}
      myobject={user}/>
       <h2>Функция в props</h2>
      <Counter
      isOpen={isCounterShown}
      openCounter={handleFunction}/>
    </div>
  );
}

export default App
