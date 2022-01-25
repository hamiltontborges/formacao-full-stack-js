import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import Customers from './pages/Customers'
import Home from './pages/Home'
import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'


const App = () => {
  return (
    <Router>
      <TemplateDefault>
        <Switch>
          <Route path="/customers">
            <TemplatePage title="Clientes" Component={Customers} />
          </Route>
          <Route path="/">
            <TemplatePage title="Página Inicial" Component={Home} />
          </Route>
        </Switch>
      </TemplateDefault>
    </Router>
  )
}

export default App;
