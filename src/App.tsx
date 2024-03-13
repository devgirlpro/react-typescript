import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';


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
      <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name='Vishwsa'  isLoggedIn={true} />
    </div>
  );
}

export default App;
