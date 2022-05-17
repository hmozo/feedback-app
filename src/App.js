import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

import Header from './components/Header'
import AboutPage from './pages/AboutPage'
import MainPage from './pages/MainPage';
import AboutIconLink from './components/AboutIconLink';
import Card from './components/shared/Card';
import Post from './components/Post'
import { FeedbackProvider } from './context/FeedbackContext';

export default function App() {

  return (
    <FeedbackProvider>
    <Router>
        <Header bgColor='green' color='red' />
        <div className="container">
          <Routes>
            <Route exact path='/' element={ <MainPage /> }  />
            <Route path='/about' element={ <AboutPage /> } />
            <Route path='/post/*' element={ <Post /> } />
          </Routes>

          <Card>
            <NavLink to='/about' activeClassName='active'>
                About
              </NavLink>
              /
              <NavLink to='/post' activeClassName='active'>
                Post
              </NavLink>
          </Card>
            
          <AboutIconLink />
        </div>

    </Router>
    </FeedbackProvider>
  )
}

