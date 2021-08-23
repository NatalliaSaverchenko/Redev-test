import React from 'react'
class NameForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ value: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    alert('Отправленное имя: ' + this.state.value)
  }
  render() {
    return (
      <div>
        классовый
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <input type="submit" value="Отправить" />
        </form>
      </div>
    )
  }
}
export default NameForm
