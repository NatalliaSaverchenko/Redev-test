import { Route, Switch } from 'react-router-dom'
import First from '../pages/first/First'
import Second from '../pages/Second/Second'
const RouterView = () => {
  return (
    <Switch>
      <Route exact path="/" component={First} />
      <Route exact path="/temperature-components" component={Second} />
    </Switch>
  )
}
export default RouterView
