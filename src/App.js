import './App.css'

import {BrowserRouter,Route} from 'react-router-dom';
import Login from './Login'
import Signup from './Signup';
import Home from './Home';
import Therapy from './Therapy';
import SleepM from './SleepM';
import Music from './Music';
//import Sleep from './Sleep';

import Mood from './Mood'
//import M_anxi from './M_anxi'


function App() {
 
    return(
    <BrowserRouter>
    <div className="App">
      <Route>
        <Route exact path='/' component={Login }></Route>
        <Route exact path='/Signup' component={Signup}></Route>
        <Route exact path='/Home' component={Home}></Route>
        <Route exact path='/Login' component={Login}></Route>
        <Route exact path='/Submit' component={Home }></Route>
        <Route exact path='/Therapy' component={ Therapy}></Route>
        <Route exact path='/Sleep' component={ SleepM}></Route>
        <Route exact path='/Sback' component={Home}></Route>
        <Route exact path='/Music' component={Music}></Route>
        <Route exact path='/Mood' component={Mood}></Route>
        
        </Route>
    </div>
    </BrowserRouter>
    
    )
  }


export default App
