import { Link, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import Result from './components/Result';
import Yoga from './components/Yoga';
import Smoothie from './components/Smoothie';
import Juicing from './components/Juicing';

import './index.css';

const App = () => {

    return (
      <div className="app-container">
        <Header />
         <main>
          <Switch>
            <Route exact path='/' component={Landing} /> 
            <Route path='/results' component={Result} />
            <Route path='/yoga' component={Yoga} />
            <Route path='/smoothie' component={Smoothie} />
            <Route path='/juicing' component={Juicing} /> 
          </Switch>
       </main>
      </div>
    );
  }

export default App;
