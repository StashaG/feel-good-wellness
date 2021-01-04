import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import Yoga from './components/Yoga';
// import YogaCard from './components/YogaCard';
// import Favorites from './components/Favorites';
// import Header from './components/Header';
import './index.css';
import './App.css'
import Footer from './components/Footer';


const App = () => {

    return (

      <div className="app-container">
        <Navigation />
        <div className="container">
          {/* <Header /> */}
         <main>
          <Switch>
            <Route exact path='/' component={Landing} /> 
            <Route path='/yoga' component={Yoga} />
            {/* <Route path='/favorites' component={Favorites} />  */}
            {/* <Route path='/yogacard' component={YogaCard} />  */}

          </Switch>
       </main>
       <Footer />
       </div>
      </div>
    );
  }

export default App;
