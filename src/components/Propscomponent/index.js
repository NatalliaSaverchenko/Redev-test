const Propscomponent=({mynumber,mystring,myobject})=>{
    return(
    <div>
        <h1>Props</h1>
        <p>Число  {mynumber}</p>
        <p>Строка  {mystring}</p>
        <p>Oбъект  {myobject.name}</p>
    </div>
    )
}
export default Propscomponent;