import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import landingPage from './components/landingPage/landingPage.jsx';
import Home from './components/home/home.jsx';
import DogCreate from './components/dogcreate/dogCreate.jsx';
import DogsDetail from './components/dogDetail/dogsDetail.jsx'
import NavBar from './components/navBar/navBar';


function App() {
  return (
    <BrowserRouter>    
    <div className="App">
      
        <Route exact path='/'  component = {landingPage} />
        <Route  path ='/home'  component={NavBar}/> 
        <Route exact path ='/home'  component={Home}/>
        <Route exact path ='/home/dogs' component={DogCreate} />
        <Route exact path = '/home/home/:id' component= {DogsDetail}/>

    </div>
    </BrowserRouter>
  );
}

export default App;
