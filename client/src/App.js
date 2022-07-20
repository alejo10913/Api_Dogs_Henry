import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import landingPage from './components/landingPage/landingPage.jsx';
import Home from './components/home/home.jsx';
import DogCreate from './components/dogcreate/dogCreate.jsx';
import DogsDetail from './components/dogDetail/dogsDetail.jsx'



function App() {
  return (
    <BrowserRouter>    
    <div className="App">
      <Switch>
        <Route exact path='/'  component = {landingPage} />
        <Route exact path ='/home'  component={Home}/>
        <Route exact path ='/dogs' component={DogCreate} />
        <Route exact path = '/home/:id' component= {DogsDetail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
