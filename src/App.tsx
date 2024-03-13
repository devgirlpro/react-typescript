import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';


function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

const nameList = [
  {
    first: 'Lili',
    last: ' LIan'
  }, {
    first: 'Niki',
    last: 'Nilan'
  }, {
    first: 'Risi',
    last: 'Delan'
  }
]

  return (
    <div className="App">
      <h1>React TypeScript</h1>
      <Greet name="Rosi" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList  name={nameList} />
    </div>
  );
}

export default App;
