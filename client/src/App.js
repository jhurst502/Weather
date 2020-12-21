import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Mars from './components/Mars';


function App() {
  return (
    <Router>
      <Navigation />
      <Route path='/' component={Home} exact/>
      <Route path='/mars' component={Mars} exact/>
      <Route path='/about' component={About} />
    </Router>
  );
}

export default App;
