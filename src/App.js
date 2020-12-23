import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Result from './components/Result';
import Yoga from './components/Yoga';
import Smoothie from './components/Smoothie';
// import Header from './components/Header';
import Food from './components/Food';
import './index.css';
import './App.css'
// import Footer from './components/Footer';


const App = () => {

    return (

      <div className="app-container">
        <Navigation />
        <div className="container">
          {/* <Header /> */}
        {/* <img src="/images/healthy-food-display.jpg" alt="healthy-food"/> */}
         <main>
          <Switch>
            <Route exact path='/' component={Landing} /> 
            <Route path='/results' component={Result} />
            <Route path='/yoga' component={Yoga} />
            <Route path='/smoothie' component={Smoothie} />
            <Route path='/food' component={Food} />
            {/* <Route path='/footer' component={Footer} />  */}
          </Switch>
       </main>
       {/* <Footer /> */}
       </div>
      </div>
    );
  }

export default App;
