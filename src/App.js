import {Route, Switch, BrowserRouter} from 'react-router-dom'

import Home from './components/Home'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import './App.css'

const App = () => (
  <BrowserRouter>
    <div className="app-container">
      <Switch>
        <Route exact path="/Login" component={LoginForm} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)
export default App
