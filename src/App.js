import { Link, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import Result from './components/Result';
import './index.css';

const App = () => {
    return (
      <div className="app-container">
        <main>
          <Switch>
            <Route exact path='/' component={Landing} /> 
            <Route path='/results' component={Result} />
          </Switch>
       </main>
      </div>
    );
  }

export default App;
