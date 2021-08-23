import React from 'react'
import WarningBanner from '../WarningBanner/WarningBanner'

class WarningScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showWarning: true }
    this.handleToggleClicked = this.handleToggleClicked.bind(this)
  }
  handleToggleClicked() {
    this.setState((state) => ({ showWarning: !state.showWarning }))
  }
  render() {
    return (
      <div>
        классовый компонент
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClicked}>
          {this.state.showWarning ? 'спрятать' : 'Показать'}
        </button>
      </div>
    )
  }
}
export default WarningScreen
