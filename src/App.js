import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './pages/Landing';
import Pages from './pages/Pages';
import Account from './pages/Account';
import Documentation from './pages/Documentation';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" component={Landing} exact></Route>
          <Route path="/pages" component={Pages}></Route>
          <Route path="/account" component={Account}></Route>
          <Route path="/documentation" component={Documentation}></Route>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App;
