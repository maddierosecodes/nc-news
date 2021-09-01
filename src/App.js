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
import axios from 'axios';

function App() {
  //States
  const [articles, setArticles] = useState([]);
  const [currentFilter, setFilter] = useState({
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
  // Use Effects

  // HTML
  return (
    <div className="App">
      <Router>
        <ContainerProvider>
          <Header
            categories={categories}
            currentUser={currentUser}
            latest={latest}
            setFilter={setFilter}
            currentFilter={currentFilter}
            setArticles={setArticles}
          />
          <Switch>
            <div className="container_content">
              <Route exact path="/">
                <Main articles={articles} />
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
            </div>
          </Switch>
        </ContainerProvider>
      </Router>
    </div>
  );
}

export default App;
