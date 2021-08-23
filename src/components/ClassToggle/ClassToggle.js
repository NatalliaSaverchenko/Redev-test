import React from 'react'
class ClassToggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState((prevState) => ({ isToggleOn: !prevState.isToggleOn }))
  }
  render() {
    return (
      <div>
        классовый компонент
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Включить' : 'Выключить'}
        </button>
      </div>
    )
  }
}
export default ClassToggle
