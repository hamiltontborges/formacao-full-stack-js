import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import TemplateDefault from './templates/default/Default'
import Home from './pages/Home'


const App = () => {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  )
}

export default App;
