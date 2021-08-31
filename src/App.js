// Styles
import './App.css';
// Components
import Header from './Components/Header';
import Main from './Components/Main';
import Post from './Components/Post';
import Article from './Components/Article';
import { ContainerProvider } from './Components/Container';
import Profile from './Components/Profile';
// Package Imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  //States
  const [currentFilter, setCurrentFilter] = useState({
    sort: 'DESC',
    sortBy: 'date',
    votes: 10
  });
  const [latest, setLatest] = useState([
    { text: 'Welcome to NC News!', link: '/' },
    { text: 'Bear Attacks Superfan', link: '/profile' }
  ]);
  const [categories, setCategories] = useState(['none']);
  const [currentUser, setCurrentUser] = useState({ username: 'signedOut' });
  // HTML
  return (
    <div className="App">
      <Router>
        <Header
          setCurrentFilter={setCurrentFilter}
          categories={categories}
          currentUser={currentUser}
          latest={latest}
        />
        <ContainerProvider setCurrentFilter={setCurrentFilter}>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/profile/:username">
              <Profile />
            </Route>
            <Route exact path="/articles/:article">
              <Article />
            </Route>
            <Route exact path="/post">
              <Post />
            </Route>
          </Switch>
        </ContainerProvider>
      </Router>
    </div>
  );
}

export default App;
