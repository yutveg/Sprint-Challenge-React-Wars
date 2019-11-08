import React from 'react';
import './App.css';
import CharacterCards from './components/StarWarsGet.js'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <>
    <h1 style={{textAlign: 'center', margin: '0 auto 4% auto', width: '50%', fontSize: '4rem', backgroundImage: 'linear-gradient( 102.2deg,  rgba(109,118,150,1) 7.1%, rgba(89,72,79,1) 14.7%, rgba(69,92,79,1) 28%, rgba(204,85,67,1) 43.4%, rgba(237,181,121,1) 60.2%, rgba(219,230,175,1) 76.8% )', borderRadius: '15px', padding: '4% 0'}}>Star Wars Cards</h1>
    <CharacterCards />
    </>
  );
}

export default App;
