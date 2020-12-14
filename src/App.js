import { Link, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Landing from './components/Landing';
import Result from './components/Result';
import Yoga from './components/Yoga';
import Smoothie from '.component/Smoothie';
import  Juicing from '.component/Juicing';
import './index.css';

const App = () => {
    return (
      <div className="app-container">
        <main>
          <Switch>
            <Header />
            <Route exact path='/' component={Landing} /> 
            <Route path='/results' component={Result} />
            <Route path='/yoga' component={Yoga} />
            <Route path='/meditation' component={Meditation} />
            <Route path='/smoothies' component={Smoothie} />
            <Route path='/juicing' component={Juicing} />
          </Switch>
       </main>
      </div>
    );
  }

export default App;
