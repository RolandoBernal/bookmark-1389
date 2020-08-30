import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header';
import BookmarkList from './components/bookmarks/BookmarkList';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <BookmarkList />
      <Footer />
    </div>
  );
}

export default App;
